import { createContext, useContext, createElement } from "react";
import type { ReactNode } from "react";

export interface BlocksMeta {
  order: string[];
  hidden: string[];
  media: Record<string, any[]>;
  custom: Record<string, { title: string; body: string }>;
}

export interface SkillCard {
  n: string;
  title: string;
  desc: string;
  warn?: string;
  gif?: string;
  youtubeId?: string;
  aspectRatio?: string;
}
export interface Stage { n: string; title: string; sub?: string; desc?: string; gif?: string }
export interface ValueLine { label: string; price: string }

export interface PageContent {
  _v?: number;
  price: string;
  value: string;

  heroBadge: string;
  heroHeadline1: string;
  heroHeadline2: string;
  heroAccentLine: string;
  heroSub: string;
  heroCta: string;
  heroSubPrice?: string;
  heroVideoYoutubeId?: string;
  heroPoem?: string[];

  painLabel: string;
  painHeading: string;
  painQuote: string;
  painSub: string;
  pains: string[];
  painConclusion?: string;

  // ── Attention (3 cách gây chú ý) ──
  attentionLabel: string;
  attentionHeading: string;
  attentionPara: string;
  attentionItems: { icon: string; title: string; desc: string }[];

  // ── Rule 7-11-4 ──
  ruleLabel: string;
  ruleHeading: string;
  rulePara: string;
  ruleItems: { fail: string; why: string }[];
  ruleConclusion: string;

  cycleLabel: string;
  cycleHeading: string;
  cyclePara: string;
  cycleItems: { fail: string; why: string }[];
  
  discoveryLabel: string;
  discoveryHeading: string;
  discoverySub: string;
  discoveryItems: { title: string; desc: string; gif?: string; placeholderLabel?: string }[];

  solutionLabel: string;
  solutionHeading: string;
  solutionSub: string;
  solutionItems: string[];

  skillsLabel: string;
  skillsHeading: string;
  skillCards: SkillCard[];

  midCtaHeading: string;
  midCtaSub: string;
  midCtaBtn: string;

  baLabel: string;
  baHeading: string;
  baSub: string;
  baBeforeMedia?: string;
  baAfterMedia?: string;
  beforeLabel: string;
  afterLabel: string;
  beforeItems: string[];
  afterItems: string[];

  roadmapLabel: string;
  roadmapHeading: string;
  roadmapPreviewHeading?: string;
  roadmapPreviewDesc?: string;
  roadmapIframeUrl?: string;
  roadmapChaptersHeading?: string;
  stages: Stage[];
  roadmapChaptersGif?: string;

  instructorLabel: string;
  instructorHeading: string;
  instructorInitials: string;
  instructorName: string;
  instructorTitle: string;
  instructorBio: string[];
  instructorInsight?: string;
  instructorPhoto?: string;

  urgencyBar: string;
  ctaLabel: string;
  ctaHeading: string;
  ctaSub: string;
  countdownLabel: string;
  valueStackTitle: string;
  valueStack: ValueLine[];
  guarantee: string;

  footerBrand: string;
  footerDot: string;
  footerTagline: string;
  footerLinks: string[];
  bonusLabel: string;
  bonusHeading: string;
  bonusSub: string;
  bonusItems: { id: string; title: string; desc: string; audioDemo?: string; youtubeDemo?: string; gifDemo?: string }[];
  footerCopyright: string;

  blocksMeta: BlocksMeta;
}

const CONTENT_SCHEMA_VERSION = 7;

