import "./globals.css";
import Header from "./comporment/Header";
import Footer from "./comporment/Footer";
import ScrollToTop from "./comporment/ScrollToTop"; // 1. インポートを追加

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-[#050505] text-[#FDFCFB] font-sans antialiased relative overflow-x-hidden">
        {/* 背景グリッド等は InteractiveGrid コンポーネントで行っている前提 */}
        <Header />

        <main className="pt-24 min-h-[90vh] relative z-10 w-full">
          {children}
        </main>

        {/* 2. フッターの直前に配置します（またはフッター内でも可） */}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
