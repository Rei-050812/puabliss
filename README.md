# Pua Bliss — トリミングサロン LP

ナチュラルトリミングサロン「Pua Bliss（プアブリス）」の1ページ完結ランディングページです。

## 技術スタック

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Deploy**: Vercel（静的エクスポート）

## ページ構成

| セクション | 概要 |
|---|---|
| Header | 固定ヘッダー・ハンバーガーメニュー |
| Hero | メインビジュアル・キャッチコピー・CTA |
| About | サロン紹介・内装写真・オーナーコメント |
| Service | コース別サービス・料金カード |
| Gallery | 施術後ギャラリー（3カラムグリッド） |
| Access | Googleマップ・店舗情報 |
| Contact | LINE・Instagram・電話 CTA |
| Footer | コピーライト |

## フォント

| 用途 | フォント |
|---|---|
| セクションタイトル | Dancing Script Bold（Google Fonts） |
| 日本語見出し（h1） | Noto Serif JP |
| 本文・UI全般 | Noto Sans JP |

## カラー

| 名称 | カラーコード |
|---|---|
| メインカラー（グリーン） | `#8aab8a` |
| ベージュ | `#e8dcc8` |
| オフホワイト | `#faf8f5` |
| ダークブラウン（テキスト） | `#3d2b1f` |

## セットアップ

```bash
npm install
npm run dev     # 開発サーバー起動 → http://localhost:3000
npm run build   # 本番ビルド（静的エクスポート）
```

## データ管理

コンテンツは `lib/data.ts` に集約しています。将来的な Sanity CMS 連携はこのファイルを置き換える形で対応します。

```
lib/data.ts
├── SALON_INFO      # 店舗情報（名前・住所・営業時間・SNS URLなど）
├── SERVICES        # サービス・料金一覧
├── GALLERY_IMAGES  # ギャラリー画像パス
├── INTERIOR_IMAGES # 内装画像パス
├── HERO_IMAGE      # ヒーロー画像パス
└── LOGO_IMAGE      # ロゴ画像パス
```

## 画像の差し替え

`public/images/` に同名ファイルを上書きするだけで差し替えできます。

| ファイル名 | 用途 |
|---|---|
| `hero.png` | ヒーロービジュアル（店舗外観） |
| `logo.svg` | ロゴ（仮：フラワーSVG） |
| `interior-01.png` | 内装①（サロン内観） |
| `interior-02.png` | 内装②（トリミング台） |
| `interior-03.png` | 内装③（ドッグラン） |
| `gallery-01.png` ～ `gallery-06.png` | ギャラリー施術写真 |

## 未確定情報（確定後に `lib/data.ts` を更新）

- [ ] 住所・郵便番号
- [ ] 電話番号
- [ ] LINE 公式アカウント URL
- [ ] Instagram アカウント名・URL
- [ ] Google マップ埋め込みコード（`components/Access.tsx` の iframe 部分）
- [ ] ロゴ画像（本番用）

## ディレクトリ構成

```
puabliss/
├── app/
│   ├── globals.css       # グローバルスタイル・Tailwind
│   ├── layout.tsx        # ルートレイアウト・メタデータ
│   └── page.tsx          # メインページ
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Gallery.tsx
│   ├── Access.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   └── data.ts           # コンテンツデータ定義
└── public/
    └── images/           # 画像ファイル
```
