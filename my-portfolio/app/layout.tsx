import "./globals.css";
import Header from "./comporment/Header";
import InteractiveGrid from "./comporment/InteractiveGrid";
import Footer from "./comporment/Footer"; // 💡 ここを大文字の「F」にする！

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className="min-h-screen bg-[#050505] text-[#FDFCFB] font-sans antialiased relative overflow-x-hidden select-none">
        <InteractiveGrid />
        <Header />
        <main className="pt-24 min-h-[90vh] relative z-10 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
