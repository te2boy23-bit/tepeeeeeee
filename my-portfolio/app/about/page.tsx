// app/about/page.tsx (または components/About.tsx)
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      // 💡 "easeOut" に as const をつけて型エラーを防ぎます
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-12 z-15 relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full"
      >
        {/* セクションタイトル */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-4 mb-12"
        >
          <div className="flex items-center space-x-2 text-xs font-mono tracking-[0.2em] text-[#BC13FE]">
            <span className="inline-block w-2 h-2 bg-[#BC13FE] animate-pulse"></span>
            <span>SECTION_02</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#BC13FE] drop-shadow-[0_0_10px_rgba(188,19,254,0.4)]">
            IDENTITY_PROFILE
          </h2>
          <div className="h-px bg-gradient-to-r from-[#BC13FE]/50 to-transparent flex-grow"></div>
        </motion.div>

        {/* カードグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 所属 */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-[#050505] p-8 border border-white/10 border-l-[#BC13FE] hover:border-[#BC13FE] transition-all duration-300 hover:shadow-[0_0_20px_rgba(188,19,254,0.15)] overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#BC13FE]/5 rounded-bl-full pointer-events-none transition-all duration-300 group-hover:bg-[#BC13FE]/10"></div>
            <div className="text-[10px] tracking-widest font-mono text-gray-500 mb-4 flex items-center justify-between">
              <span>// AFFILIATION</span>
              <span className="text-[#BC13FE] opacity-0 group-hover:opacity-100 transition-opacity">
                01
              </span>
            </div>
            <div className="font-bold text-lg md:text-xl text-white group-hover:text-[#BC13FE] transition-colors leading-snug">
              AIプログラミング＆CGクリエイター科
            </div>
            <p className="text-sm text-gray-400 mt-4 leading-relaxed font-mono">
              AIとグラフィックスの技術を学び、実用的なシステムとクリエイティブな表現の融合を追求しています。
            </p>
          </motion.div>

          {/* 注力分野 */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-[#050505] p-8 border border-white/10 border-l-[#00F0FF] hover:border-[#00F0FF] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#00F0FF]/5 rounded-bl-full pointer-events-none transition-all duration-300 group-hover:bg-[#00F0FF]/10"></div>
            <div className="text-[10px] tracking-widest font-mono text-gray-500 mb-4 flex items-center justify-between">
              <span>// EXPERTISE</span>
              <span className="text-[#00F0FF] opacity-0 group-hover:opacity-100 transition-opacity">
                02
              </span>
            </div>
            <div className="font-bold text-lg md:text-xl text-[#00F0FF] drop-shadow-[0_0_8px_rgba(0,240,255,0.4)] leading-tight">
              Webデザイン / UI/UX / フロントエンド / バックエンド / DB
            </div>
            <ul className="text-sm text-gray-400 mt-4 space-y-2 font-mono">
              <li className="flex items-center space-x-2 group-hover:text-gray-300 transition-colors">
                <span className="text-[#00F0FF]">&gt;</span>
                <span>設計から実装・DB構築まで網羅</span>
              </li>
            </ul>
          </motion.div>

          {/* ビジョン */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-[#050505] p-8 border border-white/10 border-l-[#BC13FE] hover:border-[#BC13FE] transition-all duration-300 hover:shadow-[0_0_20px_rgba(188,19,254,0.15)] overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#BC13FE]/5 rounded-bl-full pointer-events-none transition-all duration-300 group-hover:bg-[#BC13FE]/10"></div>
            <div className="text-[10px] tracking-widest font-mono text-gray-500 mb-4 flex items-center justify-between">
              <span>// VISION</span>
              <span className="text-[#BC13FE] opacity-0 group-hover:opacity-100 transition-opacity">
                03
              </span>
            </div>
            <div className="font-bold text-lg md:text-xl text-[#BC13FE] drop-shadow-[0_0_8px_rgba(188,19,254,0.4)] leading-tight">
              感動の共有と課題解決
            </div>
            <p className="text-sm text-gray-400 mt-4 leading-relaxed font-mono">
              仲間とつくる感動や、「日常・現場のちょっとした不便」をテクノロジーでスッキリ解消する。
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
