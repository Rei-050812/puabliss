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
| Header | 固定ヘッダー・ハンバーガーメニュー・LINEボタン |
| Hero | メインビジュアル・キャッチコピー・予約CTA |
| About | サロン紹介・内装写真・オーナーコメント |
| Service | コース別料金（犬種別）・オプション |
| Gallery | 施術後ギャラリー（3カラムグリッド） |
| Access | Googleマップ・店舗情報 |
| Registration | 第一種動物取扱業登録（法定表示事項） |
| Contact | LINE・Instagram・電話 CTA |
| Footer | コピーライト |

## フォント

`next/font/google` でビルド時にバンドルされます（外部CDN不要）。

| 用途 | フォント |
|---|---|
| セクションタイトル | Dancing Script Bold |
| 日本語見出し（h1/h2） | Noto Serif JP |
| 本文・UI全般 | Noto Sans JP |

## カラー

| 名称 | 値 |
|---|---|
| メインカラー（グリーン） | `texture-green.jpeg`（ヘッダー・サービスセクション背景） |
| ベージュ | `texture-beige.jpg`（About・Gallery・Access・Registrationセクション背景） |
| オフホワイト | `#faf8f5` |
| ダークテキスト | `#525041` |
| アクセント（ベース） | `#1e5c35` |

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
├── SITE_URL        # サイトURL（デプロイ後に更新）
├── SALON_INFO      # 店舗情報（名前・住所・営業時間・SNS URLなど）
├── BREEDS          # 対応犬種一覧
├── SERVICES        # コース・料金一覧（犬種別）
├── OPTIONS         # オプションメニュー
├── SERVICE_NOTE    # 料金注意書き
├── GALLERY_IMAGES  # ギャラリー画像パス
├── INTERIOR_IMAGES # 内装画像パス
├── HERO_IMAGE      # ヒーロー画像パス
├── LOGO_IMAGE      # ロゴ画像パス
└── ANIMAL_HANDLER_REGISTRATION # 第一種動物取扱業登録（法定表示事項）
```

## 画像の差し替え

`public/images/` に同名ファイルを上書きするだけで差し替えできます。

| ファイル名 | 用途 |
|---|---|
| `logo.png` | ヘッダーロゴ（犬イラスト＋Pua Bliss文字・透過PNG） |
| `texture-green.jpeg` | グリーンスエードテクスチャ（ヘッダー・サービスセクション背景） |
| `texture-beige.jpg` | ベージュテクスチャ（About・Gallery・Access・Registrationセクション背景） |
| `images/hero.png` | ヒーロービジュアル（店舗外観） |
| `images/og-image.png` | OGP画像（SNSシェア時のサムネイル・1200×630px） |
| `images/logo.svg` | ファビコン（花のアイコン） |
| `images/interior-01.png` | 内装①（サロン内観） |
| `images/interior-02.png` | 内装②（トリミング台） |
| `images/interior-03.png` | 内装③（ドッグラン） |
| `images/gallery-01.png` ～ `gallery-06.png` | ギャラリー施術写真 |

## SEO 設定

`app/layout.tsx` にてすべて設定済みです。

| 項目 | 内容 |
|---|---|
| `<title>` | Pua Bliss｜千葉・長生村のナチュラルトリミングサロン |
| `description` | 地名・特徴・送迎を含む検索向け説明文 |
| `keywords` | トリミング・長生村・千葉・犬 など |
| OGP（og:） | SNSシェア時に og-image.png・タイトル・説明を表示 |
| Twitter Card | `summary_large_image`（大きな画像カード） |
| JSON-LD | LocalBusiness 構造化データ（Googleが店舗情報として認識） |
| robots | index・follow（全クローラー許可） |
| favicon | `/images/logo.svg`（花のアイコン） |
| `robots.txt` | `public/robots.txt` |
| `sitemap.xml` | `public/sitemap.xml` |

### デプロイ後の対応

1. Google Search Console にサイトを登録してサイトマップを送信

## 未対応（確定後に更新）

- [ ] 電話番号（確定後 `SALON_INFO.tel` に入力）

## ディレクトリ構成

```
puabliss/
├── app/
│   ├── globals.css       # グローバルスタイル・Tailwind
│   ├── layout.tsx        # ルートレイアウト・SEOメタデータ・JSON-LD
│   └── page.tsx          # メインページ（全セクション結合）
├── components/
│   ├── Header.tsx        # 固定ヘッダー・SP対応ドロワー
│   ├── Hero.tsx          # ヒーローセクション
│   ├── About.tsx         # サロン紹介
│   ├── Services.tsx      # サービス料金（犬種別テーブル）
│   ├── Gallery.tsx       # 施術ギャラリー
│   ├── Access.tsx        # Googleマップ・店舗情報
│   ├── Registration.tsx  # 第一種動物取扱業登録（法定表示事項）
│   ├── Contact.tsx       # 予約・問い合わせCTA
│   └── Footer.tsx        # フッター
├── lib/
│   └── data.ts           # コンテンツデータ定義（CMS連携時に置き換え）
├── vercel.json           # Vercel セキュリティヘッダー設定
└── public/
    ├── images/           # 画像ファイル
    ├── logo.png          # ヘッダーロゴ（透過PNG）
    ├── texture-green.jpeg # グリーンテクスチャ背景
    ├── texture-beige.jpg  # ベージュテクスチャ背景
    ├── robots.txt        # クローラー設定
    └── sitemap.xml       # サイトマップ
```
