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
      {/* 画面右下（モバイル）/ 左下（デスクトップ）に配置するフローティングボタン */}
      <div
        className={`fixed bottom-5 right-5 sm:bottom-8 sm:left-8 z-40 transition-all duration-300 ease-in-out ${
          isVisible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={scrollToTop}
          type="button"
          aria-label="トップへ戻る"
          className="group relative flex flex-col items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-[#00F0FF]/40 bg-[#050505]/80 backdrop-blur-md transition-all duration-300 hover:border-[#00F0FF] hover:bg-[#00F0FF]/15 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] shadow-[0_0_10px_rgba(0,240,255,0.15)] cursor-pointer"
        >
          {/* サイバーな発光外輪エフェクト */}
          <div className="absolute inset-[-2px] rounded-full border border-transparent group-hover:border-[#00F0FF]/50 group-hover:animate-pulse pointer-events-none" />

          {/* 中央の矢印アイコン (lucide-react) とテキスト */}
          <ArrowUp
            size={18}
            className="text-[#00F0FF] transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_#00F0FF] sm:w-5 sm:h-5"
          />
          <span className="mt-0.5 text-[8px] sm:text-[9px] font-mono font-bold tracking-widest text-[#00F0FF]">
            TOP
          </span>
        </button>
      </div>
    </>
  );
}
