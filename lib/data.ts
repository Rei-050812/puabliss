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
  instagramUrl: "https://www.instagram.com/pua_bliss/",
  instagramHandle: "@pua_bliss",
  nameIntro: "サロン名には わんちゃんと飼い主さまへの想いを込めています。",
  nameStory:
    "「Pua Bliss（プアブリス）」の\"Pua\"は「花」\"Bliss\"は「幸福・幸せ」を意味します。\n\n花のようにやさしく、美しく。\nわんちゃんにも、飼い主さまにも\n心地よく幸せな時間を過ごしていただきたい——\n\nそんな願いを込めて、この名前をつけました。",
  conceptText:
    "一頭一頭の性格やペースに合わせ\n無理のないトリミングを行っています。\n\n初めての子や、トリミングが苦手な子にも配慮し、\n安心して過ごせる環境を大切にしています。\n\nまた、ドッグショーへの参加を通じて\n技術向上にも努めています。",
  deliveryService: "送迎サービスあり（要相談）",
};

// ─────────────────────────────────────────────
// サービス料金（コース別・犬種別）
// ─────────────────────────────────────────────
export const SERVICES = [
  {
    id: "shampoo",
    name: "シャンプーコース",
    description: "",
    prices: [
      { breed: "チワワ", price: "¥3,700〜" },
      { breed: "ダックス", price: "¥4,000〜" },
      { breed: "プードル", price: "¥5,800〜" },
      { breed: "シュナウザー", price: "¥5,600〜" },
      { breed: "柴犬", price: "¥6,700〜" },
      { breed: "フレブル", price: "¥5,000〜" },
      { breed: "ラブラドール", price: "¥9,000〜" },
    ],
  },
  {
    id: "cut",
    name: "シャンプー・カットコース",
    description: "",
    prices: [
      { breed: "チワワ", price: "¥5,700〜" },
      { breed: "ダックス", price: "¥6,000〜" },
      { breed: "プードル", price: "¥8,500〜" },
      { breed: "シュナウザー", price: "¥8,300〜" },
      { breed: "ポメラニアン", price: "¥7,000〜" },
      { breed: "アメリカン・コッカー", price: "¥11,000〜" },
      { breed: "スタンダードプードル", price: "¥22,000〜" },
    ],
  },
];

export const OPTIONS = [
  { name: "歯磨き", price: "¥500〜" },
  { name: "ハーブパック", price: "¥1,300〜" },
  { name: "泡パック", price: "¥1,200〜" },
  { name: "ホワイトシャンプー", price: "¥500〜" },
  { name: "部分カット", price: "+¥500〜" },
  { name: "毛玉・もつれ", price: "+¥500〜" },
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
  src: "/images/logo.png",
  alt: "Pua Bliss ロゴ",
};
