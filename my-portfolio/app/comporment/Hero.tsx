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
    <section className="relative flex items-center justify-center min-h-[75vh] w-full z-10">
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
            className="mb-6 flex items-center space-x-3 text-xs font-mono tracking-[0.2em] text-[#00F0FF]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span>
            </span>
            <span>SYSTEM_INIT: SUCCESS</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tighter text-white mb-6 leading-tight select-text"
          >
            SYNTHETIC_
            <br />
            <span className="relative inline-block text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3CC] to-[#8E00A3] drop-shadow-[0_0_5px_rgba(0,163,204,0.3)] animate-flicker">
                {"H"}
              </span>
              <span className="text-gray-900 opacity-50">{"O"}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3CC] to-[#8E00A3] drop-shadow-[0_0_5px_rgba(0,163,204,0.3)] animate-flicker">
                {"RIZO"}
              </span>
              <span className="text-gray-900 opacity-50">{"N"}</span>
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-gray-400 text-sm md:text-base leading-relaxed font-mono mb-10"
          >
            デジタルとフィジカルの境界線を再定義する学生クリエイター。
            <br className="hidden md:block" />
            テクノロジーと感性の融合により、未だ見ぬ体験を設計します。
          </motion.p>

          <motion.div variants={itemVariants}>
            <button className="group relative px-6 py-3 font-mono text-sm tracking-wider text-white bg-[#050505] border border-gray-700 hover:border-[#00F0FF] transition-colors duration-300 overflow-hidden">
              <span className="absolute inset-0 w-0 bg-[#00F0FF] transition-all duration-300 ease-out group-hover:w-full opacity-10 z-0"></span>
              <span className="relative z-10 flex items-center space-x-2 group-hover:text-[#00F0FF] transition-colors duration-300">
                <span>プロジェクトを見る</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </span>
            </button>
          </motion.div>
        </div>

        {/* 右側：Pixelated Canvas エリア */}
        <motion.div
          variants={itemVariants}
          className="hidden md:block md:w-[35%] ml-auto relative md:min-h-[500px] overflow-hidden opacity-90 hover:opacity-100 transition-opacity duration-500"
        >
          {/* 💡 修正ポイント: 教えてもらった画像パスに変更しました */}
          <PixelatedCanvas
            src="/img/jibunn.jpg"
            className="w-full h-full object-cover"
            cellSize={5}
            dotScale={0.8}
            tintColor="#00F0FF"
            tintStrength={0.15}
            interactive={true}
            distortionMode="swirl"
            distortionStrength={4}
            responsive={true}
            backgroundColor=""
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none mix-blend-overlay"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
