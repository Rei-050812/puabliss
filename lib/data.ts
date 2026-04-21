// ─────────────────────────────────────────────
// Pua Bliss — サイトデータ定義
// Sanity連携時はここを CMS から取得する形に置き換える
// ─────────────────────────────────────────────

// デプロイ後、実際のドメインに変更してください
export const SITE_URL = "https://puabliss.vercel.app";

export const SALON_INFO = {
  name: "Pua Bliss",
  nameKana: "プアブリス",
  tagline: "Natural Trimming Salon",
  owner: "田邉 凜々花",
  ownerTitle: "Owner Trimmer",
  ownerComment:
    "安心して預けられる場所でありたい。\nわんちゃんにも飼い主さまにも、ほっとしていただけるサロンを目指しています。",
  address: "千葉県長生郡長生村信友1880-1",
  zipCode: "〒299-4331",
  hours: "9:00〜18:00",
  closedDay: "不定休",
  tel: "",
  lineUrl: "https://lin.ee/zPe7CLp",
  instagramUrl: "https://www.instagram.com/pua_briss/",
  instagramHandle: "@pua_briss",
  conceptText:
    "大切な家族であるわんちゃんを、やさしく丁寧にお預かりします。\n一頭一頭の性格やペースに合わせ、無理のないトリミングを心がけています。\n初めての子やトリミングが苦手な子にも配慮した施術で、\n見た目の可愛さだけでなく、お家でも過ごしやすいスタイルをご提案します。",
  deliveryService: "送迎サービスあり（要相談）",
};

// ─────────────────────────────────────────────
// サービス料金（犬種別）
// ─────────────────────────────────────────────
export const BREEDS = ["チワワ", "ダックス", "トイプードル", "アメリカンコッカー"] as const;

export const SERVICES = [
  {
    id: "shampoo",
    name: "シャンプーコース",
    description: "爪切り・耳掃除・肛門腺絞り・足裏バリカン込み",
    prices: {
      チワワ: "¥3,700〜",
      ダックス: "¥4,000〜",
      トイプードル: "¥5,800〜",
      アメリカンコッカー: "¥7,000〜",
    },
  },
  {
    id: "trimming",
    name: "トリミングコース",
    description: "シャンプー＋全身カット",
    prices: {
      チワワ: "¥5,700〜",
      ダックス: "¥6,000〜",
      トイプードル: "¥8,500〜",
      アメリカンコッカー: "¥11,000〜",
    },
  },
];

export const OPTIONS = [
  { name: "ハーブパック", price: "¥1,300〜" },
  { name: "泡パック", price: "¥1,200〜" },
  { name: "毛玉・もつれ", price: "+¥500〜" },
  { name: "部分カット", price: "+¥500〜" },
];

export const SERVICE_NOTE =
  "※ 毛量・体格・毛玉・もつれの状態により料金が変動する場合があります";

// ─────────────────────────────────────────────
// 画像
// ─────────────────────────────────────────────
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
