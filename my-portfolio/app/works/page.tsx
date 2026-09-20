"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Star, ArrowRight, ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Works() {
  const { t } = useLanguage();

  const achievements = [
    {
      id: "001",
      title: t(
        "三幸フェスティバル（赤団）特設サイト",
        "Sanko Festival (Red Team) Portal",
      ),
      subtitle: t("赤団 特設サイト「豹牙」", "Festival Portal 'Hyoga'"),
      category: "FEATURED",
      date: t("2024.04 - 現在", "2024.04 - Present"),
      desc: t(
        "チームのメンバーからの「こんな機能が欲しい」「もっと盛り上げたい」という要望を形にするため、デザインからシステム構築まで担当しています。最高の瞬間をつくるための裏側を、Webの力で支えています！",
        "Designed and engineered full-stack portal platform with countdown, member profiles, and live photo gallery API.",
      ),
      imageUrl: "/img/logo.jpg",
      tags: ["UI/UX", "FRONTEND", "DESIGN"],
      link: "https://akadan.vercel.app/",
      detailPage: "/works/akadan",
    },
    {
      id: "002",
      title: "CYBER-BAIT",
      subtitle: t("潜入捜査ハッキングゲーム", "Undercover Operation Game"),
      category: "SYSTEM_LOG",
      date: t("2024 - 稼働中", "2024 - Active"),
      desc: t(
        "社会問題化する特殊詐欺やフィッシング詐欺、闇バイトの手口を疑似体験し、防犯意識を高めるブラウザ型潜入捜査シミュレーション。チャットで証拠を引き出し逮捕状を請求する本格体験を提供。",
        "Cybersecurity simulation game educating against fraud & scams through interactive undercover chat investigations.",
      ),
      imageUrl: "/img/cyber-bait.png",
      tags: ["NEXT.JS", "SECURITY", "GAME", "SIMULATION"],
      link: "https://cyber-bait.com",
      detailPage: "/works/cyber-bait",
    },
    {
      id: "003",
      title: "Plan Wallet",
      subtitle: t(
        "夢を叶える共有貯金＆Todoアプリ",
        "Shared Savings & Todo App",
      ),
      category: "FEATURED",
      date: t("2024 - 稼働中", "2024 - Active"),
      desc: t(
        "旅行や同棲、趣味の資金など、恋人や友人と一緒にお金を貯めながら、目標までのTodoを楽しく管理・可視化できる共有型Webアプリケーション。",
        "Collaborative savings & task management web app helping friends and couples achieve joint goals together.",
      ),
      imageUrl: "/img/plan-wallet.png",
      tags: ["NEXT.JS", "REACT", "FINTECH", "FULLSTACK"],
      link: "https://plan-wallet.com",
      detailPage: "/works/plan-wallet",
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
        <span className="text-xs font-mono text-gray-400">03 / ACTIVE</span>
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
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative flex flex-col bg-[#0A0A0A] border border-white/10 transition-all duration-500 p-4 md:p-6 hover:-translate-y-1 overflow-hidden"
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

              <Link href={item.detailPage} className="block group/img">
                <div className="aspect-video bg-[#111] mb-6 overflow-hidden relative border border-white/5">
                  {/* レーザースキャンライン */}
                  <div className="absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-[#00F0FF]/35 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-cyber-scan pointer-events-none z-10" />

                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700 opacity-80"
                  />
                  <div
                    className="absolute inset-0 mix-blend-overlay group-hover/img:scale-105 transition-transform duration-700"
                    style={{
                      background:
                        "linear-gradient(to bottom right, rgba(30, 58, 138, 0.3), rgba(0, 240, 255, 0.25))",
                    }}
                  ></div>
                  <div className="absolute inset-0 border border-white/5 m-4 pointer-events-none"></div>
                </div>
              </Link>

              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
                  <Link
                    href={item.detailPage}
                    className="hover:text-[#00F0FF] transition-colors"
                  >
                    {item.title}
                  </Link>
                  <br />
                  <span className="text-sm text-gray-400 font-mono font-normal tracking-wide">
                    ({item.subtitle})
                  </span>
                </h3>
                <span
                  className="text-[10px] font-mono flex items-center gap-1 px-2.5 py-1 border shrink-0"
                  style={{
                    color: accentColor,
                    backgroundColor: `${accentColor}1A`,
                    borderColor: `${accentColor}33`,
                  }}
                >
                  <IconComponent size={10} /> {item.id}_{item.category}
                </span>
              </div>

              <p className="text-gray-400 text-sm mb-6 leading-relaxed font-mono flex-grow">
                {item.desc}
              </p>

              <div className="flex flex-wrap gap-2 font-mono text-[10px] text-gray-400 mb-6">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-[#050505] border border-white/10 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* ボタングループ */}
              <div className="pt-4 flex items-center gap-3 border-t border-white/10 mt-auto">
                <Link
                  href={item.detailPage}
                  className="flex-1 text-center py-2.5 px-4 bg-[#00F0FF]/10 border border-[#00F0FF]/40 text-[#00F0FF] font-mono text-xs tracking-wider hover:bg-[#00F0FF] hover:text-black transition-all duration-300 flex items-center justify-center gap-2 font-bold"
                >
                  <span>{t("詳細を見る", "View Details")}</span>
                  <ArrowRight size={14} />
                </Link>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 border border-white/20 bg-[#050505] text-gray-300 font-mono text-xs hover:border-[#00F0FF] hover:text-[#00F0FF] transition-colors duration-300 flex items-center gap-1.5"
                  title="サイトを開く"
                >
                  <span>{t("外部サイト", "Live Site")}</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
