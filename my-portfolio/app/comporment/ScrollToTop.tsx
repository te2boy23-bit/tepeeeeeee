"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // lucide-reactがインストールされている必要があります

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // 1. スクロール位置を検知してボタンを表示/非表示するロジック
  useEffect(() => {
    const toggleVisibility = () => {
      // 100px以上スクロールしたらボタンを表示
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // クリーンアップ関数
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // 2. 最上部へなめらかにスクロールする関数
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // なめらかに動かす
    });
  };

  return (
    <>
      {/* 画面左下に配置するフローティングボタン (Tailwind CSS) */}
      <div
        className={`fixed bottom-8 left-8 z-40 transition-all duration-300 ease-in-out ${
          isVisible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={scrollToTop}
          type="button"
          aria-label="トップへ戻る"
          className="group relative flex flex-col items-center justify-center w-20 h-20 rounded-full border border-[#00F0FF]/30 bg-[#050505]/60 backdrop-blur-sm transition-all duration-300 hover:border-[#00F0FF] hover:bg-[#00F0FF]/10 hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]"
        >
          {/* 見本にあるサイバーな発光外輪エフェクト */}
          <div className="absolute inset-[-2px] rounded-full border-2 border-transparent group-hover:border-[#00F0FF]/50 group-hover:animate-pulse pointer-events-none" />

          {/* 中央の矢印アイコン (lucide-react) とテキスト */}
          <ArrowUp
            size={28}
            className="text-[#00F0FF] transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_#00F0FF]"
          />
          <span className="mt-1.5 text-[10px] font-mono font-bold tracking-widest text-[#00F0FF]">
            TOPへ
          </span>
        </button>
      </div>
    </>
  );
}
