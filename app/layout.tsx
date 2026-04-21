import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SALON_INFO, SITE_URL } from "@/lib/data";

const OG_IMAGE = `${SITE_URL}/images/hero.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SALON_INFO.name}｜千葉・長生村のナチュラルトリミングサロン`,
    template: `%s | ${SALON_INFO.name}`,
  },
  description:
    "千葉県長生村のドッグトリミングサロン Pua Bliss（プアブリス）。はじめての子も、苦手な子も大歓迎。その子のペースに寄り添う、やさしいトリミングをお届けします。送迎サービスあり（要相談）。",
  keywords: [
    "トリミング",
    "ドッグサロン",
    "長生村",
    "千葉",
    "犬",
    "Pua Bliss",
    "プアブリス",
    "ナチュラル",
    "送迎",
  ],
  authors: [{ name: SALON_INFO.owner }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: SALON_INFO.name,
    title: `${SALON_INFO.name}｜千葉・長生村のナチュラルトリミングサロン`,
    description:
      "千葉県長生村のドッグトリミングサロン。はじめての子も、苦手な子も大歓迎。その子のペースに寄り添う、やさしいトリミングをお届けします。",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SALON_INFO.name} トリミングサロン`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SALON_INFO.name}｜千葉・長生村のナチュラルトリミングサロン`,
    description:
      "千葉県長生村のドッグトリミングサロン。はじめての子も、苦手な子も大歓迎。",
    images: [OG_IMAGE],
  },
  icons: {
    icon: "/images/logo.svg",
    apple: "/images/logo.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SITE_URL,
  name: SALON_INFO.name,
  description:
    "千葉県長生村のドッグトリミングサロン。はじめての子も、苦手な子も大歓迎。その子のペースに寄り添う、やさしいトリミングをお届けします。",
  url: SITE_URL,
  image: OG_IMAGE,
  address: {
    "@type": "PostalAddress",
    postalCode: "299-4331",
    addressRegion: "千葉県",
    addressLocality: "長生郡長生村",
    streetAddress: "信友1880-1",
    addressCountry: "JP",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [SALON_INFO.instagramUrl],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {children}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
