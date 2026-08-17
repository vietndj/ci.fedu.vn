import { useEffect, useState } from "react";

const PROOFS = [
  // NHÓM 1: POP-UP "SỞ HỮU VŨ KHÍ & TÀI LIỆU AI" (Kích thích hành động)
  "Tuấn Anh (Hà Nội) vừa tải về thành công Bộ 50+ Mega Prompt Viết Kịch Bản 🤖",
  "Chị Lan (Chủ Shop - HCM) vừa kích hoạt Agent Phân Tích Video Đối Thủ tự động 🔍",
  "Hoàng Dũng (Đà Nẵng) vừa cài đặt thành công Trợ lý Sửa Phụ Đề CapCut Tiếng Việt ✂️",
  "Trang Phạm (Hải Phòng) vừa nhân bản xong Template Landing Page Bán Hàng Tự Động 🌐",
  "Thảo Vy (Solopreneur) vừa nhận đặc quyền Truy Cập Cộng Đồng Skool Trọn Đời 🎁",

  // NHÓM 2: POP-UP "TIẾN ĐỘ THỰC HÀNH CỦA HỌC VIÊN" (Xóa bỏ nỗi sợ khó)
  "Anh Minh (Hà Nội) đang xem bài giảng: Cấu trúc System Prompt cá nhân hóa giọng văn 🧠",
  "Vy (Chủ Spa - Bình Dương) vừa chạy thử Agent xuất báo cáo Director Breakdown video viral 📊",
  "Đức Dũng (HCM) đang thực hành đóng gói Mini Course thành sản phẩm số bán tự động 💰",
  "Chị Mai (Bắc Ninh) vừa tạo xong kịch bản phân cảnh 2 cột cho 10 video chỉ trong 15 phút ⏱️",
  "Team Media Tuấn (Cần Thơ) đang kết nối Webhook Make.com với SePay VietQR ⚡",

  // NHÓM 3: POP-UP "GIAO DỊCH THỰC TẾ & SỰ ĐỒNG HÀNH" (Tăng độ Trust tuyệt đối)
  "Hải Đăng (Kinh doanh TMĐT) vừa hoàn tất thiết lập Hệ Thống AI Creator 🚀",
  "Chị Trâm Anh (Đà Lạt) vừa đăng ký gói Early Bird 499k để giữ ưu đãi trọn đời ⚡",
  "Anh Sơn (Nha Trang) vừa được cấp quyền vào Nhóm Zalo hỗ trợ 1-1 cùng Thầy Việt 🤝",
  "Bác sĩ Khánh (Hà Nội) vừa nạp Knowledge Base chuyên môn vào AI Agent thành công 🎯",
  "Chị Phương (Đồng Nai) vừa quét QR thanh toán tự động, nhận email kích hoạt sau 2 phút 📩"
];

const TIME_LABELS = [
  "vừa xong",
  "vài giây trước",
  "1 phút trước",
  "2 phút trước",
  "3 phút trước"
];

export default function LiveSocialProof() {
  // Tạm thời tắt popup người mua hàng để tập trung làm nội dung
  return null;

  const [currentIdx, setCurrentIdx] = useState(0);
  const [timeLabel, setTimeLabel] = useState("vừa xong");
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    let active = true;
    let nextTimeout: any;

    const showNext = () => {
      if (!active) return;
      
      setCurrentIdx(Math.floor(Math.random() * PROOFS.length));
      setTimeLabel(TIME_LABELS[Math.floor(Math.random() * TIME_LABELS.length)]);
      setVisible(true);

      // Hide after 4 seconds
      nextTimeout = setTimeout(() => {
        setVisible(false);

        // Wait random 45 to 90 seconds before showing next
        const nextDelay = Math.floor(Math.random() * 45000) + 45000; // 45s to 90s
        nextTimeout = setTimeout(showNext, nextDelay);
      }, 4000);
    };

    // Initial delay: 25 seconds (25000ms)
    const initialTimeout = setTimeout(showNext, 25000);

    return () => {
      active = false;
      clearTimeout(initialTimeout);
      clearTimeout(nextTimeout);
    };
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "clamp(12px, 3vw, 24px)",
        left: "clamp(12px, 3vw, 24px)",
        zIndex: 9999,
        maxWidth: "min(340px, calc(100% - 24px))",
        width: "auto",
        background: "rgba(18, 22, 33, 0.85)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: 14,
        padding: "14px 18px 14px 14px",
        boxShadow: "0 12px 40px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.2)",
        display: "flex",
        alignItems: "center",
        gap: 12,
        transform: visible ? "translateY(0) scale(1)" : "translateY(100px) scale(0.95)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease",
      }}
    >
      {/* Pulse Green Dot */}
      <div style={{ 
        position: "relative", 
        width: 40, 
        height: 40, 
        borderRadius: "50%", 
        background: "rgba(255, 255, 255, 0.04)", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        flexShrink: 0 
      }}>
        <span style={{ fontSize: 18 }}>💡</span>
        <span
          style={{
            position: "absolute",
            bottom: 1,
            right: 1,
            width: 8,
            height: 8,
            background: "#10b981",
            borderRadius: "50%",
            border: "2px solid #121621",
            boxShadow: "0 0 6px #10b981",
            animation: "tw-pulse 2.2s infinite"
          }}
        />
      </div>

      {/* Message Info */}
      <div style={{ flex: 1, textAlign: "left" }}>
        <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: "#f8fafc", lineHeight: 1.45, overflowWrap: "break-word" }}>
          {PROOFS[currentIdx]}
        </p>
        <span style={{ fontSize: 10.5, color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginTop: 3, display: "inline-block" }}>
          {timeLabel}
        </span>
      </div>

      {/* Close button */}
      <button
        onClick={() => {
          setVisible(false);
          setTimeout(() => setDismissed(true), 500);
        }}
        style={{
          position: "absolute",
          top: 6,
          right: 6,
          background: "none",
          border: "none",
          color: "#64748b",
          fontSize: 16,
          cursor: "pointer",
          padding: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: 1,
          transition: "color 0.2s"
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#cbd5e1")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
      >
        ×
      </button>

      {/* Keyframe stylesheet injection */}
      <style>{`
        @keyframes tw-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: .4; transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
}
