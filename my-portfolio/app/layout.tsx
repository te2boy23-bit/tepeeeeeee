import "./globals.css";
import Header from "./comporment/Header";
import Footer from "./comporment/Footer";
import InteractiveGrid from "./comporment/InteractiveGrid"; // 💡 ここが外れていないか確認
import ScrollToTop from "./comporment/ScrollToTop";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body className="min-h-screen bg-[#050505] text-[#FDFCFB] font-sans antialiased relative overflow-x-hidden select-none">
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
