"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

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

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const navItems = [
    { href: "/works", label: "作品一覧" },
    { href: "/stack", label: "技術スタック" },
    { href: "/archive", label: "アーカイブ" },
    { href: "/labs", label: "研究所" },
    { href: "/about", label: "自己紹介" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-[#050505]/80 backdrop-blur-md border-b border-[#00F0FF]/10">
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold font-mono tracking-tighter text-[#00F0FF] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] z-50"
          onClick={() => setIsMenuOpen(false)}
        >
          SYNTH_HRZN
        </Link>

        <nav className="hidden md:flex gap-10 text-xs font-mono tracking-widest text-gray-400">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
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

        <button className="hidden md:block px-6 py-2 text-xs font-mono border border-[#00F0FF]/40 text-[#00F0FF] hover:border-[#00F0FF] hover:bg-[#00F0FF]/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
          お問い合わせ
        </button>

        <button
          className="md:hidden relative z-50 text-[#00F0FF]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <AnimatedMenuIcon isOpen={isMenuOpen} />
        </button>
      </header>

      <div
        className={`md:hidden fixed inset-0 z-40 bg-[#050505] flex flex-col items-center justify-center gap-8 text-xl font-mono tracking-widest text-[#FDFCFB] transition-all duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            className={`transition-colors ${pathname === item.href ? "text-[#00F0FF] font-bold" : "hover:text-[#00F0FF]"}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
