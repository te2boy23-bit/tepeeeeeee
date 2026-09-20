import "./globals.css";
import Header from "./comporment/Header";
import Footer from "./comporment/Footer";
import InteractiveGrid from "./comporment/InteractiveGrid";
import ScrollToTop from "./comporment/ScrollToTop";
import { LanguageProvider } from "./context/LanguageContext";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

import type { Viewport, Metadata } from "next";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tepeeeeeee.vercel.app"),
  title: "泉 哲平 // ポートフォリオ | TEPPEI IZUMI",
  description:
    "泉 哲平のポートフォリオサイトです。制作したWebアプリケーションやプロフィール、技術スタックを掲載しています。",
  openGraph: {
    title: "泉 哲平 // ポートフォリオ | TEPPEI IZUMI",
    description:
      "泉 哲平のポートフォリオサイトです。制作したWebアプリケーションやプロフィール、技術スタックを掲載しています。",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/img/jibunn.jpg",
        width: 1200,
        height: 630,
        alt: "泉 哲平 ポートフォリオ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "泉 哲平 // ポートフォリオ | TEPPEI IZUMI",
    description:
      "泉 哲平のポートフォリオサイトです。制作したWebアプリケーションやプロフィール、技術スタックを掲載しています。",
    images: ["/img/jibunn.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={cn("scroll-smooth", "font-sans", geist.variable)}
    >
      <body className="min-h-screen bg-[#050505] text-[#FDFCFB] font-sans antialiased relative overflow-x-hidden">
        <LanguageProvider>
          {/* 💡 サイト全体を覆う固定方眼紙（グリッド）背景 */}
          <div className="fixed inset-0 z-0 opacity-25 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="global-grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#global-grid)" />
            </svg>
          </div>

          {/* 1. マウス追従エフェクト */}
          <InteractiveGrid />

          {/* 2. ヘッダー要素 */}
          <Header />

          {/* 3. メインコンテンツ */}
          <main className="pt-24 min-h-[90vh] relative z-10 w-full">
            {children}
          </main>

          {/* 4. 左下のスクロールボタン */}
          <ScrollToTop />

          {/* 5. フッター要素 */}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
