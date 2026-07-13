import "./globals.css"; 

// 大文字・小文字をファイルの表記に完全に合わせます
import Header from "./comporment/Header";
import Footer from "./comporment/Footer"; // ← ここを大文字の「F」に修正！

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-[#000000] text-[#FDFCFB] font-sans selection:bg-[#00F0FF] selection:text-black antialiased relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none z-0" />
        
        <Header />
        
        <main className="p-6 md:p-12 max-w-7xl mx-auto min-h-[80vh] relative z-10">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}