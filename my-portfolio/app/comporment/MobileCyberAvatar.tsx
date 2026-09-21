"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileCyberAvatarProps {
  className?: string;
  size?: number; // Size in pixels, defaults to 84 (mobile hero)
  showPrompt?: boolean;
}

const THEMES = [
  {
    name: "CYAN",
    color: "#00F0FF",
    glow: "rgba(0, 240, 255, 0.4)",
    tag: "BIO_SYNC: 100%",
    subtitle: "SYSTEM ONLINE",
  },
  {
    name: "PURPLE",
    color: "#BC13FE",
    glow: "rgba(188, 19, 254, 0.45)",
    tag: "OVERDRIVE: ACTIVE",
    subtitle: "CREATIVE BOOST",
  },
  {
    name: "MATRIX",
    color: "#00FF66",
    glow: "rgba(0, 255, 102, 0.4)",
    tag: "CODE_MATRIX: RUNNING",
    subtitle: "FULLSTACK ENGINE",
  },
  {
    name: "AMBER",
    color: "#FFDD00",
    glow: "rgba(255, 221, 0, 0.45)",
    tag: "TARGET: TEPPEI IZUMI",
    subtitle: "READY FOR PROJECTS",
  },
];

export default function MobileCyberAvatar({
  className = "",
  size = 88,
  showPrompt = true,
}: MobileCyberAvatarProps) {
  const [themeIdx, setThemeIdx] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [tapCount, setTapCount] = useState(0);
  const [showTag, setShowTag] = useState(false);

  const currentTheme = THEMES[themeIdx];

  const handleTap = () => {
    // グリッチ演出をトリガー
    setIsGlitching(true);
    setTapCount((prev) => prev + 1);
    setShowTag(true);

    // テーマ色を順繰りに変更
    setThemeIdx((prev) => (prev + 1) % THEMES.length);

    setTimeout(() => {
      setIsGlitching(false);
    }, 450);

    // 2.5秒後に吹き出しを自然に閉じる
    setTimeout(() => {
      setShowTag(false);
    }, 2800);
  };

  return (
    <div
      className={`relative flex flex-col items-center select-none ${className}`}
    >
      {/* タップ時に出現するサイバーHUDメッセージ */}
      <AnimatePresence>
        {showTag && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.85 }}
            animate={{ opacity: 1, y: -4, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 z-30 pointer-events-none whitespace-nowrap"
          >
            <div
              className="px-2.5 py-1 rounded bg-[#050505]/95 backdrop-blur-md border text-[10px] font-mono tracking-wider shadow-lg flex items-center gap-1.5"
              style={{
                borderColor: currentTheme.color,
                color: currentTheme.color,
                boxShadow: `0 0 14px ${currentTheme.glow}`,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-ping"
                style={{ backgroundColor: currentTheme.color }}
              />
              <span className="font-bold">{currentTheme.tag}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* インタラクティブ・アバター本体 */}
      <motion.div
        whileTap={{ scale: 0.88, rotate: tapCount % 2 === 0 ? 3 : -3 }}
        whileHover={{ scale: 1.05 }}
        onClick={handleTap}
        className="relative cursor-pointer group animate-subtle-float"
        style={{ width: size, height: size }}
        title="タップしてサイバーモード変更"
      >
        {/* 1. 外側：回転するサイバーHUDリング */}
        <div
          className="absolute -inset-2.5 rounded-full border border-dashed opacity-75 animate-spin-slow pointer-events-none"
          style={{
            borderColor: currentTheme.color,
            filter: `drop-shadow(0 0 6px ${currentTheme.glow})`,
          }}
        />

        {/* 2. 内側：逆回転するHUD目盛りリング */}
        <div
          className="absolute -inset-1 rounded-full border border-dotted opacity-60 animate-spin-reverse-slow pointer-events-none"
          style={{
            borderColor: currentTheme.color,
          }}
        />

        {/* 3. サイバーHUDコーナー（四隅の近未来ブラケット） */}
        <span
          className="absolute -top-1.5 -left-1.5 text-[9px] font-mono font-bold leading-none pointer-events-none transition-colors duration-300"
          style={{ color: currentTheme.color }}
        >
          ┌
        </span>
        <span
          className="absolute -top-1.5 -right-1.5 text-[9px] font-mono font-bold leading-none pointer-events-none transition-colors duration-300"
          style={{ color: currentTheme.color }}
        >
          ┐
        </span>
        <span
          className="absolute -bottom-1.5 -left-1.5 text-[9px] font-mono font-bold leading-none pointer-events-none transition-colors duration-300"
          style={{ color: currentTheme.color }}
        >
          └
        </span>
        <span
          className="absolute -bottom-1.5 -right-1.5 text-[9px] font-mono font-bold leading-none pointer-events-none transition-colors duration-300"
          style={{ color: currentTheme.color }}
        >
          ┘
        </span>

        {/* 4. メイン画像フレーム */}
        <div
          className={`w-full h-full rounded-xl overflow-hidden border-2 bg-[#0A0A0A] relative transition-all duration-300 ${
            isGlitching ? "animate-cyber-glitch" : ""
          }`}
          style={{
            borderColor: currentTheme.color,
            boxShadow: `0 0 16px ${currentTheme.glow}`,
          }}
        >
          <img
            src="/img/jibunn.jpg"
            alt="泉 哲平"
            className="w-full h-full object-cover select-none pointer-events-none"
          />

          {/* ホログラム走査レーザー線（常時ゆっくり走査） */}
          <div
            className="absolute inset-x-0 h-4 pointer-events-none animate-hologram-sweep"
            style={{
              background: `linear-gradient(to bottom, transparent, ${currentTheme.color}55, transparent)`,
            }}
          />

          {/* CRTスキャンライン・グリッドオーバーレイ */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.6) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.04), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.04))",
              backgroundSize: "100% 3px, 6px 100%",
            }}
          />

          {/* 下部サイバーグラデーション */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(to top, ${currentTheme.color}30, transparent 65%)`,
            }}
          />

          {/* 右下のLIVE点滅インジケータ */}
          <div className="absolute bottom-1 right-1 flex items-center gap-1 bg-[#050505]/90 px-1 py-0.2 rounded border border-white/10 pointer-events-none">
            <span
              className="w-1.5 h-1.5 rounded-full animate-ping"
              style={{ backgroundColor: currentTheme.color }}
            />
            <span
              className="text-[7px] font-mono font-bold"
              style={{ color: currentTheme.color }}
            >
              REC
            </span>
          </div>
        </div>
      </motion.div>

      {/* タップ推奨のミニサイバーバッジ */}
      {showPrompt && (
        <motion.div
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-2 text-[9px] font-mono tracking-widest flex items-center gap-1 cursor-pointer"
          onClick={handleTap}
        >
          <span style={{ color: currentTheme.color }}>⚡</span>
          <span
            className="transition-colors duration-300 underline underline-offset-2 decoration-dotted"
            style={{ color: currentTheme.color }}
          >
            TAP TO SCAN
          </span>
        </motion.div>
      )}
    </div>
  );
}
