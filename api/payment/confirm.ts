import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(455).json({ error: 'Method not allowed' });
  }

  try {
    const { name = "", phone = "", email = "", url = "", transactionId = "", rowIndex } = req.body || {};
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz3s4V-cItvUcM3g-oZy0mAWsxGXr9UhLhz_qPgXWZgFNTT9KgKZxu391m-aRv8rz8U/exec";
    const MAKE_WEBHOOK_URL = "https://hook.us2.make.com/mdc9dfwges9r1v06momkpboh9auhrtgu";

    let updateData: any = {};
    if (!GOOGLE_SCRIPT_URL) {
      console.warn("GOOGLE_SCRIPT_URL is not set. Skipping sheet status update.");
    } else {
      try {
        const payload = {
          action: "update_status",
          phone: phone,
          status: "Đã thanh toán"
        };

        const updateRes = await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const contentType = updateRes.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
          updateData = await updateRes.json();
        } else {
          const text = await updateRes.text();
          console.warn(`Google Script confirm status returned text: ${text.substring(0, 100)}, status: ${updateRes.status}`);
        }
      } catch (scriptErr) {
        console.error("Failed to update Google Sheet:", scriptErr);
      }
    }

    // Use updated email/name from sheet or frontend fallback
    const customerEmail = updateData.email || email;
    const customerName = updateData.name || name;

    // Trigger Make.com webhook if email exists
    if (customerEmail) {
      console.log(`Triggering Make.com webhook for Skool automation for ${customerEmail}...`);
      try {
        const makeRes = await fetch(MAKE_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: customerName,
            email: customerEmail,
            phone: phone,
            course: "AI Creator System",
            transactionId
          })
        });
        if (!makeRes.ok) {
           console.error(`Make webhook failed with status: ${makeRes.status}`);
        }
      } catch (makeErr) {
         console.error("Failed to call Make webhook:", makeErr);
      }
    }

    // --- TELEGRAM NOTIFICATION ---
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "8547666953:AAGm6a5KFoGmmMfyitlFXxCdZdH9cN0d-DE";
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || "2050406425";

    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
      const isManual = transactionId.startsWith("MANUAL_");
      let tgMessage = "";
      if (isManual) {
        tgMessage = `⚠️ *Khách bấm nút nhưng CHƯA CK (hoặc SePay chưa báo)*\n👤 Tên: ${customerName}\n📞 SĐT: ${phone}\n✉️ Email: ${customerEmail}`;
      } else {
        tgMessage = `✅ *ĐÃ NHẬN TIỀN THÀNH CÔNG (SePay Confirm)*\n👤 Tên: ${customerName}\n📞 SĐT: ${phone}\n✉️ Email: ${customerEmail}\n🔖 Mã GD: ${transactionId}`;
      }

      try {
        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: tgMessage,
            parse_mode: "Markdown"
          })
        });
      } catch (tgErr) {
        console.error("Failed to send Telegram message:", tgErr);
      }
    }

    return res.status(200).json({ success: true });
  } catch (err: any) {
    console.error("Error confirming payment:", err);
    return res.status(500).json({ error: "Failed to confirm payment", details: err.message });
  }
}
