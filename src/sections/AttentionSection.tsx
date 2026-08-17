import React from "react";
import { useContent } from "../content";
import { useTheme } from "../theme";
import { FadeIn, Label, SH, Sec } from "../components/ui";

export function AttentionSection() {
  const c = useContent();
  const t = useTheme();

  const choices = [
    {
      badge: "Lựa chọn 1",
      title: "Tự mày mò Prompt trên mạng",
      cost: "Mất 3 - 6 tháng + Output sáo rỗng",
      desc: "Copy các câu prompt chung chung trên ChatGPT/Facebook. Nhận về kịch bản vô hồn, không đúng chuyên môn ngành, video đăng lên không ai xem.",
      isBest: false,
      tag: "❌ Mất Thời Gian"
    },
    {
      badge: "Lựa chọn 2",
      title: "Học Khóa Prompt Hàn Lâm / Mua 10 Tool",
      cost: "5.000.000 – 10.000.000 VNĐ",
      desc: "Học lý thuyết AI chung chung không ứng dụng được cho video. Tốn tiền mua hàng loạt subscription nhưng không tích hợp thành một quy trình tự động hoàn chỉnh.",
      isBest: false,
      tag: "⚠️ Tốn Chi Phí"
    },
    {
      badge: "Lựa chọn 3 — KHUYÊN DÙNG",
      title: "AI Creator System",
      cost: `Chỉ ${c.price} VNĐ (Tổng giá trị ${c.value})`,
      desc: "Sở hữu toàn bộ 4 Cấp độ AI Creator + Bộ 50+ Mega Prompt Video + Agent Phân Tích Video + Agent Sửa Phụ Đề + Template Landing Page + Cộng đồng Skool trọn đời.",
      isBest: true,
      tag: "🏆 Tối Ưu Nhất"
    }
  ];

  return (
    <Sec maxWidth={960}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Label>{c.attentionLabel}</Label>
          <SH typed>{c.attentionHeading}</SH>
          <p style={{ fontSize: 17, color: "var(--cl-text-muted, #888)", maxWidth: 680, margin: "-16px auto 0", lineHeight: 1.75 }}>
            {c.attentionPara}
          </p>
        </div>
      </FadeIn>

      {/* ── 3 Choices Comparison Cards ── */}
      <FadeIn delay={100}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          marginBottom: 56
        }}>
          {choices.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: item.isBest ? "rgba(243, 103, 22, 0.06)" : "rgba(255, 255, 255, 0.02)",
                border: item.isBest ? `2px solid ${t.accent}` : `1px solid rgba(255, 255, 255, 0.08)`,
                borderRadius: 24,
                padding: "32px 24px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                boxShadow: item.isBest ? `0 20px 50px -15px ${t.accent}40, 0 0 30px ${t.accent}20` : "none",
                transform: item.isBest ? "scale(1.02)" : "none",
                transition: "all 0.3s ease"
              }}
            >
              {item.isBest && (
                <div style={{
                  position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                  background: t.accent, color: "#fff", padding: "4px 16px", borderRadius: 20,
                  fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase"
                }}>
                  GIẢI PHÁP TỐI ƯU NHẤT
                </div>
              )}
              <div style={{ fontSize: 12, fontWeight: 700, color: item.isBest ? t.accent : "#888", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>
                {item.badge}
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--cl-text-base, #111827)", marginBottom: 12, lineHeight: 1.3 }}>
                {item.title}
              </h3>
              <div style={{
                fontSize: 15, fontWeight: 700, color: t.accent,
                background: `${t.accent}15`,
                padding: "8px 14px", borderRadius: 10, marginBottom: 16, display: "inline-block"
              }}>
                {item.cost}
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--cl-text-body, #b0b0b0)", margin: 0, flexGrow: 1 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* ── Key Differences Checklist ── */}
      <FadeIn delay={200}>
        <div className="cl-glow-card" style={{ padding: "36px clamp(20px, 4vw, 40px)", maxWidth: 760, margin: "0 auto" }}>
          <h4 style={{ textAlign: "center", fontSize: 18, fontWeight: 700, color: "var(--cl-text-base, #111827)", marginBottom: 24 }}>
            Bảng So Sánh Kỹ Thuật: Làm Thủ Công vs Hệ Thống AI Creator
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {c.attentionItems.map((item, i) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 16,
                paddingBottom: 16,
                borderBottom: i < c.attentionItems.length - 1 ? `1px solid var(--cl-line)` : "none"
              }}>
                <div style={{
                  padding: "6px 12px", borderRadius: 8, background: "rgba(239, 68, 68, 0.12)",
                  color: "#f87171", fontSize: 13, fontWeight: 600, flexShrink: 0
                }}>
                  {item.title}
                </div>
                <div style={{ fontSize: 15, lineHeight: 1.6, color: "var(--cl-text-base, #111827)", fontWeight: 500 }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </Sec>
  );
}
