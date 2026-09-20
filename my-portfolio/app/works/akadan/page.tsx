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
  Cpu,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function AkadanDetail() {
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
            PROJECT_ID: 001_FEATURED
          </span>
          <span className="text-xs font-mono text-gray-500">
            {t("2026.04 - 現在", "2026.04 - Present")}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
          {t(
            "三幸フェスティバル（赤団）特設サイト「豹牙」",
            "Sanko Festival (Red Team) Portal 'Hyoga'",
          )}
        </h1>
        <p className="text-gray-400 font-mono text-sm md:text-base">
          {t(
            "最高の瞬間をつくるための裏側を、Webの力で支える専用プラットフォーム。",
            "A dedicated platform powering and uniting the team behind the festival moments.",
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
          src="/img/logo.jpg"
          alt="三幸フェスティバル（赤団）特設サイト"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/40 to-transparent mix-blend-overlay"></div>
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
                "三幸学園フェスティバルに出場する学生チーム「豹牙（Hyoga）」のためのマーケティング・ハブサイト。チームのメンバーからの「こんな機能が欲しい」「もっと盛り上げたい」という要望を形にするため、デザインからシステム構築までを一貫して担当しました。",
                "A comprehensive marketing and community hub for 'Hyoga', the Red Team competing in the Sanko Gakuen Festival. Handled the complete product lifecycle from UI/UX design to system architecture based directly on team member feedback.",
              )}
            </p>
            <p>
              {t(
                "カウントダウン、最新情報、メンバーのプロフィール、ライブフォトギャラリー、イベントのロジスティクスまでを1つにまとめ、チームの結束を強めるための中心的な役割を果たしています。",
                "Integrates live countdowns, announcements, member bios, a cloud photo gallery, and event logistics into a cohesive experience that amplified team spirit and engagement.",
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
                  {t("ライブフォトギャラリーAPI:", "Live Photo Gallery API:")}
                </strong>{" "}
                {t(
                  "Cloudinaryを直接クエリするAPIルートを構築。iPhone特有のHEIC形式を含む様々なフォーマットをWebP/AVIFへ自動変換・配信することで、非開発者のメンバーでもスマホから写真をそのままアップロード可能に。",
                  "Engineered serverless API routes querying Cloudinary directly. Converts HEIC and various mobile photo formats into WebP/AVIF on the fly, allowing non-tech members to seamlessly upload photos from mobile.",
                )}
              </li>
              <li>
                <strong className="text-white">
                  {t("スマート・カウントダウン:", "Smart Countdown:")}
                </strong>{" "}
                {t(
                  "IntersectionObserverを活用し、フッター付近に到達すると自動で再ドッキングするクライアントコンポーネントを実装。コンテンツと重ならず常に視認性を維持。",
                  "Implemented an IntersectionObserver-driven reactive widget that docks automatically to prevent obscuring content while retaining visibility.",
                )}
              </li>
              <li>
                <strong className="text-white">
                  {t("動的メンバープロフィール:", "Dynamic Member Profiles:")}
                </strong>{" "}
                {t(
                  "動的ルート（`app/members/[username]`）を利用し、共有データから個別のバイオグラフィー（学校、役割、趣味、目標）を自動生成。",
                  "Leveraged App Router dynamic routing to generate individual biography pages (school, role, hobbies, goals) from structured data.",
                )}
              </li>
              <li>
                <strong className="text-white">
                  {t(
                    "ビジュアル＆インタラクション:",
                    "Visuals & Interactions:",
                  )}
                </strong>{" "}
                {t(
                  "Swiperによるカバーフロー型のビデオカルーセル（自動再生・一時停止・ミュート切替対応）や、スクロール連動のフェードインアニメーションを実装。",
                  "Built interactive coverflow video carousels with autoplay controls and scroll-triggered animations.",
                )}
              </li>
              <li>
                <strong className="text-white">
                  {t("お問い合わせ機能:", "Contact Form Integration:")}
                </strong>{" "}
                {t(
                  "Web3Forms APIを組み込み、スムーズで信頼性の高い連絡受付システムを構築。",
                  "Integrated Web3Forms API to provide a friction-free contact pipeline.",
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
                    "UI/UXデザイン / フロントエンド開発 / システム構築",
                    "UI/UX Design / Frontend Development / System Architecture",
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
                  <span className="px-2 py-0.5 bg-[#050505] border border-white/10 text-[#00F0FF]">
                    Cloudinary CDN
                  </span>
                  <span className="px-2 py-0.5 bg-[#050505] border border-white/10 text-[#00F0FF]">
                    Web3Forms
                  </span>
                  <span className="px-2 py-0.5 bg-[#050505] border border-white/10 text-[#00F0FF]">
                    Canva
                  </span>
                  <span className="px-2 py-0.5 bg-[#050505] border border-white/10 text-gray-400">
                    GitHub
                  </span>
                  <span className="px-2 py-0.5 bg-[#050505] border border-white/10 text-gray-400">
                    VS Code
                  </span>
                  <span className="px-2 py-0.5 bg-[#050505] border border-white/10 text-gray-400">
                    Vercel
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-2">
              <a
                href="https://akadan.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#00F0FF] text-black font-bold tracking-wider hover:bg-[#00d0df] transition-colors duration-300"
              >
                <span>{t("ライブサイトを開く", "Launch Live Site")}</span>
                <ExternalLink size={16} />
              </a>
              <a
                href="https://github.com/akadanredred-dotcom/sankogakuen-hp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#050505] border border-white/20 text-white font-mono text-xs hover:border-[#00F0FF] transition-colors duration-300"
              >
                <Cpu size={14} />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
