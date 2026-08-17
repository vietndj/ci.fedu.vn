import React, { useState } from "react";
import { useTheme } from "../theme";
import { useContent } from "../content";

export function FaqSection() {
  const t = useTheme();
  const c = useContent();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Tôi không biết lập trình / code thì có cài đặt và dùng được AI Agent không?",
      a: "Hoàn toàn được! Bạn không cần viết bất kỳ dòng code nào. Tất cả được hướng dẫn theo dạng 'Kéo - Thả - Cài đặt 1 Click'. Thao tác trên giao diện trực quan và bạn chỉ cần nhập lệnh bằng tiếng Việt."
    },
    {
      q: "Tôi dùng máy tính cấu hình bình thường hoặc MacBook cũ có chạy được không?",
      a: "Được 100%. Toàn bộ mô hình AI và Agent xử lý trên nền tảng đám mây (Cloud) hoặc thông qua API, không ngốn RAM hay chip máy tính của bạn."
    },
    {
      q: "AI viết kịch bản có bị cứng nhắc, sáo rỗng giống bài ChatGPT thông thường?",
      a: "Đó là sự khác biệt giữa Prompt cơ bản và Mega Prompt. Khóa học dạy bạn kỹ thuật nạp dữ liệu (Knowledge Base) và cá nhân hóa giọng văn (Brand Voice), giúp AI xuất bản thảo đúng 100% phong cách và chuyên môn của bạn."
    },
    {
      q: "Tôi bận đi làm cả ngày, khóa học có mất nhiều thời gian không?",
      a: "Khóa học thiết kế dạng Micro-learning (10-15 phút/video bài giảng). Bạn học đến đâu áp dụng thực hành ngay đến đó. Mục tiêu tối thượng của khóa là giúp bạn tiết kiệm 80% thời gian làm việc hàng ngày."
    },
    {
      q: "Tôi có được hỗ trợ khi gặp lỗi kỹ thuật hay cài đặt Agent không?",
      a: "Có! Bạn được tham gia cộng đồng Skool độc quyền trọn đời và có đặc quyền hỗ trợ trực tiếp 1-1 qua Zalo cùng Thầy Việt để giải đáp mọi thắc mắc trong quá trình thực hành."
    }
  ];

  return (
    <section className="cl-section" style={{ background: t.bg }}>
      <div className="cl-container">
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ 
            display: "inline-block", 
            padding: "6px 12px", 
            background: "rgba(255, 255, 255, 0.05)",
            border: `1px solid ${t.line}`,
            borderRadius: 20,
            fontSize: 12,
            fontWeight: 700,
            color: t.accent,
            marginBottom: 16,
            letterSpacing: 1
          }}>
            5 CÂU HỎI THƯỜNG GẶP
          </div>
          <h2 className="cl-heading" style={{ fontFamily: t.fontDisplay, color: t.textBase }}>
            "Liệu chương trình này có phù hợp với tôi không?"
          </h2>
          <p style={{ color: t.textMuted, marginTop: 12, fontSize: 16 }}>
            Giải quyết 5 nỗi sợ lớn nhất đang ngăn cản bạn:
          </p>
        </div>

        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                style={{
                  background: "var(--cl-card, #f8f9fa)",
                  border: `1px solid ${isOpen ? t.accent : t.line}`,
                  borderRadius: 16,
                  overflow: "hidden",
                  transition: "all 0.3s ease"
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  style={{
                    width: "100%",
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "none",
                    border: "none",
                    color: t.textBase,
                    fontSize: 16,
                    fontWeight: 600,
                    textAlign: "left",
                    cursor: "pointer",
                    fontFamily: t.fontBody
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 20 }}>🛡️</span>
                    {faq.q}
                  </div>
                  <span style={{ 
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", 
                    transition: "transform 0.3s ease",
                    color: t.accent,
                    fontSize: 20,
                    fontWeight: 300
                  }}>
                    ↓
                  </span>
                </button>
                
                <div style={{ 
                  maxHeight: isOpen ? 500 : 0, 
                  opacity: isOpen ? 1 : 0,
                  transition: "all 0.3s ease",
                  padding: isOpen ? "0 24px 20px 24px" : "0 24px",
                  color: "var(--cl-text-body, #374151)",
                  lineHeight: 1.6,
                  fontSize: 15,
                  paddingLeft: 56
                }}>
                  {faq.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
