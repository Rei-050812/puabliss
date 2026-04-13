// ─────────────────────────────────────────────
// Pua Bliss — サイトデータ定義
// Sanity連携時はここを CMS から取得する形に置き換える
// ─────────────────────────────────────────────

export const SALON_INFO = {
  name: "Pua Bliss",
  nameKana: "プアブリス",
  tagline: "Natural Trimming Salon",
  owner: "田邉 凜々花",
  ownerTitle: "Owner Trimmer",
  ownerComment:
    "わんちゃんが「また来たい」と思ってくれるサロンでありたい。\nお子さんのような大切な家族を、心を込めてお世話します。",
  address: "○○県○○市（確定後に差し替え）",
  zipCode: "〒000-0000",
  hours: "9:00〜18:00",
  closedDay: "不定休",
  tel: "000-0000-0000",
  lineUrl: "#",
  instagramUrl: "#",
  instagramHandle: "@puabliss",
  conceptText:
    "Pua Blissは「花（Pua）」「幸せ（Bliss）」という名前が表すように、\nわんちゃんにとって安心でき、飼い主さんにとっても心地よい場所を目指しています。\nナチュラルにこだわった素材と丁寧なケアで、大切な家族の美しさを引き出します。",
};

export const SERVICES = [
  {
    id: "shampoo",
    name: "シャンプーコース",
    description:
      "シャンプー・ブロー・爪切り・耳掃除・肛門腺絞りを含む基本コース。",
    price: "¥4,000〜",
    note: "犬種・毛量により料金が変動する場合があります",
  },
  {
    id: "cut-shampoo",
    name: "カット＋シャンプーコース",
    description:
      "シャンプーコースに全身カット・足周りカット・顔周りカットを追加したフルコース。",
    price: "¥7,000〜",
    note: "犬種・毛量・スタイルにより料金が変動する場合があります",
  },
  {
    id: "option",
    name: "オプションメニュー",
    description:
      "歯磨き / 薬用シャンプー / 保湿トリートメント / ブラッシング など。",
    price: "¥500〜",
    note: "オプションは予約時にお申し付けください",
  },
];

export const GALLERY_IMAGES = [
  { id: 1, src: "/images/gallery-01.png", alt: "施術後のわんちゃん①" },
  { id: 2, src: "/images/gallery-02.png", alt: "施術後のわんちゃん②" },
  { id: 3, src: "/images/gallery-03.png", alt: "施術後のわんちゃん③" },
  { id: 4, src: "/images/gallery-04.png", alt: "施術後のわんちゃん④" },
  { id: 5, src: "/images/gallery-05.png", alt: "施術後のわんちゃん⑤" },
  { id: 6, src: "/images/gallery-06.png", alt: "施術後のわんちゃん⑥" },
];

export const INTERIOR_IMAGES = [
  { id: 1, src: "/images/interior-01.png", alt: "サロン内装①" },
  { id: 2, src: "/images/interior-02.png", alt: "サロン内装②" },
  { id: 3, src: "/images/interior-03.png", alt: "サロン併設ドッグラン" },
];

export const HERO_IMAGE = {
  src: "/images/hero.png",
  alt: "Pua Bliss トリミングサロン メインビジュアル",
};

export const LOGO_IMAGE = {
  src: "/images/logo.svg",
  alt: "Pua Bliss ロゴ",
};
