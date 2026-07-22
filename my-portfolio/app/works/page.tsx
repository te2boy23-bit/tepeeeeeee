"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Star } from "lucide-react";

export default function Works() {
  const achievements = [
    {
      id: "001",
      title: "三幸フェスティバル（赤団）特設サイト",
      subtitle: "赤団 特設サイト",
      category: "FEATURED",
      date: "2024.04 - 現在",
      desc: "チームのメンバーからの「こんな機能が欲しい」「もっと盛り上げたい」という要望を形にするため、デザインからシステム構築まで担当しています。最高の瞬間をつくるための裏側を、Webの力で支えています！",
      imageUrl: "/img/logo.jpg",
      tags: ["UI/UX", "FRONTEND", "DESIGN"],
      link: "https://akadan.vercel.app/",
    },
  ];

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
    <section
      id="works"
      className="relative py-16 px-4 md:px-8 max-w-7xl mx-auto z-10"
    >
      {/* ヘッダーセクション */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold font-sans tracking-tight text-[#00F0FF] flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-[#00F0FF] animate-pulse"></span>
          SELECTED_WORKS
        </h2>
        <div className="h-px bg-white/20 flex-grow"></div>
        <span className="text-xs font-mono text-gray-400">01 / ACTIVE</span>
      </motion.div>

      {/* 作品グリッド（1件のみ中央・または左寄せで表示） */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
      >
        {achievements.map((item) => {
          const accentColor = "#00F0FF";
          const IconComponent = Star;

          return (
            <motion.a
              key={item.id}
              variants={itemVariants}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block bg-[#0A0A0A] border border-white/10 transition-all duration-500 p-4 md:p-6 hover:-translate-y-1 overflow-hidden"
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = accentColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)")
              }
            >
              {/* 背景のホバー発光演出 */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: `${accentColor}0D` }}
              ></div>

              <div className="aspect-video bg-[#111] mb-6 overflow-hidden relative border border-white/5">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
                <div
                  className="absolute inset-0 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                  style={{
                    background:
                      "linear-gradient(to bottom right, rgba(30, 58, 138, 0.3), rgba(0, 240, 255, 0.25))",
                  }}
                ></div>
                <div className="absolute inset-0 border border-white/5 m-4 pointer-events-none"></div>
              </div>

              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
                  {item.title}
                  <br />
                  <span className="text-sm text-gray-400 font-mono font-normal tracking-wide">
                    ({item.subtitle})
                  </span>
                </h3>
                <span
                  className="text-[10px] font-mono flex items-center gap-1 px-2.5 py-1 border"
                  style={{
                    color: accentColor,
                    backgroundColor: `${accentColor}1A`,
                    borderColor: `${accentColor}33`,
                  }}
                >
                  <IconComponent size={10} /> {item.id}_{item.category}
                </span>
              </div>

              <p className="text-gray-400 text-sm mb-6 leading-relaxed font-mono">
                {item.desc}
              </p>

              <div className="flex flex-wrap gap-2 font-mono text-[10px] text-gray-400">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-[#050505] border border-white/10 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          );
        })}
      </motion.div>
    </section>
  );
}
