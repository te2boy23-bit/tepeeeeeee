"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Achievements() {
  const { t } = useLanguage();

  const achievements = [
    {
      id: "001",
      title: t(
        "三幸フェスティバル（赤団）特設サイト",
        "Sanko Festival (Red Team) Portal",
      ),
      category: "FEATURED",
      date: t("2026.04 - 現在", "2026.04 - Present"),
      desc: t(
        "チームの要望を形にするためデザインからシステム構築まで担当。最高の瞬間をつくるための裏側を、Webの力で支えています！",
        "Designed and engineered full-stack portal platform with countdown, member profiles, and live photo gallery API.",
      ),
      imageUrl: "/img/logo.jpg",
      link: "https://akadan.vercel.app/",
      detailPage: "/works/akadan",
      badge: "LIVE",
    },
    {
      id: "002",
      title: "CYBER-BAIT",
      category: "SYSTEM_LOG",
      date: t("2026 - 稼働中", "2026 - Active"),
      desc: t(
        "特殊詐欺や闇バイトの手口を疑似体験し防犯リテラシーを高める、ブラウザ型潜入捜査シミュレーションゲーム。チャットで証拠を引き出し逮捕状を請求する本格体験。",
        "Cybersecurity simulation game educating against fraud & scams through interactive undercover chat investigations.",
      ),
      imageUrl: "/img/cyber-bait.png",
      link: "https://cyber-bait.com",
      detailPage: "/works/cyber-bait",
      badge: "GAME",
    },
    {
      id: "003",
      title: "Plan Wallet",
      category: "FEATURED",
      date: t("2026 - 稼働中", "2026 - Active"),
      desc: t(
        "旅行や同棲、趣味の資金など、恋人や友人と一緒にお金を貯めながら、目標までのTodoを楽しく管理・可視化できる共有型Webアプリケーション。",
        "Collaborative savings & task management web app helping friends and couples achieve joint goals together.",
      ),
      imageUrl: "/img/plan-wallet.png",
      link: "https://plan-wallet.com",
      detailPage: "/works/plan-wallet",
      badge: "APP",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="works" className="space-y-8 w-full py-12 scroll-mt-24">
      {/* セクションヘッダー */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-[#00F0FF] rounded-full shadow-[0_0_8px_#00F0FF] animate-pulse"></span>
          <h2 className="text-sm font-mono tracking-[0.25em] text-[#00F0FF] uppercase font-bold">
            {t("制作実績 // SELECTED WORKS", "FEATURED // SELECTED WORKS")}
          </h2>
        </div>
        <span className="hidden sm:inline-block text-xs font-mono text-gray-500">
          03 // FEATURED_INDEX
        </span>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {achievements.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="group relative flex flex-col border border-gray-800/90 bg-[#070707] hover:border-[#00F0FF] hover:shadow-[0_0_25px_rgba(0,240,255,0.18)] transition-all duration-300 overflow-hidden"
          >
            {/* 上部サイバーネオンライン */}
            <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00F0FF] to-[#BC13FE] group-hover:w-full transition-all duration-500 z-20"></div>

            {/* コーナー装飾マーク */}
            <span className="absolute top-1.5 right-1.5 text-[10px] font-mono text-gray-600 group-hover:text-[#00F0FF] transition-colors z-20 pointer-events-none">
              +
            </span>
            <span className="absolute bottom-1.5 left-1.5 text-[10px] font-mono text-gray-600 group-hover:text-[#00F0FF] transition-colors z-20 pointer-events-none">
              +
            </span>

            {/* 画像エリア（クリックで詳細ページへ） */}
            <Link
              href={item.detailPage}
              className="relative w-full aspect-video border-b border-gray-800/90 group-hover:border-[#00F0FF]/60 overflow-hidden transition-colors duration-300 bg-gray-900 block"
            >
              {/* ホバー時のレーザースキャンライン */}
              <div className="absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-[#00F0FF]/35 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-cyber-scan pointer-events-none z-10" />

              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent opacity-80 pointer-events-none"></div>

              {/* 右上のカテゴリバッジ */}
              <div className="absolute top-3 right-3 z-10">
                <span className="px-2 py-0.5 text-[10px] font-mono tracking-wider bg-[#050505]/80 backdrop-blur-sm border border-[#00F0FF]/40 text-[#00F0FF] shadow-[0_0_8px_rgba(0,240,255,0.2)]">
                  {item.badge}
                </span>
              </div>
            </Link>

            {/* テキストコンテンツ */}
            <div className="flex flex-col p-6 space-y-4 flex-grow">
              <div className="flex justify-between items-center text-xs font-mono tracking-wider">
                <span className="text-[#00F0FF] bg-[#00F0FF]/10 px-2 py-0.5 border border-[#00F0FF]/30">
                  {item.category}
                </span>
                <span className="text-gray-500 text-[11px] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  {item.date}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-[#00F0FF] transition-colors duration-300 line-clamp-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed font-mono flex-grow">
                {item.desc}
              </p>

              {/* ボタンエリア（詳細ページ用 ＆ 外部サイト用） */}
              <div className="pt-4 flex items-center gap-2.5 border-t border-gray-900">
                {/* 内部の詳細ページへ飛ぶボタン */}
                <Link
                  href={item.detailPage}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 border border-gray-800 bg-[#0A0A0A] text-white font-mono text-xs tracking-wider hover:border-[#00F0FF] hover:text-[#00F0FF] hover:bg-[#00F0FF]/5 transition-all duration-300 group/btn"
                >
                  <span>{t("詳細を見る", "View Details")}</span>
                  <ArrowRight
                    size={13}
                    className="transform group-hover/btn:translate-x-1 transition-transform duration-300"
                  />
                </Link>
                {/* 外部の特設サイトへ飛ぶボタン */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 py-2 px-3 border border-[#00F0FF]/30 bg-[#00F0FF]/10 text-[#00F0FF] font-mono text-xs hover:bg-[#00F0FF]/25 hover:border-[#00F0FF] transition-all duration-300 shadow-[0_0_8px_rgba(0,240,255,0.15)] hover:shadow-[0_0_12px_rgba(0,240,255,0.3)]"
                  title="サイトを開く"
                >
                  <span>{t("外部", "Live")}</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 作品一覧へのリンクボタン */}
      <div className="flex justify-center pt-6">
        <Link
          href="/works"
          className="group relative inline-flex items-center gap-3 px-8 py-3.5 border border-gray-800 bg-[#070707] text-white font-mono text-xs sm:text-sm tracking-widest hover:border-[#00F0FF] hover:text-[#00F0FF] hover:shadow-[0_0_20px_rgba(0,240,255,0.25)] transition-all duration-300 overflow-hidden"
        >
          <span className="absolute inset-0 bg-[#00F0FF]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
          <span className="relative z-10">
            {t("すべての作品を見る", "View All Works")}
          </span>
          <ArrowRight
            size={16}
            className="transform group-hover:translate-x-1.5 transition-transform duration-300 relative z-10 text-[#00F0FF]"
          />
        </Link>
      </div>
    </section>
  );
}
