import "./globals.css";
import Header from "./comporment/Header";
import Footer from "./comporment/Footer";
import InteractiveGrid from "./comporment/InteractiveGrid"; // 💡 ここが外れていないか確認
import ScrollToTop from "./comporment/ScrollToTop";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

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
      <body className="min-h-screen bg-[#050505] text-[#FDFCFB] font-sans antialiased relative overflow-x-hidden select-none">
        {/* 💡 サイト全体を覆う固定方眼紙（グリッド）背景を追加 */}
        {/* 見づらかったので不透明度を opacity-10 から opacity-25 に上げました */}
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

        {/* 1. マウス追従エフェクト（これが最上部にある必要があります） */}
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
      </body>
    </html>
  );
}
