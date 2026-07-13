"use client";

import "./globals.css";
import Link from "next/link";
import { useState, useEffect } from "react";

// アニメーション付きのカスタムメニューアイコン
const AnimatedMenuIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="relative w-7 h-7 flex flex-col justify-between items-center group">
      <span
        className={`h-0.5 w-full bg-[#00F0FF] rounded-lg transform transition-all duration-300 ease-in-out ${
          isOpen ? "rotate-45 translate-y-3.5" : ""
        }`}
      />
      <span
        className={`h-0.5 w-full bg-[#00F0FF] rounded-lg transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-0" : ""
        }`}
      />
      <span
        className={`h-0.5 w-full bg-[#00F0FF] rounded-lg transform transition-all duration-300 ease-in-out ${
          isOpen ? "-rotate-45 -translate-y-3" : ""
        }`}
      />
      <div className="absolute inset-[-4px] rounded-full group-hover:shadow-[0_0_15px_rgba(0,240,255,0.6)] transition-shadow duration-300 pointer-events-none" />
    </div>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // メニューが開いている時は背景のスクロールを固定
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <html lang="ja">
      <body className="min-h-screen bg-[#000000] text-[#FDFCFB] font-sans selection:bg-[#00F0FF] selection:text-black antialiased relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none z-0" />

        <header className="sticky top-0 z-50 flex items-center justify-between p-4 md:p-6 bg-[#000000]/90 backdrop-blur-sm border-b border-white/5 relative">
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold font-mono tracking-tighter text-[#00F0FF] leading-none hover:opacity-80 transition-opacity flex items-center gap-1 z-50"
            onClick={() => setIsMenuOpen(false)}
          >
            SYNTH_HRZN
          </Link>

          {/* デスクトップ用ナビゲーション */}
          <nav className="hidden md:flex gap-8 text-xs font-mono text-gray-400">
            <Link
              href="/works"
              className="hover:text-[#00F0FF] transition-colors"
            >
              作品一覧
            </Link>
            <Link
              href="/stack"
              className="hover:text-[#00F0FF] transition-colors"
            >
              技術スタック
            </Link>
            <Link
              href="/archive"
              className="hover:text-[#00F0FF] transition-colors"
            >
              アーカイブ
            </Link>
            <Link
              href="/labs"
              className="hover:text-[#00F0FF] transition-colors"
            >
              研究所
            </Link>
            <Link
              href="/about"
              className="hover:text-[#00F0FF] transition-colors"
            >
              自己紹介
            </Link>
          </nav>

          <button className="hidden md:block px-5 py-2 text-xs font-mono border border-[#00F0FF]/30 text-[#00F0FF] hover:border-[#00F0FF] hover:bg-[#00F0FF]/5 transition-all">
            お問い合わせ
          </button>

          {/* モバイル用メニューボタン */}
          <button
            className="md:hidden relative z-50 text-[#00F0FF]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <AnimatedMenuIcon isOpen={isMenuOpen} />
          </button>

          {/* モバイル用メニューオーバーレイ (完全な黒背景で文字被りを防ぐ) */}
          <div
            className={`md:hidden fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8 text-2xl font-mono tracking-widest text-[#FDFCFB] transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <Link
              href="/works"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-[#00F0FF] transition-colors"
            >
              作品一覧
            </Link>
            <Link
              href="/stack"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-[#00F0FF] transition-colors"
            >
              技術スタック
            </Link>
            <Link
              href="/archive"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-[#00F0FF] transition-colors"
            >
              アーカイブ
            </Link>
            <Link
              href="/labs"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-[#00F0FF] transition-colors"
            >
              研究所
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-[#00F0FF] transition-colors"
            >
              自己紹介
            </Link>
            <button className="px-8 py-3 mt-4 text-lg font-mono border border-[#00F0FF] text-[#00F0FF] hover:bg-[#00F0FF]/10 transition-all">
              お問い合わせ
            </button>
          </div>
        </header>

        <main className="p-6 md:p-12 max-w-7xl mx-auto min-h-[80vh] relative z-10">
          {children}
        </main>

        <footer className="p-8 text-center border-t border-white/5 mt-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-600 max-w-7xl mx-auto">
            <span className="text-[#2FF924] font-bold">
              ***SYNTHETIC_HORIZON***
            </span>
            <div className="flex gap-6">
              <Link href="/terminal" className="hover:text-gray-400">
                ターミナル
              </Link>
              <Link href="/logs" className="hover:text-gray-400">
                ログ
              </Link>
              <Link href="/network" className="hover:text-gray-400">
                ネットワーク
              </Link>
            </div>
            <span>©2024_SYNTHETIC_HORIZON_SYSTEMS</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
