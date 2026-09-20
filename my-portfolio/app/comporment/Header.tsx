"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import { Globe, Coffee } from "lucide-react";

const AnimatedMenuIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="relative w-7 h-7 flex flex-col justify-between items-center group">
      <span
        className={`h-0.5 w-full bg-[#00F0FF] rounded-lg transform transition-all duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-3.5" : ""}`}
      />
      <span
        className={`h-0.5 w-full bg-[#00F0FF] rounded-lg transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`}
      />
      <span
        className={`h-0.5 w-full bg-[#00F0FF] rounded-lg transform transition-all duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-3" : ""}`}
      />
    </div>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const navItems = [
    { href: "/", label: t("トップ", "TOP") },
    { href: "/works", label: t("作品一覧", "WORKS") },
    { href: "/about", label: t("自己紹介", "ABOUT") },
    { href: "/contact", label: t("お問い合わせ", "CONTACT") },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-[#00F0FF]/10">
        <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between px-6 md:px-16 py-5">
          {/* ロゴ */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold font-mono tracking-tighter text-[#00F0FF] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] z-50"
            onClick={() => setIsMenuOpen(false)}
          >
            IZUMI_TEPPEI
          </Link>

          {/* デスクトップ用ナビゲーション */}
          <nav className="hidden md:flex items-center gap-10 text-xs font-mono tracking-widest text-gray-400">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative py-1 transition-all duration-300 ${isActive ? "text-[#00F0FF] font-bold" : "hover:text-[#00F0FF] hover:drop-shadow-[0_0_5px_#00F0FF]"}`}
                  style={
                    isActive
                      ? { textShadow: "0 0 8px rgba(0, 240, 255, 0.8)" }
                      : undefined
                  }
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* 右側：Buy Me a Coffee & 言語切り替え & お問い合わせ */}
          <div className="flex items-center gap-3">
            {/* Buy Me a Coffee 支援ボタン */}
            <a
              href="https://buymeacoffee.com/tepeee"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#FFDD00]/40 bg-[#FFDD00]/10 text-xs font-mono text-[#FFDD00] hover:bg-[#FFDD00]/20 hover:border-[#FFDD00] hover:shadow-[0_0_12px_rgba(255,221,0,0.3)] transition-all"
              title="Buy Me a Coffee (@tepeee)"
            >
              <Coffee size={13} />
              <span className="hidden sm:inline font-bold">
                {t("支援する", "Support")}
              </span>
            </a>

            {/* 言語切り替えトグル */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#00F0FF]/30 bg-[#00F0FF]/10 text-xs font-mono text-[#00F0FF] hover:bg-[#00F0FF]/20 hover:border-[#00F0FF] transition-all cursor-pointer"
              title={t("言語を切り替える (Switch Language)", "Switch Language")}
            >
              <Globe size={13} />
              <span
                className={
                  lang === "ja" ? "font-bold text-white" : "opacity-60"
                }
              >
                JP
              </span>
              <span className="opacity-40">/</span>
              <span
                className={
                  lang === "en" ? "font-bold text-white" : "opacity-60"
                }
              >
                EN
              </span>
            </button>

            {/* お問い合わせボタン */}
            <Link
              href="/contact"
              className="hidden lg:block px-5 py-2 text-xs font-mono border border-[#00F0FF]/40 text-[#00F0FF] hover:border-[#00F0FF] hover:bg-[#00F0FF]/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all"
            >
              {t("お問い合わせ", "CONTACT")}
            </Link>

            {/* モバイルメニューボタン */}
            <button
              className="md:hidden relative z-50 text-[#00F0FF]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <AnimatedMenuIcon isOpen={isMenuOpen} />
            </button>
          </div>
        </div>
      </header>

      {/* モバイルメニューオーバーレイ */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-[#050505] flex flex-col items-center justify-center gap-7 text-lg font-mono tracking-widest text-[#FDFCFB] transition-all duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`transition-colors ${isActive ? "text-[#00F0FF] font-bold" : "hover:text-[#00F0FF]"}`}
            >
              {item.label}
            </Link>
          );
        })}

        <a
          href="https://buymeacoffee.com/tepeee"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center gap-2 px-6 py-2.5 rounded border border-[#FFDD00]/50 bg-[#FFDD00]/10 text-sm font-mono text-[#FFDD00]"
        >
          <Coffee size={16} />
          <span>
            {t("Buy Me a Coffee で支援する", "Support on Buy Me a Coffee")}
          </span>
        </a>

        <button
          onClick={() => {
            toggleLang();
            setIsMenuOpen(false);
          }}
          className="mt-2 flex items-center gap-2 px-5 py-2 rounded border border-[#00F0FF]/40 bg-[#00F0FF]/10 text-sm font-mono text-[#00F0FF]"
        >
          <Globe size={16} />
          <span>
            {lang === "ja" ? "Switch to English" : "日本語に切り替え"}
          </span>
        </button>
      </div>
    </>
  );
}
