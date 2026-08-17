import React, { useState } from "react";
import { useContent } from "../content";
import { useTheme } from "../theme";
import { FadeIn, Label, SH, Sec, CtaButton } from "../components/ui";
import { useIsMobile } from "../components/ui";

export function SolutionsSection() {
  const t = useTheme();
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "01. Bộ Não Bắt Trend",
      subtitle: "Quét xu hướng quốc tế & Việt Nam → Dịch tiếng Việt → Nạp góc nhìn cá nhân của bạn",
      pain: "Mất hàng giờ lướt TikTok/Reels trong vô định, thấy video nước ngoài triệu view rất hay nhưng không biết làm sao áp dụng. Tự viết kịch bản thì bí ý tưởng, copy prompt generic trên mạng thì sáo rỗng, mất chất chuyên gia.",
      solution: "AI tự động quét các video đang lên xu hướng toàn cầu và trong nước, dịch và giải thích cấu trúc viral. Sau đó nạp kiến thức, trải nghiệm và văn phong của bạn vào để xuất kịch bản 2 cột (Lời thoại + Mô tả hình ảnh) chuẩn phong cách riêng trong 3 phút.",
      leftLabel: "LÀM TAY / PROMPT DẠO",
      leftDesc: "Ngồi cắn bút nghĩ ý tưởng, copy prompt generic trên mạng làm video bị vô hồn, không ai nhớ đến bạn.",
      rightLabel: "AI BẮT TREND RIÊNG",
      rightDesc: "Đổi trend triệu view thành kịch bản độc bản mang 100% bản sắc và chuyên môn của bạn.",
      icon: "🎯",
      gif: "/gifs/mega-prompt-script.gif",
      demoBadge: "AI SCRIPT & TREND SPY",
      demoCaption: "⚡ Quét cấu trúc video viral quốc tế → Tự động xuất kịch bản phân cảnh tiếng Việt."
    },
    {
      title: "02. Cỗ Máy Hậu Kỳ",
      subtitle: "Chỉ rõ góc máy phân cảnh & Tự động sửa 100% phụ đề CapCut trong 1 click",
      pain: "Quay xong ngập trong đống việc vặt: ngồi nghe gõ lại từng từ phụ đề CapCut bị sai chính tả, mất cả buổi tối mỏi mắt đau lưng. Không biết chèn hình ảnh minh họa (B-roll) ở đâu để giữ chân người xem.",
      solution: "Agent AI sửa phụ đề CapCut tiếng Việt tự động chuẩn 100% dấu câu và chính tả chỉ bằng 1 cú click. Đồng thời AI gợi ý cụ thể góc máy, phân cảnh và thời điểm chèn B-roll phù hợp giúp bạn bật máy lên là quay tự tin.",
      leftLabel: "CẶM CỤI GÕ TAY",
      leftDesc: "Mất 2 tiếng edit sửa từng câu chữ phụ đề, lúng túng không biết chèn hình ảnh gì cho cuốn hút.",
      rightLabel: "1 CLICK HOÀN TẤT",
      rightDesc: "AI dọn sạch khâu phụ đề tiếng Việt trong 10 giây, kịch bản có sẵn chỉ dẫn phân cảnh chi tiết.",
      icon: "⚡",
      gif: "/gifs/capcut-subtitle-agent.gif",
      demoBadge: "CAPCUT SUBTITLE AGENT",
      demoCaption: "🎬 1 Click quét và sửa sạch lỗi chính tả tiếng Việt trong file phụ đề CapCut."
    },
    {
      title: "03. Thu Tiền Xuyên Đêm",
      subtitle: "Nghĩ ra bất kỳ món gì khi làm video — AI tạo trang bán hàng & mã QR trong 10 phút",
      pain: "Làm video có tương tác tốt nhưng không biết cách bán hàng. Khách hỏi mua thì phải chat tay xin số tài khoản, ngồi canh điện thoại check biến động số dư, gửi link thủ công từng người làm sót đơn và mất khách.",
      solution: "Bất kỳ sản phẩm nào bạn nghĩ ra (Ebook, khóa học mini, template, tài liệu, buổi tư vấn hay sản phẩm vật lý): AI dựng ngay Landing Page chuẩn đẹp trong 10 phút. Tích hợp sẵn cổng VietQR tự động: khách quét mã → tiền về thẳng tài khoản ngân hàng của bạn → hệ thống tự động giao hàng 24/7.",
      leftLabel: "CHAT TAY CHECK BILL",
      leftDesc: "Tư vấn thủ công, check bill chuyển khoản từng người, mất khách khi họ tụt cảm xúc mua hàng.",
      rightLabel: "TỰ ĐỘNG THU TIỀN 24/7",
      rightDesc: "Khách xem video → Bấm link Bio → Quét QR → Tiền về tài khoản ngay lập tức mà bạn không cần chạm tay.",
      icon: "💳",
      gif: "/gifs/auto-vietqr-flow.gif",
      demoBadge: "AUTO VIETQR & PUSH NOTIFICATION",
      demoCaption: "📱 Khách quét mã QR trên web → Tiền về tài khoản & Bắn thông báo về điện thoại tức thì."
    }
  ];

  const currentTab = tabs[activeTab];

  return (
    <Sec maxWidth={1020}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <Label>3 CỖ MÁY BẠN NHẬN NGAY</Label>
          <SH>3 Cỗ Máy Bạn Nhận Được Ngay Sau Khi Thanh Toán</SH>
          <p style={{ fontSize: 18, color: "var(--cl-text-muted, #888)", maxWidth: 640, margin: "-18px auto 0", lineHeight: 1.7 }}>
            Mỗi tab bên dưới là 1 tài sản AI đã lắp ráp sẵn — bạn chỉ cần nhận bàn giao và vận hành.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={80}>
        <div style={{
          display: "flex", background: "var(--cl-card2)", border: `1px solid var(--cl-line)`,
          borderRadius: t.cardRadius, padding: 6, marginBottom: 32, gap: 6, flexWrap: "wrap"
        }}>
          {tabs.map((tab, idx) => {
            const active = idx === activeTab;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                style={{
                  flex: "1 1 220px", background: active ? "var(--cl-accent)" : "transparent",
                  color: active ? "var(--cl-accent-text)" : "var(--cl-text-body, #bbb)",
                  border: "none", borderRadius: Math.max(8, t.cardRadius - 6),
                  padding: "14px 18px", fontSize: 15, fontWeight: 600, cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                  transition: "all 0.2s ease"
                }}
              >
                <span>{tab.icon}</span><span>{tab.title}</span>
              </button>
            );
          })}
        </div>
      </FadeIn>

      <FadeIn delay={140}>
        <div style={{
          background: `linear-gradient(135deg, var(--cl-card), var(--cl-card2))`,
          border: `1px solid var(--cl-line)`,
          borderRadius: t.cardRadius,
          padding: isMobile ? "24px 20px" : "40px 36px",
          position: "relative",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1.1fr 0.9fr",
          gap: isMobile ? 32 : 36,
          alignItems: "center"
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <p style={{ fontFamily: t.fontMono, fontSize: 12, color: "var(--cl-accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>
                // BÀI TOÁN & GIẢI PHÁP 0{activeTab + 1}
              </p>
              <h3 style={{ fontFamily: t.fontDisplay, fontSize: "clamp(20px, 2.6vw, 25px)", fontWeight: 500, lineHeight: 1.25, letterSpacing: "-0.018em", margin: 0, color: "var(--cl-text-base, #fff)" }}>
                {currentTab.subtitle}
              </h3>
            </div>

            <div>
              <p style={{ fontSize: 12.5, fontWeight: 600, color: "var(--cl-danger)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6, fontFamily: t.fontMono }}>
                ⚠ ĐIỂM ĐAU CỦA BẠN:
              </p>
              <p style={{ fontSize: 16.5, lineHeight: 1.75, color: "var(--cl-text-body, #b0b0b0)", margin: 0 }}>
                {currentTab.pain}
              </p>
            </div>

            <div style={{ borderTop: `1px solid var(--cl-line)`, paddingTop: 16 }}>
              <p style={{ fontSize: 12.5, fontWeight: 600, color: "var(--cl-accent)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6, fontFamily: t.fontMono }}>
                💡 TOA GIẢI PHÁP ĐÓNG GÓI:
              </p>
              <p style={{ fontSize: 16.5, lineHeight: 1.75, color: "var(--cl-text-base, #f0f0f0)", margin: 0 }}>
                {currentTab.solution}
              </p>
            </div>

            {/* Before vs After comparison pill */}
            <div style={{
              marginTop: 6,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 14,
              background: "#08080a",
              border: `1px solid var(--cl-line)`,
              borderRadius: Math.max(8, t.cardRadius - 4),
              padding: "18px 16px"
            }}>
              <div>
                <p style={{ fontSize: 11.5, fontWeight: 600, color: "var(--cl-danger)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: t.fontMono }}>
                  ✗ {currentTab.leftLabel}
                </p>
                <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "#888", margin: 0 }}>
                  {currentTab.leftDesc}
                </p>
              </div>
              <div style={{
                borderLeft: isMobile ? "none" : `1px solid var(--cl-line)`,
                borderTop: isMobile ? `1px solid var(--cl-line)` : "none",
                paddingLeft: isMobile ? 0 : 16,
                paddingTop: isMobile ? 12 : 0
              }}>
                <p style={{ fontSize: 11.5, fontWeight: 600, color: "var(--cl-accent)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: t.fontMono }}>
                  ✓ {currentTab.rightLabel}
                </p>
                <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--cl-text-base, #f0f0f0)", margin: 0 }}>
                  {currentTab.rightDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: High-tech Media / GIF Demo Box */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            background: "#08080a",
            border: `1px solid ${t.accent}44`,
            borderRadius: t.cardRadius,
            overflow: "hidden",
            boxShadow: `0 20px 50px -15px rgba(0,0,0,0.9), 0 0 35px -10px ${t.accent}33`,
            position: "relative"
          }}>
            {/* Mockup Window Header */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 14px",
              background: "rgba(255, 255, 255, 0.03)",
              borderBottom: `1px solid var(--cl-line)`
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f56", display: "inline-block" }}></span>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e", display: "inline-block" }}></span>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#27c93f", display: "inline-block" }}></span>
              </div>
              <span style={{
                fontFamily: t.fontMono,
                fontSize: 11,
                color: "var(--cl-accent)",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase"
              }}>
                {currentTab.demoBadge}
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#10b981", display: "inline-block", boxShadow: "0 0 8px #10b981" }}></span>
                <span style={{ fontFamily: t.fontMono, fontSize: 10, color: "#10b981", fontWeight: 600 }}>LIVE</span>
              </div>
            </div>

            {/* Media Screen Container */}
            <div style={{
              position: "relative",
              width: "100%",
              aspectRatio: isMobile ? "4 / 3" : "1 / 1",
              minHeight: 280,
              background: "#0c0d14",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden"
            }}>
              {activeTab === 2 ? (
                <div style={{
                  width: "100%",
                  height: "100%",
                  padding: 20,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  background: "radial-gradient(ellipse at center, rgba(26,115,232,0.12), transparent 70%)",
                  position: "relative"
                }}>
                  {/* Web Checkout Mockup */}
                  <div style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: 12,
                    padding: "12px 14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backdropFilter: "blur(10px)"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 32, height: 32, borderRadius: 8, background: "var(--cl-accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>
                        ⚡
                      </div>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>Thanh Toán Tự Động VietQR</div>
                        <div style={{ fontSize: 10, color: "#888", fontFamily: t.fontMono }}>Mã đơn: #AI-CREATOR-9824</div>
                      </div>
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 800, color: "#10b981", fontFamily: t.fontMono }}>499.000đ</div>
                  </div>

                  {/* QR Scan Centerpiece */}
                  <div style={{ textAlign: "center", margin: "10px 0" }}>
                    <div style={{
                      display: "inline-flex",
                      flexDirection: "column",
                      alignItems: "center",
                      background: "#ffffff",
                      borderRadius: 14,
                      padding: 12,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.6)"
                    }}>
                      <div style={{ width: 100, height: 100, background: "#000", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 42 }}>
                        📱
                      </div>
                      <span style={{ fontSize: 10, fontWeight: 700, color: "#111", marginTop: 4, letterSpacing: "0.05em" }}>VIETQR • SEPAY AUTO</span>
                    </div>
                  </div>

                  {/* Phone Push Notification Simulation Overlay */}
                  <div style={{
                    background: "rgba(16, 24, 39, 0.95)",
                    border: "1px solid rgba(16, 185, 129, 0.4)",
                    borderRadius: 12,
                    padding: "10px 14px",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.7), 0 0 16px rgba(16, 185, 129, 0.2)",
                    animation: "fadeInUp 0.5s ease"
                  }}>
                    <div style={{ fontSize: 20 }}>🔔</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
                        <span style={{ fontSize: 11, fontWeight: 700, color: "#10b981" }}>NGÂN HÀNG VCB • BIẾN ĐỘNG SỐ DƯ</span>
                        <span style={{ fontSize: 9, color: "#666" }}>Vừa xong</span>
                      </div>
                      <div style={{ fontSize: 11.5, color: "#f3f4f6", lineHeight: 1.35, fontWeight: 500 }}>
                        +499.000 VND từ Nguyễn Văn A. Kích hoạt tài khoản thành công! 🚀
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  src={currentTab.gif}
                  alt={currentTab.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block"
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              )}
            </div>

            {/* Bottom Caption Bar */}
            <div style={{
              padding: "10px 14px",
              background: "rgba(0, 0, 0, 0.6)",
              borderTop: `1px solid var(--cl-line)`
            }}>
              <p style={{
                margin: 0,
                fontSize: 12.5,
                color: "var(--cl-text-muted, #aaa)",
                lineHeight: 1.5,
                fontFamily: t.fontBody
              }}>
                {currentTab.demoCaption}
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </Sec>
  );
}

export function DiscoverySection() {
  const c = useContent();
  const t = useTheme();
  const isMobile = useIsMobile();
  return (
    <Sec maxWidth={860}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 54 }}>
          <Label>{c.discoveryLabel}</Label>
          <SH typed>{c.discoveryHeading}</SH>
          <p style={{ fontSize: 19, color: "var(--cl-text-muted, #888)", maxWidth: 720, margin: "16px auto 0", lineHeight: 1.75, textWrap: "balance" }}>
            {c.discoverySub}
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={100}>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {c.discoveryItems.map((item, i) => {
            const isEven = i % 2 === 1;
            const isPlaceholder = item.gif?.includes("unsplash.com") ?? true;
            return (
              <div key={i} style={{
                background: "var(--cl-card)", border: `1px solid var(--cl-line)`,
                borderRadius: t.cardRadius, padding: isMobile ? "24px" : "32px",
                display: "grid", gridTemplateColumns: isMobile ? "1fr" : isEven ? "0.9fr 1.1fr" : "1.1fr 0.9fr",
                gap: isMobile ? "24px" : "40px", alignItems: "center"
              }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 16, order: isMobile ? 1 : isEven ? 2 : 1 }}>
                  <div style={{ fontFamily: t.fontMono, fontSize: 12, fontWeight: 500, color: "var(--cl-accent)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    // NGUYÊN LÝ 0{i + 1}
                  </div>
                  <h4 style={{ fontFamily: t.fontDisplay, fontSize: "clamp(20px, 2.5vw, 24px)", fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.018em", color: "var(--cl-text-base, #111827)", margin: 0 }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--cl-text-body, #b0b0b0)", margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
                <div style={{
                  order: isMobile ? 2 : isEven ? 1 : 2, width: "100%", aspectRatio: "4 / 5",
                  borderRadius: 12, overflow: "hidden", border: `1px solid var(--cl-line)`,
                  position: "relative", background: "var(--cl-card2)", display: "flex",
                  alignItems: "center", justifyContent: "center", cursor: "pointer",
                }} className="discovery-gif-container">
                  <img src={item.gif || ""} alt={item.placeholderLabel || "Image"} loading="lazy" style={{
                    width: "100%", height: "100%", objectFit: "cover",
                    opacity: isPlaceholder ? 0.28 : 1, filter: isPlaceholder ? "grayscale(100%) contrast(1.1)" : "none",
                    transition: "all 0.4s ease"
                  }} />
                  {isPlaceholder && (
                    <div style={{
                      position: "absolute", inset: 0, background: "radial-gradient(circle at center, transparent 30%, rgba(7,9,14,0.75) 100%)",
                      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 16, textAlign: "center"
                    }}>
                      <span style={{ fontSize: 24, marginBottom: 8, filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.5))" }}>🎬</span>
                      <span style={{
                        fontFamily: t.fontMono, fontSize: 12, fontWeight: 500, color: "var(--cl-accent)", letterSpacing: "0.05em",
                        background: "rgba(0,240,255,0.08)", border: `1px solid rgba(0,240,255,0.2)`, padding: "8px 14px",
                        borderRadius: 20, backdropFilter: "blur(4px)", textTransform: "uppercase"
                      }}>
                        {item.placeholderLabel}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </FadeIn>
    </Sec>
  );
}

export function SolutionSection() {
  const c = useContent();
  const t = useTheme();
  return (
    <Sec maxWidth={860}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 54 }}>
          <Label>{c.solutionLabel}</Label>
          <SH typed>{c.solutionHeading}</SH>
          <p style={{ fontSize: 19, color: "var(--cl-text-muted, #888)", maxWidth: 720, margin: "16px auto 0", lineHeight: 1.75, textWrap: "balance" }}>
            {c.solutionSub}
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={100}>
        <div style={{
          background: `linear-gradient(135deg, var(--cl-card), var(--cl-card2))`, border: `1px solid var(--cl-line)`,
          borderRadius: t.cardRadius, padding: "40px", display: "flex", flexDirection: "column", gap: 20
        }}>
          {c.solutionItems.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
              <span style={{ color: "var(--cl-accent)", fontSize: 24, lineHeight: 1 }}>✓</span>
              <p style={{ fontSize: 19, color: "var(--cl-text-base, #111827)", lineHeight: 1.6, margin: 0 }}>{item}</p>
            </div>
          ))}
          <div style={{ marginTop: 32, textAlign: "center" }}>
            <CtaButton label="Sở Hữu Hệ Thống AI Creator Ngay" />
          </div>
        </div>
      </FadeIn>
    </Sec>
  );
}
