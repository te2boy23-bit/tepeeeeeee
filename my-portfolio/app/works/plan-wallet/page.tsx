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
  Wallet,
  Database,
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function PlanWalletDetail() {
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
            PROJECT_ID: 003_FEATURED
          </span>
          <span className="text-xs font-mono text-gray-500">
            {t("2026 - 稼働中", "2026 - Live")}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
          Plan Wallet
        </h1>
        <p className="text-gray-400 font-mono text-sm md:text-base">
          {t(
            "夢を叶える共有貯金＆Todoアプリ｜Todo & Money",
            "Shared Savings & Goal Management App | Todo & Money",
          )}
        </p>
      </motion.div>

      {/* メインビジュアル画像 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative aspect-video bg-[#0A0A0A] border border-white/10 mb-12 overflow-hidden flex items-center justify-center p-8"
      >
        <img
          src="/img/plan-wallet.png"
          alt="Plan Wallet"
          className="max-h-full object-contain drop-shadow-[0_0_25px_rgba(0,240,255,0.25)]"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/20 via-blue-950/20 to-transparent pointer-events-none"></div>
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
                "旅行、同棲、趣味の資金など、恋人や友人、家族と一緒にお金を管理し、共通のTodoをこなしながら夢を叶えるための共有型ライフスタイルWebアプリケーションです。",
                "A collaborative financial and lifestyle web app built for couples, friends, and families to manage shared savings and coordinate goals together.",
              )}
            </p>
            <p>
              {t(
                "「いくら貯まったか」という金銭管理だけでなく、「目標達成のために何を準備するか」というTodo、カレンダー、メモ機能を1つに統合。進捗をリアルタイムに共有し、モチベーションを高め合える環境を提供します。",
                "Combines money tracking with integrated checklists, calendar milestones, and travel memo boards so users can enjoy the journey towards their shared dreams.",
              )}
            </p>
          </div>

          {/* データベース設計 & データ連携詳細 */}
          <div className="space-y-5 bg-[#0A0A0A] border border-[#00F0FF]/30 p-6 shadow-[0_0_20px_rgba(0,240,255,0.05)]">
            <h2 className="text-lg font-bold text-[#00F0FF] flex items-center gap-2">
              <Database size={18} /> DATABASE_ARCHITECTURE & DATA_DESIGN
            </h2>
            <p className="text-gray-300">
              {t(
                "バックエンドには Supabase（PostgreSQL）を採用。招待コードによるペアリング共有システム、リアルタイムな入出金・Todoの同期、堅牢なセキュリティ（RLS）を両立したリレーショナルデータモデルを設計・実装しました。",
                "Leveraged Supabase (PostgreSQL) for the backend. Engineered relational data modeling with invitation-code pairing, live synchronization for savings and todos, and strict Row Level Security (RLS).",
              )}
            </p>

            {/* テーブル設計図・スキーマカード */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-[#050505] border border-white/10 p-3.5 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[#00F0FF] font-bold text-xs">projects</span>
                  <span className="text-[10px] text-gray-500 uppercase">Parent Entity</span>
                </div>
                <p className="text-[11px] text-gray-400">
                  {t(
                    "目標名、目標金額、期間、オーナー/パートナーID、招待コード（6桁英数）を保持し、共同管理の単位となるルートテーブル。",
                    "Root workspace entity storing target savings, period, owner & partner IDs, and 6-digit invitation codes.",
                  )}
                </p>
              </div>

              <div className="bg-[#050505] border border-white/10 p-3.5 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[#00F0FF] font-bold text-xs">todos</span>
                  <span className="text-[10px] text-gray-500 uppercase">Task Entity</span>
                </div>
                <p className="text-[11px] text-gray-400">
                  {t(
                    "project_idに紐づくタスク管理テーブル。タイトル、完了フラグ（is_completed）、期日（due_date）を管理し、カレンダーとも相互連携。",
                    "Project-scoped task entity tracking title, completion status, and due dates, bi-directionally mapped to the calendar view.",
                  )}
                </p>
              </div>

              <div className="bg-[#050505] border border-white/10 p-3.5 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[#00F0FF] font-bold text-xs">transactions</span>
                  <span className="text-[10px] text-gray-500 uppercase">Ledger Entity</span>
                </div>
                <p className="text-[11px] text-gray-400">
                  {t(
                    "貯金・出費・収入の入出金台帳。金額（amount）、支払者（payer: me/partner）、日付、メモを記録し、目標達成率やグラフを自動集計。",
                    "Financial transaction ledger recording deposit/expense/income types, payer identity, amounts, and dates for real-time progress calculations.",
                  )}
                </p>
              </div>

              <div className="bg-[#050505] border border-white/10 p-3.5 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[#00F0FF] font-bold text-xs">notes & notifications</span>
                  <span className="text-[10px] text-gray-500 uppercase">Collab Entity</span>
                </div>
                <p className="text-[11px] text-gray-400">
                  {t(
                    "旅行の持ち物や計画メモ（notes）と、相手の貯金・Todo追加時にリアルタイム送信される通知・Web Push基盤。",
                    "Collaborative memo documents and push notification feeds dispatched to partners upon todo additions and ledger updates.",
                  )}
                </p>
              </div>
            </div>

            {/* セキュリティ & Next.js 連携のポイント */}
            <div className="bg-[#050505]/80 border-l-2 border-[#00F0FF] p-3 text-xs space-y-1 text-gray-400">
              <div className="text-white font-bold flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-[#00F0FF]" />
                {t("Row Level Security (RLS) と Server Actions", "Row Level Security (RLS) & Server Actions")}
              </div>
              <p>
                {t(
                  "PostgreSQLのRLSポリシーにより「自分の所属プロジェクト外のデータにはDB層でアクセス不可」を徹底。Next.js Server Actions（@supabase/ssr）経由でセキュアに操作し、revalidatePathにより追加・完了を即時UIに反映します。",
                  "Enforced strict PostgreSQL RLS policies at the database layer to restrict access solely to authenticated project members. Orchestrated through Next.js Server Actions with @supabase/ssr, achieving instantaneous cache revalidation.",
                )}
              </p>
            </div>
          </div>

          <div className="space-y-4 bg-[#0A0A0A] border border-white/10 p-6">
            <h2 className="text-lg font-bold text-[#00F0FF] flex items-center gap-2">
              <Layers size={18} /> KEY_FEATURES & ENGINEERING
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-400">
              <li>
                <strong className="text-white">
                  {t(
                    "共有貯金＆予算ダッシュボード:",
                    "Shared Savings & Budget Dashboard:",
                  )}
                </strong>{" "}
                {t(
                  "目標金額に対する進捗率の可視化、メンバーごとの積立額記録、推移グラフによる直感的な資金管理。",
                  "Visual progress tracking toward target goals, member contribution history, and real-time calculation charts.",
                )}
              </li>
              <li>
                <strong className="text-white">
                  {t(
                    "統合Todo・カレンダー・メモ:",
                    "Integrated Todo, Calendar & Notes:",
                  )}
                </strong>{" "}
                {t(
                  "タスク管理とスケジュール、旅行の旅程や持ち物リストなどのメモを同期してワンストップで管理。",
                  "Synchronized itinerary, task checklists, and memo boards in one single workflow.",
                )}
              </li>
              <li>
                <strong className="text-white">
                  {t(
                    "パートナー自動通知 (Web Push):",
                    "Automated Partner Push Notifications:",
                  )}
                </strong>{" "}
                {t(
                  "相手が貯金を記録したりTodoを追加・更新した際、データベースのトリガーとWeb Push APIが連動して即座に通知を配信。",
                  "Real-time push notifications delivered via Web Push API upon partner todo updates and financial records.",
                )}
              </li>
              <li>
                <strong className="text-white">
                  {t(
                    "Google認証・セキュアな設計:",
                    "Google OAuth & Secure Architecture:",
                  )}
                </strong>{" "}
                {t(
                  "簡単かつ安全にログインできる認証システムと、リアルタイムなデータ反映を実現。",
                  "Smooth and secure authentication with real-time responsive data persistence.",
                )}
              </li>
              <li>
                <strong className="text-white">
                  {t("モバイルファーストUI:", "Mobile-First Responsive UI:")}
                </strong>{" "}
                {t(
                  "外出先やスマホからでも素早く入金記録やTodoチェックができる最適化されたレスポンシブデザイン。",
                  "Designed for instant mobile input on the go with lightweight components and high-contrast cyberpunk aesthetics.",
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
                    "プロダクト企画 / UI/UXデザイン / フルスタック開発",
                    "Product Planning / UI/UX Design / Fullstack Development",
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
                  <span className="px-2 py-0.5 bg-[#050505] border border-[#00F0FF]/40 text-[#00F0FF] font-bold">
                    Supabase
                  </span>
                  <span className="px-2 py-0.5 bg-[#050505] border border-[#00F0FF]/40 text-[#00F0FF] font-bold">
                    PostgreSQL
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
                    Row Level Security (RLS)
                  </span>
                  <span className="px-2 py-0.5 bg-[#050505] border border-white/10 text-gray-400">
                    Web Push API
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
                href="https://plan-wallet.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#00F0FF] text-black font-bold tracking-wider hover:bg-[#00d0df] transition-colors duration-300"
              >
                <span>{t("アプリを開く", "Launch Web App")}</span>
                <ExternalLink size={16} />
              </a>
              <div className="flex items-center justify-center gap-2 py-2 text-gray-500 text-[11px]">
                <Wallet size={14} className="text-emerald-400" />
                <span>
                  {t("共有貯金＆タスク管理", "Shared Savings & Goals")}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
