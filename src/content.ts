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
export interface Stage { n: string; title: string; sub?: string; desc?: string; gif?: string; time?: string; highlights?: string[] }
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
  philosophyAssets?: { icon: string; tag: string; desc: string; isHighlight?: boolean; n?: string; title?: string; input?: string; output?: string; kpi?: string }[];

  // ── Bridge ──
  bridgeHeading?: string;
  bridgeLabel?: string;
  bridgeSteps?: { n: string; title: string; lead?: string; items?: string[]; desc?: string }[];
  bridgeCompareHeading?: string;
  bridgeCompareSubtitle?: string;
  bridgeCompareOldTitle?: string;
  bridgeCompareOldItems?: string[];
  bridgeCompareNewTitle?: string;
  bridgeCompareNewItems?: string[];
  bridgeCompareList?: {
    id: number;
    tag: string;
    oldAction: string;
    oldPain: string;
    userPrompt: string;
    aiResult: string;
    timeBadge: string;
  }[];

  // ── Showcase ──
  showcaseLabel?: string;
  showcaseHeading?: string;
  showcaseSub?: string;
  showcaseVideos?: { id: string; title: string; module?: string; thumb?: string }[];

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
  attentionComparisonTitle?: string;
  attentionItems: { icon: string; title: string; desc: string }[];

  // ── Rule 7-11-4 ──
  ruleLabel: string;
  ruleHeading: string;
  rulePara?: string;
  ruleItems?: { fail: string; why: string }[];
  ruleCards?: { n: string; title: string; desc: string }[];
  ruleConclusion?: string;

  cycleLabel: string;
  cycleHeading: string;
  cyclePara?: string;
  cycleItems?: { fail: string; why: string }[];
  cycleSteps?: { n: string; title: string; desc: string }[];
  
  discoveryLabel?: string;
  discoveryHeading?: string;
  discoverySub?: string;
  discoveryItems?: { title: string; desc: string; gif?: string; placeholderLabel?: string }[];

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
  instructorBadge?: string;
  instructorHighlights?: { icon: string; title: string; desc: string }[];

  // ── Fullscreen Statement Quote ──
  quoteText?: string;
  quoteAuthor?: string;
  quoteRole?: string;

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
  bonusItems: {
    id: string;
    tag?: string;
    speedBadge?: string;
    title: string;
    desc: string;
    summary?: string;
    highlights?: { icon: string; label: string; text: string }[];
    mockupType?: "script" | "editor" | "webqr" | "support";
    audioDemo?: string;
    youtubeDemo?: string;
    gifDemo?: string;
  }[];
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
  philosophyAssets: [
    {
      n: "01",
      icon: "📝",
      tag: "01. Công cụ bóc kịch bản clip hay",
      title: "Công cụ bóc kịch bản clip hay",
      input: "Dán link clip viral đang hot trên mạng vào.",
      output: "AI tự bóc sạch lời nói & góc quay thành kịch bản 2 cột để quay theo trong 5 phút. Khỏi cắn bút nghĩ câu mở đầu.",
      kpi: "⏱️ 5 phút có kịch bản",
      desc: "Thấy clip nào trên mạng đang viral hay, dán link vào là AI tự bóc sạch lời nói và góc quay thành kịch bản 2 cột để quay theo trong 5 phút. Khỏi cắn bút nghĩ câu mở đầu.",
      isHighlight: false,
    },
    {
      n: "02",
      icon: "⚡",
      tag: "02. Trợ lý Dựng video tự động (Auto Edit)",
      title: "Trợ lý Dựng video tự động (Auto Edit)",
      input: "Ném file video tự quay thô vào hệ thống.",
      output: "AI tự nghe tiếng Việt để gọt sạch đoạn ngập ngừng, làm phụ đề nhảy bắt mắt và lưu mẫu chuẩn cho các video sau.",
      kpi: "⚡ 10 phút xuất video",
      desc: "Ném video tự quay vào → AI tự nghe tiếng Việt để gọt sạch đoạn ngập ngừng, tự làm phụ đề chuyển động bắt mắt để đăng ngay. Bạn thoải mái chọn kiểu chữ, cảnh trám minh họa và lưu lại làm mẫu chuẩn cho các video sau.",
      isHighlight: false,
    },
    {
      n: "03",
      icon: "💳",
      tag: "03. Trang web bán hàng tự động",
      title: "Trang web bán hàng tự động (VietQR)",
      input: "Gắn mẫu web tích hợp sẵn mã QR ngân hàng.",
      output: "Khách chuyển khoản là tiền về tài khoản, web tự gửi bài 24/7. Đổi sản phẩm chỉ cần nhắn lệnh đổi chữ trong 10 phút.",
      kpi: "💳 Thu tiền tự động 24/7",
      desc: "Trang web có sẵn mã QR ngân hàng. Khách chuyển khoản là tiền về tài khoản, web tự gửi bài học 24/7. Khi muốn bán sản phẩm khác, chỉ cần nhắn tin ra lệnh là AI tự đổi câu chữ, đổi hình ảnh trong 10 phút, không cần biết code.",
      isHighlight: false,
    }
  ],
  heroCta: "SỞ HỮU 3 CỖ MÁY AI — CHỈ 499K →",
  heroVideoYoutubeId: "",
  heroSubPrice: "Phí cam kết cho 100 Tester đầu tiên — Thầy Việt đồng hành 1-1",

  // ── Bridge Section ──
  bridgeHeading: "Sự khác biệt là gì?",
  bridgeLabel: "TỪ NGƯỜI CHAT HỎI ĐÁP TRỞ THÀNH NGƯỜI RA LỆNH",
  bridgeSteps: [
    {
      n: "01",
      title: "Chạy trên nền tảng Google Gemini",
      lead: "Công nghệ chính hãng Google — Ổn định, an toàn và bảo mật cao.",
      items: [
        "Tài khoản chính chủ: Vận hành trực tiếp trên tài khoản Google của bạn, không lo bị khóa hay phụ thuộc bên thứ ba.",
        "Không phần mềm trôi nổi: Mọi công cụ sử dụng lõi Gemini của Google, không cần cài đặt cồng kềnh làm nặng máy."
      ]
    },
    {
      n: "02",
      title: "Bàn giao sẵn 3 Trợ lý AI thực chiến",
      lead: "Lắp ráp hoàn thiện 80% — Nhận đồ nghề là cắm vào dùng ngay.",
      items: [
        "🎬 Trợ lý Kịch bản: Dán link clip hay → Tự bóc thành kịch bản 2 cột trong 5 phút để quay ngay.",
        "✂️ Trợ lý Dựng clip: Ném file quay thô vào → Tự gọt sạch nói vấp & tự làm phụ đề chuyển động.",
        "💳 Trợ lý Bán hàng: Web tự nhận tiền qua mã QR và tự giao bài học lúc 2h sáng."
      ]
    },
    {
      n: "03",
      title: "Bạn nhắn lệnh — AI làm thay từ A đến Z",
      lead: "Chỉ cần nhắn tiếng Việt đời thường, không cần biết một dòng code.",
      items: [
        "💬 Dựng clip theo gu: Nhắn yêu cầu phong cách, AI tự lưu mẫu và tự động áp dụng cho các video sau.",
        "💬 Đổi món để bán: Nhắn lệnh là AI tự thay câu chữ, đổi ảnh trên web trong 10 phút.",
        "⚡ Làm chủ 100%: Tự tay bạn quản lý toàn bộ hệ thống, không cần phụ thuộc hay đi thuê thợ ngoài."
      ]
    }
  ],
  bridgeCompareHeading: "Sự khác biệt thực tế khi dùng AI làm thợ thực thi",
  bridgeCompareSubtitle: "Thay vì lên chat hỏi đáp vu vơ vài câu vô dụng, bạn chỉ việc ra lệnh bằng tiếng Việt — AI tự động làm thay 80% việc tay chân.",
  bridgeCompareOldTitle: "DÙNG AI KIỂU HỎI ĐÁP (MỆT MỎI)",
  bridgeCompareOldItems: [
    "Xin ý tưởng → Nhận bài văn dài dòng sáo rỗng, đọc xong không biết bấm máy quay cái gì.",
    "Tự dựng video → Mất 3–4 tiếng cặm cụi gọt từng đoạn nói vấp, gù lưng sửa từng chữ phụ đề toét cả mắt.",
    "Bán hàng → Cả ngày dán mắt vào điện thoại chat tay gửi số tài khoản, canh check biến động số dư."
  ],
  bridgeCompareNewTitle: "DÙNG 3 TRỢ LÝ AI (THÀNH THƠI)",
  bridgeCompareNewItems: [
    "Gửi link clip hay → Trợ lý tự bóc sạch từng câu thoại và góc máy thành kịch bản 2 cột để quay ngay.",
    "Ném video thô vào → AI tự gọt sạch ngập ngừng, phụ đề nhảy theo lời nói, xuất video hoàn chỉnh trong 10 phút.",
    "Gắn mẫu web → Khách quét mã QR tự động nhận bài lúc nửa đêm, tiền về thẳng tài khoản ngân hàng."
  ],
  bridgeCompareList: [
    {
      id: 0,
      tag: "01 • KỊCH BẢN & Ý TƯỞNG",
      oldAction: "Lên chat hỏi xin ý tưởng kịch bản",
      oldPain: "Nhận bài văn dài dòng sáo rỗng, đọc xong vẫn không biết bấm máy quay cái gì.",
      userPrompt: "Gửi link clip hay đang lên xu hướng",
      aiResult: "Trợ lý tự bóc sạch từng câu thoại & góc máy thành kịch bản 2 cột để bấm máy quay trong 5 phút.",
      timeBadge: "5 phút có kịch bản"
    },
    {
      id: 1,
      tag: "02 • DỰNG PHIM & PHỤ ĐỀ",
      oldAction: "Tự cắt ghép video & gõ từng chữ sub",
      oldPain: "Mất 3–4 tiếng cặm cụi gọt từng đoạn nói vấp, gù lưng sửa từng chữ phụ đề toét cả mắt.",
      userPrompt: "Ném video thô vừa tự quay vào",
      aiResult: "AI tự gọt sạch ngập ngừng, làm phụ đề nhảy theo lời nói, xuất video hoàn chỉnh trong 10 phút.",
      timeBadge: "10 phút xuất video"
    },
    {
      id: 2,
      tag: "03 • BÁN HÀNG & THU TIỀN",
      oldAction: "Chat tay xin số tài khoản, check bill",
      oldPain: "Cả ngày dán mắt vào điện thoại chat tay gửi STK, canh check biến động số dư mỏi mệt.",
      userPrompt: "Gắn mẫu web có tích hợp VietQR",
      aiResult: "Khách quét mã QR tự động nhận bài lúc 2h sáng, tiền về thẳng tài khoản ngân hàng.",
      timeBadge: "Tự động thu tiền 24/7"
    }
  ],

  // ── Pain ──
  painLabel: "SỰ THẬT VỀ NGƯỜI LÀM VIDEO HIỆN NAY",
  painHeading: "AI đang thay đổi mọi thứ. Người không biết dùng AI đúng cách sẽ bị bỏ lại phía sau.",
  painQuote: "'Tôi biết AI quan trọng, tôi cũng dùng AI mỗi ngày. Nhưng tôi chỉ biết hỏi nó vài câu đơn giản... rồi hết. Trong khi đối thủ ra video đều đặn bằng công cụ tự động, còn tôi loay hoay mãi một video vẫn chưa xong.'",
  painSub: "Có phải bạn cũng đang gặp đúng những cảnh quen thuộc này mỗi lần làm video?",
  pains: [
    "❌ Dùng AI như Google: Hỏi AI 'Viết kịch bản video bán hàng' → nhận được đoạn văn dài dòng sáo rỗng, không biết bấm máy quay cái gì.",
    "❌ Mất 3-5h cặm cụi edit thủ công: Ngồi gọt từng đoạn nói vấp, gù lưng sửa từng chữ phụ đề toét cả mắt.",
    "❌ Có chuyên môn nhưng ngại khâu kỹ thuật: Sợ làm video vì ngán ngẩm việc cắt ghép dựng hình phức tạp.",
    "❌ Muốn bán sản phẩm nhưng không biết tự động hóa: Khách hỏi mua là phải chat tay gửi số tài khoản, canh check tiền từng đơn rất mất thời gian."
  ],
  painConclusion: "",

  // ── Attention ──
  attentionLabel: "BẠN ĐANG CHỌN CÁCH NÀO?",
  attentionHeading: "3 lựa chọn để làm video thảnh thơi — chỉ 1 cách thực sự hiệu quả.",
  attentionPara: "90% người làm video dừng lại ở mức chat hỏi đáp vài câu đơn giản. 10% còn lại biến AI thành thợ thực thi làm thay mình 80% việc tay chân. Bạn muốn ở nhóm nào?",
  attentionComparisonTitle: "Thời Đại Thừa Thãi: Mọi Công Cụ Đều Vô Nghĩa Nếu Bạn Không Thể Tùy Biến",
  attentionItems: [
    {
      icon: "❌",
      title: "Thừa thãi văn mẫu AI",
      desc: "Prompt ai cũng có như nhau ➔ Giá trị thực sự là câu chuyện và kinh nghiệm thật của bạn được AI chuyển thành kịch bản."
    },
    {
      icon: "❌",
      title: "Thừa thãi phần mềm dựng",
      desc: "Càng phức tạp càng ngại làm ➔ Chỉ cần trợ lý tinh gọn tự gọt ngập ngừng và gắn phụ đề đúng gu bạn chọn."
    },
    {
      icon: "❌",
      title: "Thừa thãi hệ thống cồng kềnh",
      desc: "Web tiền triệu nhưng không tự sửa được ➔ Chỉ cần web tinh gọn có sẵn VietQR, nhắn lệnh 10 phút là đổi xong nội dung."
    },
    {
      icon: "❌",
      title: "Quy luật bất biến",
      desc: "Tự tay tạo ra được ➔ Tự tay sửa được ➔ Biến AI thành thợ riêng của mình mà không tốn một đồng phí duy trì."
    }
  ],

  // ── Rule ──
  ruleLabel: "3 SỰ THẬT VỀ AI MÀ NGƯỜI LÀM VIDEO CẦN BIẾT",
  ruleHeading: "Tại sao chat hỏi đáp không giải quyết được việc làm video?",
  ruleCards: [
    { n: "01", title: "AI chat chỉ cho lời khuyên, không làm thay việc", desc: "Nếu chỉ lên chat hỏi đáp, bạn vẫn phải tự tay ngồi viết lại kịch bản, tự tay cắt từng frame video và tự chat bán hàng. Bạn cần một công cụ làm thợ thực thi chứ không phải chuyên gia tư vấn." },
    { n: "02", title: "Hệ thống làm sẵn giúp bạn đi nhanh hơn 10 lần", desc: "Thay vì mất 6 tháng tự học code hay mày mò prompt phức tạp, nhận sẵn bộ công cụ đã được lắp ráp 80% giúp bạn cắm vào là chạy và có kết quả ngay trong ngày đầu tiên." },
    { n: "03", title: "Lõi quen thuộc là chìa khóa bền vững", desc: "Không cần mua công cụ đắt tiền hay cài đặt rườm rà. Mọi thứ vận hành trên nền tảng AI quen thuộc với câu lệnh tiếng Việt đời thường, giúp bạn tự tin làm chủ 100%." }
  ],

  // ── Cycle ──
  cycleLabel: "VÒNG LẶP NĂNG SUẤT MỚI",
  cycleHeading: "Quy trình làm video thảnh thơi từ A đến Z:",
  cycleSteps: [
    { n: "01", title: "Bóc kịch bản 5 phút", desc: "Dán link clip viral → AI tự xuất kịch bản 2 cột (Lời thoại + Góc máy) để bạn bật máy lên là quay tự tin." },
    { n: "02", title: "Dựng video 10 phút", desc: "Quăng video tự quay vào → AI tự gọt vấp, lên chữ nhảy theo lời nói và áp dụng phong cách cảnh trám chuẩn của bạn." },
    { n: "03", title: "Thu tiền tự động", desc: "Gắn link web có sẵn mã VietQR → Khách quét mã chuyển khoản là tiền về tài khoản, web tự gửi bài học 24/7." }
  ],
  
  discoveryLabel: "BỘ 3 CÔNG CỤ THỰC CHIẾN",
  discoveryHeading: "3 công cụ làm sẵn giải quyết trọn vẹn việc làm video:",

  // ── Solution ──
  solutionLabel: "GIẢI PHÁP ĐÃ LÀM SẴN",
  solutionHeading: "Bàn giao sẵn 80% — Bạn chỉ việc cắm vào và ra lệnh:",
  solutionSub: "Đóng gói toàn bộ kinh nghiệm thực chiến giúp bạn cắt giảm 80% thời gian sản xuất video:",
  solutionItems: [
    "❌ Nghĩ kịch bản 2-3 tiếng ➞ ✅ Công cụ bóc kịch bản: Dán link clip hay, nhận kịch bản 2 cột chuẩn quay trong 5 phút.",
    "❌ Edit video 3-5 tiếng/clip ➞ ✅ Trợ lý Dựng video tự động: Tự gọt sạch ngập ngừng, làm phụ đề chuyển động và xuất video ngay.",
    "❌ Chăm sóc khách & chốt đơn thủ công ➞ ✅ Web bán hàng tự động: VietQR tự check tiền và giao bài 24/7."
  ],

  // ── Skills ──
  skillsLabel: "3 BƯỚC LÀM CHỦ CÔNG CỤ",
  skillsHeading: "Từ người làm thủ công đến sở hữu hệ thống tự động:",
  skillCards: [
    { n: "01", title: "Bóc kịch bản clip hay", desc: "Dán link clip viral → Tự bóc lời thoại và góc quay thành kịch bản 2 cột trong 5 phút. Nạp gu riêng để video mang bản sắc của bạn.", gif: "/gifs/invisible-cut.gif" },
    { n: "02", title: "Dựng video & Phụ đề tự động", desc: "Tự gọt đoạn nói vấp, làm phụ đề nhảy bắt mắt. Chọn kiểu chữ và cảnh trám lưu lại làm mẫu chuẩn áp dụng cho các video sau.", gif: "/gifs/lighting-3d.gif" },
    { n: "03", title: "Trang web bán hàng tự động", desc: "Sở hữu trang web có sẵn VietQR tự nhận tiền và giao bài. Nhắn lệnh tiếng Việt để AI tự đổi chữ, đổi ảnh trong 10 phút.", gif: "/gifs/shot-sizes.gif" }
  ],

  // ── Mid CTA ──
  midCtaHeading: "Sẵn sàng để AI làm thay bạn 80% công việc video?",
  midCtaSub: "Sở hữu trọn bộ 3 công cụ làm sẵn + Cộng đồng thực chiến + Thầy Việt hỗ trợ 1-1. Bắt đầu ngay hôm nay.",
  midCtaBtn: "SỞ HỮU TRỌN BỘ CÔNG CỤ — CHỈ 499K",

  // ── Before & After ──
  baLabel: "KẾT QUẢ KHI CÓ BỘ CÔNG CỤ",
  baHeading: "Sự khác biệt TRƯỚC và SAU khi áp dụng 3 công cụ làm sẵn:",
  baSub: "",
  beforeLabel: "TRƯỚC (Cày Cuốc Thủ Công)",
  afterLabel: "SAU (Có 3 Trợ Lý AI Làm Thợ)",
  beforeItems: [
    "Mất 2-3h cắn bút nghĩ kịch bản, bí câu mở đầu",
    "Edit video 3-5h/clip, ngồi gọt từng đoạn nói vấp",
    "Phụ đề gõ tay mất cả buổi, sai dấu toét cả mắt",
    "Bán hàng phải chat tay gửi số tài khoản, canh check tiền",
    "Sợ kỹ thuật phức tạp và tốn phí duy trì công cụ lạ"
  ],
  afterItems: [
    "Dán link clip hay → Kịch bản phân cảnh 2 cột trong 5 phút",
    "Ném video thô vào → AI tự gọt vấp và làm chữ nhảy ngay",
    "Phụ đề chuyển động tự động, chuẩn xác từng câu chữ",
    "Web tự nhận tiền VietQR và gửi bài 24/7 lúc nửa đêm",
    "Chạy trên lõi Gemini quen thuộc, nhắn lệnh tiếng Việt là xong"
  ],

  // ── Roadmap (Minh bạch bàn giao) ──
  roadmapLabel: "MINH BẠCH BÀN GIAO",
  roadmapHeading: "Toàn bộ quy trình bàn giao gói gọn trong 3 chặng:",
  roadmapPreviewHeading: "Không giấu nghề, không lý thuyết suông. Xem trực tiếp cách hệ thống vận hành bên trong.",
  roadmapPreviewDesc: "Tận mắt thấy AI bóc kịch bản, gọt video và web tự nhận tiền chỉ bằng vài câu lệnh tiếng Việt.",
  roadmapIframeUrl: "",
  roadmapChaptersHeading: "3 chặng từ khi bấm mua đến khi hệ thống chạy mượt:",
  stages: [
    { 
      n: "Chặng 1", 
      time: "3 PHÚT",
      title: "🔑 Mở Khóa & Kích Hoạt Trong 3 Phút", 
      desc: "Nhận link bàn giao trọn bộ 3 công cụ đã lắp sẵn 80%. Nhập thẳng vào tài khoản Google cá nhân của bạn — không cần cài đặt phần mềm ngoài làm nặng máy.", 
      sub: "🎯 Hoàn tất ngay sau khi đăng ký",
      highlights: [
        "Cắm thẳng vào Google Drive cá nhân",
        "Không cài phần mềm lạ làm nặng máy",
        "Vận hành trực tiếp trên lõi Gemini"
      ]
    },
    { 
      n: "Chặng 2", 
      time: "15 PHÚT",
      title: "🎬 Thử Nghiệm Với Clip Đầu Tiên (15 Phút)", 
      desc: "Dán thử link clip bạn thích để lấy kịch bản, bật máy quay 1 đoạn ngắn rồi thả cho AI tự gọt vấp và lên chữ nhảy. Bạn có ngay video hoàn chỉnh đầu tiên để đăng kênh ngay trong ngày.", 
      sub: "🎯 Có sản phẩm thực tế đầu tay",
      highlights: [
        "Bóc kịch bản 2 cột từ link clip viral",
        "AI tự gọt sạch đoạn ngập ngừng, nói vấp",
        "Tự động sinh phụ đề chữ nhảy bắt mắt"
      ]
    },
    { 
      n: "Chặng 3", 
      time: "24/7 TỰ ĐỘNG",
      title: "💳 Bật Web Bán Hàng & Thầy Việt Đồng Hành", 
      desc: "Gắn số tài khoản ngân hàng của bạn vào web có sẵn để tự động nhận tiền 24/7. Trong suốt quá trình làm, có nhóm hỗ trợ thực chiến và thầy Việt hướng dẫn trực tiếp nếu bạn vướng bất kỳ thao tác nào.", 
      sub: "🎯 Kích hoạt cỗ máy thu tiền & Hỗ trợ 1-1",
      highlights: [
        "Gắn số tài khoản VietQR nhận tiền tự động",
        "Web tự gửi bài học cho khách lúc 2h sáng",
        "Nhóm hỗ trợ thực chiến & Thầy Việt hướng dẫn 1-1"
      ]
    }
  ],

  // ── Instructor ──
  instructorLabel: "NGƯỜI DẪN ĐƯỜNG",
  instructorHeading: "Mình không nói mấy thứ nhảm nhí hay mẹo vặt mất thời gian.\nVào thẳng vấn đề để bạn làm chủ công cụ ngay hôm nay.",
  instructorInitials: "NĐV",
  instructorName: "Nguyễn Đức Việt",
  instructorTitle: "Kỹ sư Bách Khoa · 15 năm Giảng viên FPT Arena · Founder Fedu.vn",
  instructorBadge: "💬 Trực Tiếp Giải Đáp Qua Zalo",
  instructorBio: [
    "15 năm giảng dạy tại FPT Arena, tôi hiểu rõ cảm giác mất hàng tiếng đồng hồ gọt từng frame hình thủ công.",
  ],
  instructorHighlights: [
    {
      icon: "🎯",
      title: "Biến Gemini thành thợ thực thi:",
      desc: "Tự bóc kịch bản viral, tự gọt vấp và tự lên chữ nhảy — không dạy lý thuyết suông."
    },
    {
      icon: "⚡",
      title: "Làm sẵn 80% — Cắm là chạy:",
      desc: "Vận hành thẳng trên Google cá nhân, chỉ cần nhắn lệnh tiếng Việt là AI làm thay."
    },
    {
      icon: "🤝",
      title: "Trực tiếp gỡ vướng khi thực hành:",
      desc: "Kẹt thao tác nào nhắn là được chỉ ngay, không để bạn phải tự mò mẫm một mình."
    }
  ],

  // ── Fullscreen Statement Quote ──
  quoteText: "Tôi từng mất hàng trăm giờ làm thủ công...\nCho đến khi biết thế nào là \"dùng AI\".",
  quoteAuthor: "Nguyễn Đức Việt",
  quoteRole: "Kỹ sư Bách Khoa · 15 năm Giảng viên FPT Arena · Founder Fedu.vn",

  // ── Bonus ──
  bonusLabel: "TRỌN BỘ BÀN GIAO CHO 100 THÀNH VIÊN ĐỢT 1",
  bonusHeading: "Nhận trọn bộ 3 công cụ làm sẵn + Hỗ trợ thực chiến",
  bonusSub: "Làm sẵn 80% trên lõi Google Gemini quen thuộc — Cắm vào là chạy ngay:",
  bonusItems: [
    {
      id: "01",
      title: "Công cụ bóc kịch bản clip hay",
      desc: "Dán link clip viral trên TikTok/Reels/Shorts → AI tự bóc sạch lời thoại và góc quay thành kịch bản 2 cột trong 5 phút. Khỏi cắn bút nghĩ câu mở đầu.<br/><br/><ul style='margin: 10px 0 0 0; padding-left: 20px; color: var(--cl-text-body, #475569); line-height: 1.8;'><li>🎯 <strong style='color: var(--cl-text-base, #0f172a);'>Tự động bóc tách phân cảnh & góc máy</strong></li><li>📝 <strong style='color: var(--cl-text-base, #0f172a);'>Kịch bản 2 cột chuẩn quay ngay</strong></li><li>⚡ <strong style='color: var(--cl-text-base, #0f172a);'>Nạp gu và phong cách cá nhân trong 1 nốt nhạc</strong></li></ul>"
    },
    {
      id: "02",
      title: "Trợ lý Dựng video tự động (Auto Edit)",
      desc: "Ném video tự quay vào → AI tự gọt sạch đoạn ngập ngừng, làm phụ đề chuyển động và xuất video hoàn chỉnh. Tùy biến kiểu chữ & cảnh trám lưu thành mẫu chuẩn riêng.<br/><br/><ul style='margin: 10px 0 0 0; padding-left: 20px; color: var(--cl-text-body, #475569); line-height: 1.8;'><li>✂️ <strong style='color: var(--cl-text-base, #0f172a);'>Chế độ Ăn ngay: Tự gọt vấp & lên phụ đề bắt mắt</strong></li><li>🎨 <strong style='color: var(--cl-text-base, #0f172a);'>Chế độ Tùy biến: Lưu chuẩn phong cách riêng</strong></li><li>⏱️ <strong style='color: var(--cl-text-base, #0f172a);'>Cắt giảm 80% thời gian ngồi dựng thủ công</strong></li></ul>"
    },
    {
      id: "03",
      title: "Trang web bán hàng & Thu tiền VietQR tự động",
      desc: "Trang web có sẵn mã QR ngân hàng. Khách quét mã là tiền về tài khoản, web tự gửi bài học 24/7. Nhắn lệnh bằng tiếng Việt là AI tự đổi câu chữ, hình ảnh trong 10 phút.<br/><br/><ul style='margin: 10px 0 0 0; padding-left: 20px; color: var(--cl-text-body, #475569); line-height: 1.8;'><li>💳 <strong style='color: var(--cl-text-base, #0f172a);'>Tự động nhận tiền VietQR & giao bài 24/7</strong></li><li>🔄 <strong style='color: var(--cl-text-base, #0f172a);'>Nhắn tin ra lệnh để tự đổi web theo ý muốn</strong></li><li>🚀 <strong style='color: var(--cl-text-base, #0f172a);'>Không cần biết lập trình, không tốn phí duy trì</strong></li></ul>"
    },
    {
      id: "04",
      title: "Cộng đồng thực chiến & Hướng dẫn cài đặt 1-1",
      desc: "Truy cập trọn đời vào cộng đồng. Kèm video hướng dẫn chi tiết từng bước của Thầy Nguyễn Đức Việt, giải đáp và gỡ rối trực tiếp.<br/><br/><ul style='margin: 10px 0 0 0; padding-left: 20px; color: var(--cl-text-body, #475569); line-height: 1.8;'><li>👥 <strong style='color: var(--cl-text-base, #0f172a);'>Cộng đồng người làm video ứng dụng AI thực chiến</strong></li><li>🎥 <strong style='color: var(--cl-text-base, #0f172a);'>Video hướng dẫn cài đặt từng bước chi tiết</strong></li><li>🤝 <strong style='color: var(--cl-text-base, #0f172a);'>Thầy Việt trực tiếp đồng hành và hỗ trợ giải đáp</strong></li></ul>"
    }
  ],

  // ── Final CTA ──
  urgencyBar: "⚠ CHỈ 499K — DÀNH CHO 100 THÀNH VIÊN ĐẦU TIÊN THAM GIA ĐỢT 1",
  ctaLabel: "// BÀN GIAO TRỌN BỘ CÔNG CỤ",
  ctaHeading: "Không học lý thuyết suông.\nNhận đồ vào việc luôn.",
  ctaSub: "Giá ưu đãi 499K chỉ dành riêng cho 100 thành viên đợt 1 nhận bàn giao và tham gia cộng đồng thực chiến.",
  countdownLabel: "⏳ Ưu đãi Early Bird kết thúc sau:",
  valueStackTitle: "TRỌN BỘ CÔNG CỤ BẠN NHẬN ĐƯỢC:",
  valueStack: [
    { label: "💎 Công cụ bóc kịch bản clip hay — Dán link clip viral là có kịch bản quay ngay trong 5 phút", price: "2.500.000 VNĐ" },
    { label: "💎 Trợ lý Dựng video tự động (Auto Edit) — Tự gọt sạch ngập ngừng, làm phụ đề & lưu mẫu riêng", price: "3.990.000 VNĐ" },
    { label: "💎 Mẫu web bán hàng tự động (Auto-VietQR) — Tự check chuyển khoản và giao bài 24/7 + Tự đổi web 10 phút", price: "4.500.000 VNĐ" },
    { label: "👑 Video hướng dẫn cài đặt từng bước + Cộng đồng thực chiến trọn đời + Thầy Việt hỗ trợ 1-1", price: "2.000.000 VNĐ" }
  ],
  guarantee: "👑 Cam kết cắm là chạy: Chạy mượt mà trên lõi Gemini quen thuộc. Nhắn lệnh bằng tiếng Việt đời thường, Thầy Việt trực tiếp quay video chỉ dẫn từng bước, không cần biết lập trình.",

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