export const DEFAULT_CONTENT: PageContent = {
  _v: 7,
  price: "499.000",
  value: "12.990.000",

  // ── Hero ──
  heroBadge: "🔥 CHO 100 CREATOR ĐẦU TIÊN MUỐN AI LÀM THAY 80% CÔNG VIỆC VIDEO",
  heroHeadline1: "NGỪNG CÀY CUỐC THỦ CÔNG & KIỆT SỨC.",
  heroHeadline2: "Sở Hữu 3 Cỗ Máy AI Làm Thay Bạn — Ngay Hôm Nay.",
  heroPoem: [
    "Rút ngắn 5 tiếng hậu kỳ mỗi video.",
    "Cào kịch bản trend trong 15 phút.",
    "Thiết lập 1 lần hệ thống Web thu tiền tự động 24/7."
  ],
  heroAccentLine: "Nhận Trọn 3 Hệ Thống AI Làm Sẵn 80% — 'Cắm Là Chạy'",
  heroSub: "Không học lý thuyết suông. Đi thẳng vào bản chất bằng câu hỏi sắc bén và nhận bàn giao ngay 3 cỗ máy đã được xử lý toàn bộ logic phức tạp:",
  heroCta: "SỞ HỮU 3 CỖ MÁY AI — CHỈ 499K →",
  heroVideoYoutubeId: "",
  heroSubPrice: "Phí cam kết cho 100 Tester đầu tiên — Thầy Việt đồng hành 1-1",

  // ── Pain ──
  painLabel: "SỰ THẬT VỀ NGƯỜI LÀM VIDEO HIỆN NAY",
  painHeading: "AI đang thay đổi mọi thứ. Người không biết dùng AI đúng cách sẽ bị bỏ lại phía sau.",
  painQuote: "'Tôi biết AI quan trọng, tôi cũng dùng ChatGPT mỗi ngày. Nhưng tôi chỉ biết hỏi nó vài câu đơn giản... rồi hết. Trong khi đối thủ đang ra 3 video/ngày còn tôi loay hoay 1 video/tuần.'",
  painSub: "Bạn có đang mắc kẹt trong những bế tắc này?",
  pains: [
    "❌ Dùng AI như Google: Hỏi ChatGPT 'Viết kịch bản video bán hàng' → nhận được đoạn văn generic, sáo rỗng, không mang dấu ấn cá nhân.",
    "❌ Mất 3-5h cặm cụi edit thủ công: Cắt ghép, chèn phụ đề, chỉnh màu từng frame. Cái gì AI làm được trong 10 phút thì bạn mất cả buổi.",
    "❌ Đối thủ đang dùng AI vượt mặt: Họ ra 3 video chất lượng mỗi ngày bằng hệ thống tự động. Khoảng cách ngày càng xa và không thể bù lại.",
    "❌ Muốn bán sản phẩm số nhưng không biết bắt đầu: Có kiến thức, có kinh nghiệm nhưng không biết cách đóng gói thành sản phẩm và tự động hóa bán hàng."
  ],
  painConclusion: "",

  // ── Attention ──
  attentionLabel: "BẠN ĐANG CHỌN CÁCH NÀO?",
  attentionHeading: "3 lựa chọn để bắt kịp làn sóng AI — chỉ 1 cách thực sự hiệu quả.",
  attentionPara: "90% Creator dừng lại ở mức hỏi ChatGPT vài câu. 10% còn lại xây hệ thống AI làm việc thay mình 24/7. Bạn muốn ở nhóm nào?",
  attentionItems: [
    {
      icon: "❌",
      title: "Copy-paste prompt trên mạng",
      desc: "🏆 Mega Prompt cá nhân hóa: AI viết đúng giọng văn, phong cách và tiêu chuẩn riêng của bạn."
    },
    {
      icon: "❌",
      title: "Chỉ dùng AI viết text rồi dừng",
      desc: "🏆 Agent AI toàn diện: Tự phân tích video, sửa phụ đề, tạo web bán hàng tự động."
    },
    {
      icon: "❌",
      title: "Học AI tổng quát, không gắn với nghề",
      desc: "🏆 Hệ thống AI chuyên biệt cho Creator: Mỗi kỹ năng học xong là áp dụng ngay cho kênh video."
    },
    {
      icon: "❌",
      title: "Tốn tiền mua 10 tool AI rời rạc",
      desc: "🏆 Một hệ thống Agent duy nhất: Tích hợp tất cả vào 1 pipeline tự động từ A đến Z."
    }
  ],

  // ── Rule ──
  ruleLabel: "3 SỰ THẬT VỀ AI MÀ CREATOR CẦN BIẾT",
  ruleHeading: "AI không thay thế bạn. AI thay thế những người KHÔNG BIẾT dùng AI.",
  rulePara: "Hiểu được 3 sự thật này, bạn sẽ vượt qua 90% đối thủ đang dùng AI sai cách:",
  ruleItems: [
    {
      fail: "Prompt càng chi tiết = Output càng chất lượng",
      why: "Người viết 'Viết kịch bản' nhận được rác. Người viết Mega Prompt nhận được kịch bản phân cảnh chuẩn quay. Chất lượng đầu vào quyết định chất lượng đầu ra."
    },
    {
      fail: "Agent > Prompt đơn lẻ",
      why: "1 Prompt giải quyết 1 việc. 1 Agent giải quyết CẢ QUY TRÌNH: phân tích → viết → kiểm tra → xuất file. Đây là bước nhảy vọt từ 'dùng AI' sang 'sai khiến AI'."
    },
    {
      fail: "AI + Chuyên môn = Vũ khí hủy diệt",
      why: "AI không có kinh nghiệm ngành của bạn. Nhưng khi bạn 'nạp' kinh nghiệm vào AI qua System Prompt, nó trở thành phiên bản x10 của chính bạn."
    }
  ],
  ruleConclusion: "Khóa học này dạy bạn làm chủ cả 3 yếu tố — biến AI thành trợ lý riêng phục vụ đúng công việc làm video của bạn.",

  // ── Cycle ──
  cycleLabel: "VÒNG LẶP THỬ SAI",
  cycleHeading: "Những cách học AI SAI mà 90% Creator đang mắc phải",
  cyclePara: "Để đối phó với làn sóng AI, nhiều người chọn cách:",
  cycleItems: [
    {
      fail: "Copy-paste prompt miễn phí trên mạng",
      why: "Output na ná hàng ngàn người khác, không có cá tính thương hiệu. Khán giả nhận ra ngay đây là 'bài AI' và lướt qua."
    },
    {
      fail: "Chỉ dùng AI cho phần viết kịch bản",
      why: "Bỏ qua 80% sức mạnh: edit video tự động, phân tích đối thủ, sửa phụ đề, tạo landing page, đóng gói sản phẩm số."
    },
    {
      fail: "Mua khóa AI hàn lâm dạy lý thuyết Prompt Engineering",
      why: "Biết tất cả lý thuyết nhưng không làm được gì cụ thể cho kênh video. Thiếu ứng dụng thực chiến gắn với nghề."
    }
  ],

  // ── Discovery ──
  discoveryLabel: "KHOẢNH KHẮC GIÁC NGỘ",
  discoveryHeading: "Khi tôi ngừng 'hỏi' AI và bắt đầu 'xây' AI — mọi thứ thay đổi.",
  discoverySub: "Sau khi thử nghiệm hàng trăm công cụ AI, tôi tìm ra 3 nguyên lý cốt lõi:",
  discoveryItems: [
    {
      title: "Mega Prompt = Bộ não thứ hai",
      desc: "Đóng gói toàn bộ kinh nghiệm nghề vào 1 Prompt — AI output chính xác theo phong cách, giọng văn, và tiêu chuẩn riêng của bạn. Không còn 'mùi AI'."
    },
    {
      title: "Agent = Nhân viên ảo 24/7",
      desc: "Xây 1 Agent phân tích video đối thủ — nó tự tải video, tự cắt cảnh, tự trích xuất kịch bản, tự viết báo cáo chi tiết. Bạn chỉ đọc kết quả và ra quyết định."
    },
    {
      title: "Hệ sinh thái = Cỗ máy in tiền",
      desc: "Đóng gói kỹ năng AI thành sản phẩm số (Extension, Template, Bộ Prompt, Khóa học mini) → Landing Page tự động thanh toán → Thu tiền ngay cả khi bạn đang ngủ."
    }
  ],

  // ── Solution ──
  solutionLabel: "HỆ THỐNG AI CREATOR",
  solutionHeading: "Bạn không mua khóa học. Bạn sở hữu 'Hệ sinh thái AI' để bắt đầu ngay.",
  solutionSub: "Tôi đã đóng gói mọi thứ thành hệ thống giúp bạn cắt giảm 80% thời gian sản xuất nội dung:",
  solutionItems: [
    "❌ Viết kịch bản 2-3 tiếng ➞ ✅ Mega Prompt AI: Gõ chủ đề, nhận kịch bản phân cảnh chuẩn quay trong 5 phút.",
    "❌ Edit video 3-5 tiếng/clip ➞ ✅ Agent AI tự động: Cắt cảnh, chèn phụ đề, phân tích nhịp điệu — bạn chỉ duyệt kết quả.",
    "❌ Không biết đối thủ làm gì ➞ ✅ Agent Phân Tích Video: Gửi link → Nhận báo cáo đạo diễn chi tiết (phân cảnh, keyframe, kịch bản).",
    "❌ Muốn bán sản phẩm số nhưng không biết code ➞ ✅ AI tạo Landing Page + Thanh toán tự động VietQR trong 10 phút."
  ],

  // ── Skills ──
  skillsLabel: "4 CẤP ĐỘ TIẾN HÓA AI CHO CREATOR",
  skillsHeading: "Từ 'Gõ ChatGPT' đến 'Xây Hệ Thống AI Riêng' — Lộ trình 4 bước:",
  skillCards: [
    { n: "01", title: "Prompt Engineering", desc: "Viết prompt đúng cách: [Vai trò] + [Bối cảnh] + [Nhiệm vụ] + [Định dạng]. Output từ 'tạm được' thành 'dùng ngay'. Thực hành: AI viết 10 kịch bản video trong 30 phút.", gif: "/gifs/invisible-cut.gif" },
    { n: "02", title: "Mega Prompt & System Prompt", desc: "Đóng gói kinh nghiệm nghề thành Bộ lệnh AI cá nhân hóa. Sử dụng <xml>, [placeholder], {variables} để AI hiểu chính xác yêu cầu phức tạp nhất.", gif: "/gifs/lighting-3d.gif" },
    { n: "03", title: "AI Agent & Tự Động Hóa", desc: "Cài đặt Agent AI, xây dựng Skill tùy chỉnh: phân tích video tự động, sửa phụ đề CapCut, tạo landing page. AI chạy pipeline hoàn chỉnh từ A→Z.", gif: "/gifs/shot-sizes.gif" },
    { n: "04", title: "Đóng Gói & Kiếm Tiền", desc: "Biến kỹ năng AI thành sản phẩm số bán được: Chrome Extension, Bộ Prompt thương mại, Landing Page tự động thanh toán. Kiếm tiền ngay cả khi ngủ." }
  ],

  // ── Mid CTA ──
  midCtaHeading: "Sẵn sàng biến AI thành trợ lý riêng cho kênh video của bạn?",
  midCtaSub: "Sở hữu toàn bộ: 4 Cấp độ AI + Bộ Agent sẵn sàng + Cộng đồng Skool + Đồng hành 1-1. Bắt đầu ngay.",
  midCtaBtn: "ĐĂNG KÝ & VÀO HỌC NGAY — CHỈ 499K",

  // ── Before & After ──
  baLabel: "KẾT QUẢ KHI CÓ HỆ THỐNG AI",
  baHeading: "Sự khác biệt TRƯỚC và SAU khi áp dụng AI Creator System:",
  baSub: "",
  beforeLabel: "TRƯỚC (Làm Thủ Công)",
  afterLabel: "SAU (Có Hệ Thống AI)",
  beforeItems: [
    "Mất 2-3h viết kịch bản, bí ý tưởng mỗi ngày",
    "Edit video 3-5h/clip, kiệt sức và chán nản",
    "Không biết đối thủ đang làm gì hay",
    "Phụ đề tiếng Việt sai be bét, thiếu chuyên nghiệp",
    "Muốn bán sản phẩm số nhưng không biết code",
    "Prompt AI cho ra kết quả chung chung, na ná"
  ],
  afterItems: [
    "Mega Prompt xuất kịch bản phân cảnh trong 5 phút",
    "Agent AI cắt cảnh, chèn phụ đề, B-roll tự động",
    "Agent phân tích video → Báo cáo đạo diễn chi tiết",
    "Agent sửa phụ đề CapCut tự động, chuẩn chính tả",
    "AI tạo Landing Page + Thanh toán tự động trong 10 phút",
    "Mega Prompt cá nhân hóa → Output đúng phong cách riêng"
  ],

  // ── Roadmap ──
  roadmapLabel: "LỘ TRÌNH 4 BƯỚC THỰC CHIẾN",
  roadmapHeading: "Lộ Trình 4 Bước: Mỗi Bước Xong = 1 Cỗ Máy Chạy Được.",
  roadmapPreviewHeading: "Xem thử 1 bài học mẫu",
  roadmapPreviewDesc: "Đây là video thực tế bên trong chương trình — trực quan, thực chiến, không lý thuyết suông.",
  roadmapIframeUrl: "",
  roadmapChaptersHeading: "4 Bước chinh phục từ 'Gõ ChatGPT' đến 'Xây Hệ Thống AI Riêng':",
  stages: [
    { n: "Bước 1", title: "🧠 NỀN TẢNG — Thuần Hóa AI", desc: "Prompt Engineering từ cơ bản đến nâng cao. Cách đặt vai trò, ngữ cảnh, ràng buộc output. Biến ChatGPT/Gemini từ 'trợ lý chung chung' thành 'chuyên gia riêng' của bạn.", sub: "Kết quả: AI viết 10 kịch bản video chất lượng trong 30 phút. Không còn output sáo rỗng." },
    { n: "Bước 2", title: "⚡ NÂNG CẤP — Mega Prompt & Đóng Gói", desc: "Xây Mega Prompt cá nhân hóa cho nghề video. XML structuring, placeholder, system prompt. Đóng gói toàn bộ kinh nghiệm ngành vào AI.", sub: "Kết quả: Sở hữu Bộ lệnh AI riêng — output đúng giọng văn và phong cách thương hiệu." },
    { n: "Bước 3", title: "🤖 AGENT — Trợ Lý AI Tự Động", desc: "Cài đặt AI Agent, xây dựng Skill tùy chỉnh. Agent phân tích video đối thủ, sửa phụ đề tự động, tạo web bán hàng. Tự động hóa 80% công việc lặp lại.", sub: "Kết quả: Agent tự phân tích 5 video đối thủ mỗi ngày — bạn chỉ đọc báo cáo và ra chiến lược." },
    { n: "Bước 4", title: "💰 KIẾM TIỀN — Đóng Gói Sản Phẩm Số", desc: "Tạo Chrome Extension, Landing Page tự động thanh toán VietQR. Đóng gói Prompt, Template, Khóa học mini thành sản phẩm số bán được.", sub: "Kết quả: Ra mắt 1 sản phẩm số đầu tay — có landing page + thanh toán tự động + giao hàng tự động." }
  ],

  // ── Instructor ──
  instructorLabel: "NGƯỜI DẪN ĐƯỜNG",
  instructorHeading: "Tôi từng mất hàng trăm giờ làm thủ công...\nCho đến khi xây được Hệ Thống AI\u00A0riêng.",
  instructorInitials: "NĐV",
  instructorName: "Nguyễn Đức Việt",
  instructorTitle: "Kỹ sư Bách Khoa · 15 năm Giảng viên FPT Arena · Founder Fedu.vn",
  instructorBio: [
    "Tôi không bắt đầu bằng AI. 15 năm ở FPT Arena, tôi dạy video production bằng phương pháp thủ công truyền thống. Mỗi dự án mất hàng tuần cắt ghép, chỉnh sửa từng frame.",
    "Khi AI bùng nổ, tôi là người nghi ngờ nhất. Cho đến khi tôi thử xây một Agent tự động phân tích video — nó làm trong 10 phút những gì tôi mất 3 tiếng. Tôi nhận ra: AI không thay thế sự sáng tạo, nó giải phóng sự sáng tạo.",
    "Tôi đã đóng gói toàn bộ quy trình — từ Prompt Engineering đến xây Agent, từ phân tích video đến tạo landing page tự động — thành một Hệ Thống mà bất kỳ ai cũng có thể áp dụng. Không cần biết code. Chỉ cần biết cách ra lệnh."
  ],

  // ── Bonus ──
  bonusLabel: "QUÀ TẶNG CHỈ CHO 100 TESTER ĐỢT 1",
  bonusHeading: "Tặng kèm trọn bộ 'Vũ khí AI' — không bán riêng lẻ",
  bonusSub: "Những công cụ này bổ sung cho 3 Cỗ Máy chính, giúp bạn vận hành nhanh hơn:",
  bonusItems: [
    {
      id: "01",
      title: "Bộ 50+ Mega Prompt Viết Kịch Bản Video",
      desc: "Đã tối ưu cho 10 ngành phổ biến: BĐS, F&B, Beauty, Giáo dục, Tài chính, Coaching, Y tế, Công nghệ, Thời trang, Fitness.<br/><br/>Mỗi Prompt được thiết kế theo cấu trúc:<br/><ul style='margin: 12px 0; padding-left: 20px; color: #cbd5e1; line-height: 1.8;'><li>🎯 <b>Vai trò + Bối cảnh ngành</b></li><li>📝 <b>Output: Kịch bản phân cảnh 2 cột (Lời thoại + Hình ảnh)</b></li><li>🔥 <b>Tự động Hook 3 giây + CTA cuối video</b></li></ul>"
    },
    {
      id: "02",
      title: "Agent Phân Tích Video Tự Động",
      desc: "Gửi link Instagram/TikTok → Agent tự tải video, bóc tách phân cảnh (Shot Detection), trích xuất Keyframes, ghép ảnh so sánh chuyển cảnh, bóc tách kịch bản thoại tiếng Việt.<br/><br/><ul style='margin: 12px 0; padding-left: 20px; color: #cbd5e1; line-height: 1.8;'><li>📊 <b>Xuất Báo cáo Đạo diễn (Director Breakdown) chuẩn</b></li><li>🤖 <b>Chạy hoàn toàn tự động, không cần can thiệp</b></li><li>💡 <b>Học cách đối thủ làm video hay — áp dụng cho kênh mình</b></li></ul>"
    },
    {
      id: "03",
      title: "Agent Sửa Phụ Đề CapCut Tiếng Việt",
      desc: "Tự động sửa lỗi chính tả, dấu câu, dịch thuật cho file phụ đề CapCut. Không cần ngồi sửa tay từng dòng nữa.<br/><br/><ul style='margin: 12px 0; padding-left: 20px; color: #cbd5e1; line-height: 1.8;'><li>✅ <b>Sửa 100% lỗi chính tả tiếng Việt phổ biến</b></li><li>⚡ <b>Xử lý file dự án CapCut trực tiếp</b></li><li>🎬 <b>Tiết kiệm 1-2 tiếng sửa phụ đề mỗi video</b></li></ul>"
    },
    {
      id: "04",
      title: "Template Landing Page Bán Hàng Tự Động",
      desc: "Clone, thay nội dung, deploy trong 10 phút — có web bán hàng chuyên nghiệp + thanh toán VietQR tự động + email thông báo + cấp quyền Skool.<br/><br/><ul style='margin: 12px 0; padding-left: 20px; color: #cbd5e1; line-height: 1.8;'><li>🌐 <b>Thiết kế đẳng cấp, responsive 100%</b></li><li>💳 <b>Tích hợp SePay VietQR auto-check</b></li><li>🔄 <b>Tự động giao hàng qua Make.com + Skool</b></li></ul>"
    },
    {
      id: "05",
      title: "Cộng Đồng Skool 'AI Creator Vietnam'",
      desc: "Truy cập trọn đời vào cộng đồng thực chiến. Nơi chia sẻ Prompt mới, hỏi đáp kỹ thuật, cập nhật AI mới nhất, và kết nối với những Creator đang ứng dụng AI hàng ngày.<br/><br/><ul style='margin: 12px 0; padding-left: 20px; color: #cbd5e1; line-height: 1.8;'><li>👥 <b>Cộng đồng Creator ứng dụng AI thực chiến</b></li><li>📚 <b>Thư viện Prompt & Agent cập nhật liên tục</b></li><li>🎯 <b>Thầy Việt đồng hành hỗ trợ 1-1</b></li></ul>"
    }
  ],

  // ── Final CTA ──
  urgencyBar: "⚠ CHỈ 499K — PHÍ CAM KẾT CHO 100 TESTER ĐẦU TIÊN TRẢI NGHIỆM CỘNG ĐỒNG SKOOL ĐỢT 1",
  ctaLabel: "// ĐĂNG KÝ THAM GIA",
  ctaHeading: "Bạn không mua lý thuyết.\nBạn đang sở hữu trọn bộ 3 Tài Sản Vận Hành.",
  ctaSub: "Giá 499K không phải vì rẻ — mà là phí cam kết cho 100 Tester đầu tiên trải nghiệm cộng đồng Skool đợt 1.",
  countdownLabel: "⏳ Ưu đãi Early Bird kết thúc sau:",
  valueStackTitle: "3 TÀI SẢN VẬN HÀNH BẠN SỞ HỮU NGAY:",
  valueStack: [
    { label: "💎 Tài sản 1: Cỗ Máy Hậu Kỳ Siêu Tốc (AI Agent CapCut) — Sửa sạch 100% lỗi chính tả phụ đề tiếng Việt chỉ 3 thao tác", price: "3.990.000 VNĐ" },
    { label: "💎 Tài sản 2: Hệ Thống Thu Tiền Xuyên Đêm (Auto-VietQR) — Template Web + Luồng tự động duyệt bill + Giao hàng lúc 2h sáng", price: "4.500.000 VNĐ" },
    { label: "💎 Tài sản 3: Bộ Não Bắt Trend Nhân Bản — 50+ Mega Prompt bóc tách video đối thủ + Nạp nhân cách vào AI", price: "2.500.000 VNĐ" },
    { label: "👑 Sổ Tay Bàn Giao Kỹ Thuật + Cộng đồng Skool trọn đời + Đồng hành 1-1 Thầy Việt", price: "2.000.000 VNĐ" }
  ],
  guarantee: "👑 Mảnh ghép sinh tử đi kèm: Sổ Tay Bàn Giao Kỹ Thuật — Thầy Việt trực tiếp hướng dẫn lắp ráp 3 tài sản thành Cỗ máy in tiền của riêng bạn. Chỉ 15 phút Copy-Paste, không cần biết lập trình.",

  // ── Footer ──
  footerBrand: "AI CREATOR",
  footerDot: ".",
  footerTagline: "\"AI không thay thế sự sáng tạo.\nNó giải phóng sự sáng tạo.\"",
  footerLinks: [],
  footerCopyright: "COPYRIGHT 2026 | CI.FEDU.VN — FEDU EDUCATION",

  blocksMeta: {
    order: ["hero", "pain", "attention", "rule", "cycle", "discovery", "solution", "skills", "midCta", "before-after", "roadmap", "instructor", "bonus", "cta", "footer"],
    hidden: ["rule", "cycle", "discovery", "solution", "skills", "midCta", "before-after"],
    media: {},
    custom: {},
  },
};

export const ContentCtx = createContext<PageContent>(DEFAULT_CONTENT);

export function useContent(): PageContent {
  return useContext(ContentCtx);
}

export function ContentProvider({ children }: { children: ReactNode }) {
  return createElement(ContentCtx.Provider, { value: DEFAULT_CONTENT }, children);
}
