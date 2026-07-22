// components/Hero.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";

export default function Hero() {
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
    <section className="max-w-7xl mx-auto px-8 py-20 text-center md:text-left relative flex items-center justify-center min-h-[75vh] w-full z-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24"
      >
        {/* 左側：テキストエリア */}
        <div className="w-full md:w-[55%] flex flex-col items-start">
          <motion.div
            variants={itemVariants}
            className="inline-block border border-cyan-500/50 px-4 py-1 mb-8 text-xs tracking-widest text-cyan-400 font-mono"
          >
            SYSTEM_INIT: SUCCESS
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-tight select-text"
          >
            {/* STUDENT_ は通常の白文字 */}
            <span className="text-white uppercase block">STUDENT_</span>

            {/* IZUMI TEPPEI にダイナミックなグラデーションとチカチカ発光を適用 */}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-emerald-400 bg-[length:200%_auto] animate-colorFlickerGlow uppercase cursor-default py-2">
              IZUMI TEPPEI
              {/* ホバー時のグリッチ用 */}
              <span className="absolute inset-0 text-white opacity-0 group-hover:opacity-10 group-hover:animate-textGlitchSlow pointer-events-none">
                IZUMI TEPPEI
              </span>
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-cyan-100/60 max-w-2xl text-base md:text-lg leading-relaxed mb-12 font-mono"
          >
            デジタルとフィジカルの境界線を再定義する学生クリエイター。
            <br />
            テクノロジーと感性の融合により、未だ見ぬ体験を設計します。
          </motion.p>

          <motion.div variants={itemVariants}>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-4 uppercase tracking-widest hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center gap-4 mx-auto md:mx-0 font-mono text-sm">
              プロジェクトを見る <span>→</span>
            </button>
          </motion.div>
        </div>

        {/* 右側：Pixelated Canvas エリア */}
        <motion.div
          variants={itemVariants}
          className="hidden md:block md:w-[35%] ml-auto relative md:min-h-[500px] opacity-90 hover:opacity-100 transition-opacity duration-500"
        >
          <div className="absolute inset-0 w-full h-full">
            <PixelatedCanvas
              src="/img/jibunn.jpg"
              className="w-full h-full object-cover"
              cellSize={4}
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
