"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  href?: string;
  onClick?: () => void;
}

export default function Logo({
  className = "",
  size = "md",
  showText = true,
  href = "/",
  onClick,
}: LogoProps) {
  // サイズごとの寸法設定
  const dimensions = {
    sm: { icon: 30, text: "text-sm sm:text-base", sub: "text-[8px]" },
    md: { icon: 38, text: "text-base sm:text-lg md:text-xl", sub: "text-[9px]" },
    lg: { icon: 52, text: "text-xl sm:text-2xl md:text-3xl", sub: "text-[11px]" },
  }[size];

  const content = (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 sm:gap-3 group cursor-pointer select-none ${className}`}
    >
      {/* サイバー幾何学エンブレム（TIモノグラム） */}
      <div
        className="relative flex items-center justify-center flex-shrink-0"
        style={{ width: dimensions.icon, height: dimensions.icon }}
      >
        {/* 背景の発光ネオンオーラ */}
        <div className="absolute inset-0 bg-[#00F0FF]/25 rounded-full blur-md group-hover:bg-[#00F0FF]/50 group-hover:blur-lg transition-all duration-300" />

        <img
          src="/img/logo-cyber.png"
          alt="IZUMI TEPPEI Emblem Logo"
          className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_10px_rgba(0,240,255,0.7)] group-hover:drop-shadow-[0_0_16px_rgba(0,240,255,1)] group-hover:scale-105 transition-all duration-300"
        />
      </div>

      {/* ロゴテキスト */}
      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1">
            <span
              className={`${dimensions.text} font-black font-mono tracking-tight text-white group-hover:text-[#00F0FF] transition-colors duration-300 drop-shadow-[0_0_8px_rgba(0,240,255,0.3)]`}
            >
              IZUMI
            </span>
            <span
              className={`${dimensions.text} font-black font-mono tracking-tight text-[#00F0FF] group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]`}
            >
              TEPPEI
            </span>
          </div>
          <span
            className={`${dimensions.sub} font-mono tracking-[0.28em] text-[#BC13FE] group-hover:text-[#00FF66] transition-colors duration-300 font-semibold mt-0.5`}
          >
            // CREATIVE_ENGINEER
          </span>
        </div>
      )}
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}

