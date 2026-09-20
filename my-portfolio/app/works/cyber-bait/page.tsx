"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Terminal,
  ArrowLeft,
  ExternalLink,
  Code,
  Layers,
  ShieldAlert,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function CyberBaitDetail() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#050505] text-white px-4 md:px-8 py-10 md:py-16 max-w-5xl mx-auto z-10 relative overflow-x-hidden">
      {/* 戻るボタン */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 md:mb-8"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-[#00F0FF] transition-colors"
        >
          <ArrowLeft size={14} /> SYSTEM_RETURN {"//"} TOP
        </Link>
      </motion.div>

      {/* ヘッダー情報 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4 mb-8 md:mb-10"
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-mono text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/30 px-3 py-1">
            PROJECT_ID: 002_SYSTEM_LOG
          </span>
          <span className="text-xs font-mono text-gray-500">
            {t("2024 - 稼働中", "2024 - Live")}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
          CYBER-BAIT
        </h1>
        <p className="text-gray-400 font-mono text-sm md:text-base">
          {t(
            "『詐欺師を騙し返せ！エージェント・コード』｜潜入捜査ハッキング・シミュレーションゲーム",
            "'Outsmart the Scammer! Agent Code' | Undercover Investigation & Cyber Security Game",
          )}
        </p>
      </motion.div>

      {/* メインビジュアル画像 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative aspect-video bg-[#111] border border-white/10 mb-12 overflow-hidden"
      >
        <img
          src="/img/cyber-bait.png"
          alt="CYBER-BAIT"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/40 via-indigo-950/30 to-transparent mix-blend-overlay"></div>
      </motion.div>

      {/* 詳細コンテンツ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* 左側：プロジェクト詳細説明 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:col-span-2 space-y-8 font-mono text-sm text-gray-300 leading-relaxed"
        >
          <div className="space-y-4 bg-[#0A0A0A] border border-white/10 p-6">
            <h2 className="text-lg font-bold text-[#00F0FF] flex items-center gap-2">
              <Terminal size={18} /> PROJECT_OVERVIEW
            </h2>
            <p>
              {t(
                "昨今社会問題化している「特殊詐欺」や「フィッシング詐欺」「闇バイト」などのサイバー犯罪の手口をリアルに疑似体験し、リテラシーと防犯意識を高めることを目的としたブラウザ型潜入捜査シミュレーションゲームです。",
                "A browser-based undercover investigation simulation game aimed at raising cyber literacy and crime prevention awareness against phishing, predatory fraud, and illicit work scams.",
              )}
            </p>
            <p>
              {t(
                "プレイヤーはおとり捜査官となり、巧妙に仕組まれたダミーの副業ポータルサイトからターゲットと接触。チャット形式で相手の言葉の矛盾を突き、口座情報やアジトの証拠を巧みに引き出して逮捕状を請求するサスペンスフルな体験をWeb上で構築しました。",
                "Players take the role of an undercover operative contacting criminal targets via realistic decoy portals. Through dynamic conversational interrogation, players detect contradictions and gather crucial evidence to execute arrest warrants.",
              )}
            </p>
          </div>

          <div className="space-y-4 bg-[#0A0A0A] border border-white/10 p-6">
            <h2 className="text-lg font-bold text-[#00F0FF] flex items-center gap-2">
              <Layers size={18} /> KEY_FEATURES & ENGINEERING
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-400">
              <li>
                <strong className="text-white">
                  {t("ダミーポータル演出:", "Decoy Portal Simulation:")}
                </strong>{" "}
                {t(
                  "実在する情報メディア風の精巧なデザインと巧妙な誘導UIを設計し、詐欺の手口を体感できるリアルな導入導線を構築。",
                  "Engineered realistic decoy landing pages mimicking deceptive media sites to demonstrate actual fraud vectors in safe simulation.",
                )}
              </li>
              <li>
                <strong className="text-white">
                  {t(
                    "インタラクティブ捜査システム:",
                    "Interactive Investigation Engine:",
                  )}
                </strong>{" "}
                {t(
                  "チャット形式で展開される高度な分岐シナリオ。相手の返答や選択肢によって展開がダイナミックに変化。",
                  "Branching scenario engine powered by state-machine dialogue trees that dynamically react to player choices and evidence extraction.",
                )}
              </li>
              <li>
                <strong className="text-white">
                  {t("多言語対応（i18n）:", "Multilingual Support (i18n):")}
                </strong>{" "}
                {t(
                  "日本語・英語・ミャンマー語・ネパール語に対応し、外国人労働者や留学生を狙った犯罪への啓発も視野に入れた設計。",
                  "Engineered i18n architecture supporting Japanese, English, Burmese, and Nepali to educate international students and workers.",
                )}
              </li>
              <li>
                <strong className="text-white">
                  {t(
                    "高速レスポンス & アニメーション:",
                    "High Performance UI & FX:",
                  )}
                </strong>{" "}
                {t(
                  "Next.js App RouterとTailwind CSSによる軽量・レスポンシブなUI設計と、緊迫感を演出するサウンド・エフェクト連携。",
                  "Ultra-responsive Next.js App Router and Tailwind architecture combined with cyber audio effects and reactive visual cues.",
                )}
              </li>
            </ul>
          </div>
        </motion.div>

        {/* 右側：スペック・技術情報 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
        >
          <div className="bg-[#0A0A0A] border border-white/10 p-6 space-y-4 font-mono">
            <h3 className="text-xs tracking-[0.2em] text-gray-500 font-bold border-b border-gray-800 pb-2 flex items-center gap-2">
              <Code size={14} /> SPECS & TECH_STACK
            </h3>
            <div className="space-y-4 text-xs">
              <div>
                <span className="text-gray-500 block mb-1">
                  {t("担当領域", "Scope / Roles")}
                </span>
                <span className="text-white">
                  {t(
                    "企画・設計 / UI/UXデザイン / フロントエンド開発",
                    "Planning / UI/UX Design / Frontend Development",
                  )}
                </span>
              </div>
              <div>
                <span className="text-gray-500 block mb-1">
                  {t("使用技術・ツール", "Technologies & Tools")}
                </span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  <span className="px-2 py-0.5 bg-[#050505] border border-white/10 text-[#00F0FF]">
                    Next.js (App Router)
                  </span>
                  <span className="px-2 py-0.5 bg-[#050505] border border-white/10 text-[#00F0FF]">
                    React
                  </span>
                  <span className="px-2 py-0.5 bg-[#050505] border border-white/10 text-[#00F0FF]">
                    TypeScript
                  </span>
                  <span className="px-2 py-0.5 bg-[#050505] border border-white/10 text-[#00F0FF]">
                    Tailwind CSS
                  </span>
                  <span className="px-2 py-0.5 bg-[#050505] border border-white/10 text-gray-400">
                    Vercel
                  </span>
                  <span className="px-2 py-0.5 bg-[#050505] border border-white/10 text-gray-400">
                    GitHub
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-2">
              <a
                href="https://cyber-bait.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#00F0FF] text-black font-bold tracking-wider hover:bg-[#00d0df] transition-colors duration-300"
              >
                <span>{t("ゲームをプレイする", "Launch Game Online")}</span>
                <ExternalLink size={16} />
              </a>
              <div className="flex items-center justify-center gap-2 py-2 text-gray-500 text-[11px]">
                <ShieldAlert size={14} className="text-purple-400" />
                <span>
                  {t("防犯啓発シミュレーション", "Cyber Security Simulation")}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
