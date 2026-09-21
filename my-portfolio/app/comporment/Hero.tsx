// components/Hero.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import { useLanguage } from "../context/LanguageContext";
import MobileCyberAvatar from "./MobileCyberAvatar";

export default function Hero() {
  const { t } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8 md:py-20 text-left relative flex items-center justify-center min-h-[60vh] md:min-h-[75vh] w-full z-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-24"
      >
        {/* 左側：テキストエリア */}
        <div className="w-full md:w-[58%] flex flex-col items-start">
          <div className="flex items-center justify-between w-full mb-6 md:mb-8">
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 sm:gap-3 flex-wrap"
            >
              <div className="inline-flex items-center gap-2 border border-[#00F0FF]/50 bg-[#00F0FF]/10 px-3 py-1 text-[11px] sm:text-xs tracking-widest text-[#00F0FF] font-mono shadow-[0_0_12px_rgba(0,240,255,0.2)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span>
                </span>
                PORTFOLIO // 2026
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] sm:text-[11px] font-mono text-emerald-400 border border-emerald-500/30 bg-emerald-950/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                ONLINE // READY
              </div>
            </motion.div>

            {/* モバイル用インタラクティブ・サイバーホログラムアバター */}
            <div className="md:hidden flex-shrink-0 ml-3">
              <MobileCyberAvatar size={74} showPrompt={true} />
            </div>
          </div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 md:mb-6 leading-tight select-text w-full break-words"
          >
            {/* STUDENT_ / CREATOR_ */}
            <span className="text-white uppercase block text-xl sm:text-3xl md:text-5xl lg:text-6xl mb-1">
              {t("STUDENT_", "CREATOR_")}
            </span>

            {/* IZUMI TEPPEI にダイナミックなグラデーションとチカチカ発光を適用 */}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-emerald-400 bg-[length:200%_auto] animate-colorFlickerGlow uppercase cursor-default py-1 md:py-2">
              IZUMI TEPPEI
              {/* ホバー時のグリッチ用 */}
              <span className="absolute inset-0 text-white opacity-0 group-hover:opacity-10 group-hover:animate-textGlitchSlow pointer-events-none">
                IZUMI TEPPEI
              </span>
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-cyan-100/70 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8 font-mono"
          >
            {t(
              "デジタルとフィジカルの境界線を再定義する学生クリエイター。テクノロジーと感性の融合により、未だ見ぬ体験を設計します。",
              "Student Creator & Engineer redefining digital experiences. Crafting innovative web applications through the fusion of technology and design.",
            )}
          </motion.p>

          {/* フローティング・テックタグ */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2 mb-8 md:mb-10 font-mono text-[11px]"
          >
            {[
              "NEXT.JS 15",
              "TYPESCRIPT",
              "TAILWIND CSS",
              "FRAMER MOTION",
              "CREATIVE TECH",
            ].map((tag, idx) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-2.5 py-1 bg-[#0A0A0A] border border-white/10 text-gray-400 hover:border-[#00F0FF] hover:text-[#00F0FF] hover:shadow-[0_0_10px_rgba(0,240,255,0.25)] transition-all cursor-default"
                style={{
                  animationDelay: `${idx * 0.2}s`,
                }}
              >
                + {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* クイックアクションボタン */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 flex-wrap"
          >
            <a
              href="#works"
              className="group relative inline-flex items-center gap-2 px-6 py-3 bg-[#00F0FF] text-[#050505] font-mono font-bold text-xs tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]"
            >
              <span>{t("作品を見る", "EXPLORE WORKS")}</span>
              <span className="transform group-hover:translate-y-0.5 transition-transform duration-300">
                ↓
              </span>
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 border border-white/20 bg-[#050505]/60 backdrop-blur-sm text-white font-mono text-xs tracking-widest hover:border-[#00F0FF] hover:text-[#00F0FF] hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
            >
              <span>{t("お問い合わせ", "GET IN TOUCH")}</span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
          </motion.div>
        </div>

        {/* 右側：Pixelated Canvas エリア + サイバーHUDコーナー */}
        <motion.div
          variants={itemVariants}
          className="hidden md:block md:w-[35%] ml-auto relative md:min-h-[500px] opacity-90 hover:opacity-100 transition-opacity duration-500 group"
        >
          {/* サイバーHUDコーナーフレーム */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#00F0FF] z-20 transition-all duration-300 group-hover:w-6 group-hover:h-6 shadow-[0_0_8px_#00F0FF]" />
          <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#00F0FF] z-20 transition-all duration-300 group-hover:w-6 group-hover:h-6 shadow-[0_0_8px_#00F0FF]" />
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#00F0FF] z-20 transition-all duration-300 group-hover:w-6 group-hover:h-6 shadow-[0_0_8px_#00F0FF]" />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#00F0FF] z-20 transition-all duration-300 group-hover:w-6 group-hover:h-6 shadow-[0_0_8px_#00F0FF]" />

          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <PixelatedCanvas
              src="/img/jibunn.jpg"
              className="w-full h-full object-cover"
              cellSize={5}
              dotScale={0.85}
              tintColor="#00F0FF"
              tintStrength={0.25}
              interactive={true}
              distortionMode="swirl"
              distortionStrength={6}
              responsive={true}
              backgroundColor=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none mix-blend-overlay"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
