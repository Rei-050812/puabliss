import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pua Bliss｜ナチュラルトリミングサロン",
  description: "大切な家族に、花のようなやさしさを。Pua Bliss（プアブリス）はナチュラルにこだわったドッグトリミングサロンです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
