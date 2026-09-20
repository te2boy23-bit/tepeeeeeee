"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import {
  User,
  Code2,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  GraduationCap,
  Calendar,
  ExternalLink,
  ArrowLeft,
  Briefcase,
  Heart,
} from "lucide-react";

export default function About() {
  const { t } = useLanguage();

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
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const skillCategories = [
    {
      name: t("フロントエンド", "Frontend"),
      icon: Code2,
      color: "#00F0FF",
      skills: [
        { name: "Next.js (App Router)", level: "Advanced" },
        { name: "React", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "Framer Motion", level: "Intermediate" },
        { name: "HTML5 / CSS3 / SCSS", level: "Advanced" },
      ],
    },
    {
      name: t("バックエンド & DB", "Backend & Database"),
      icon: Terminal,
      color: "#BC13FE",
      skills: [
        { name: "Node.js", level: "Intermediate" },
        { name: "REST API Design", level: "Intermediate" },
        { name: "Supabase", level: "Intermediate" },
        { name: "Cloudinary CDN", level: "Intermediate" },
        { name: "Database (SQL)", level: "Basic" },
      ],
    },
    {
      name: t("ツール & デザイン", "Tools & Design"),
      icon: Layers,
      color: "#10B981",
      skills: [
        { name: "Git / GitHub", level: "Advanced" },
        { name: "Vercel", level: "Advanced" },
        { name: "Figma / Canva", level: "Intermediate" },
        { name: "VS Code", level: "Advanced" },
        { name: "Responsive Design", level: "Advanced" },
      ],
    },
  ];

  const milestones = [
    {
      date: "2024.04",
      title: t(
        "専門学校入学（AIプログラミング＆CGクリエイター科）",
        "Enrolled in AI Programming & CG Creator Course",
      ),
      desc: t(
        "プログラミング、AIアルゴリズム、Webデザイン、CGグラフィックスを本格的に学び始める。",
        "Began intensive studies in programming, AI algorithms, web design, and digital graphics.",
      ),
    },
    {
      date: "2024.06",
      title: t(
        "三幸フェスティバル（赤団）特設サイト「豹牙」企画・構築",
        "Launched Festival Portal Site 'Hyoga'",
      ),
      desc: t(
        "チームの要望をヒアリングし、カウントダウンやフォトギャラリーAPI、メンバー紹介を備えた総合サイトを制作・運用。",
        "Designed and built full-featured portal with countdown, photo API, and dynamic profiles.",
      ),
    },
    {
      date: "2024.08",
      title: t(
        "潜入捜査ゲーム「CYBER-BAIT」企画・開発・公開",
        "Developed & Released Cybersecurity Game 'CYBER-BAIT'",
      ),
      desc: t(
        "巧妙な詐欺手口を疑似体験し防犯意識を高めるブラウザ型シミュレーションゲームを個人開発。",
        "Independently created a browser-based simulation game educating users against cyber fraud.",
      ),
    },
    {
      date: "2024.09",
      title: t(
        "共有貯金＆Todoアプリ「Plan Wallet」リリース",
        "Launched Financial & Task App 'Plan Wallet'",
      ),
      desc: t(
        "恋人や友人と共通の目標に向けて資金とタスクを楽しく管理できる実用Webサービスを開発・ローンチ。",
        "Developed full-stack web app helping couples & friends save money and track joint goals.",
      ),
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto z-15 relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full space-y-16"
      >
        {/* 戻るリンク */}
        <motion.div variants={itemVariants}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-[#00F0FF] transition-colors"
          >
            <ArrowLeft size={14} /> SYSTEM_RETURN {"//"} TOP
          </Link>
        </motion.div>

        {/* 1. メインプロフィール ヘッダー */}
        <motion.div
          variants={itemVariants}
          className="bg-[#0A0A0A] border border-white/10 p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00F0FF]/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
            {/* プロフィール画像 */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-[#00F0FF]/40 bg-gray-900 shadow-[0_0_25px_rgba(0,240,255,0.2)] flex-shrink-0">
              <img
                src="/img/jibunn.jpg"
                alt="和泉 鉄平"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 基本情報と自己紹介 */}
            <div className="flex-1 space-y-4 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <span className="text-xs font-mono text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/30 px-3 py-1">
                  WEB DEVELOPER & CREATOR
                </span>
                <span className="text-xs font-mono text-gray-500">
                  {t("東京都在住", "Tokyo, Japan")}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                {t("和泉 鉄平", "Teppei Izumi")}
              </h1>

              <p className="text-sm md:text-base font-mono text-gray-300 leading-relaxed max-w-3xl">
                {t(
                  "専門学校にてAIプログラミングおよびCGクリエイティブを専攻。デザインの感性とエンジニアリングの論理性を融合させ、使う人の感情を動かすWebプロダクトの制作に情熱を注いでいます。",
                  "Majoring in AI Programming and CG Creation. Passionate about crafting web applications that blend aesthetic design with solid engineering to deliver impactful user experiences.",
                )}
              </p>

              <p className="text-sm font-mono text-gray-400 leading-relaxed max-w-3xl">
                {t(
                  "単に動くものを作るだけでなく、直感的なUI、洗練されたインタラクション、そして課題をスマートに解消するロジックの構築を一貫して探求しています。",
                  "Beyond just making things work, I constantly explore intuitive UI, polished micro-interactions, and smart problem-solving architecture.",
                )}
              </p>
            </div>
          </div>
        </motion.div>

        {/* 2. コアバリュー＆理念 */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="flex items-center gap-3">
            <Sparkles size={18} className="text-[#00F0FF]" />
            <h2 className="text-xl font-bold font-mono tracking-wider text-white">
              {t("制作理念 // CORE VALUES", "CORE VALUES // PHILOSOPHY")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0A0A0A] border border-white/10 p-6 space-y-3 hover:border-[#00F0FF] transition-all">
              <span className="text-xs font-mono text-[#00F0FF]">
                01 / EXPERIENCE
              </span>
              <h3 className="text-lg font-bold text-white">
                {t("心地よいインタラクション", "Refined Interactions")}
              </h3>
              <p className="text-xs font-mono text-gray-400 leading-relaxed">
                {t(
                  "滑らかなアニメーションやフィードバックで、触っていて気持ちいい操作感と没入感を大切にしています。",
                  "Focusing on fluid animations and responsive feedback to ensure a smooth, delightful user experience.",
                )}
              </p>
            </div>

            <div className="bg-[#0A0A0A] border border-white/10 p-6 space-y-3 hover:border-[#BC13FE] transition-all">
              <span className="text-xs font-mono text-[#BC13FE]">
                02 / PROBLEM SOLVING
              </span>
              <h3 className="text-lg font-bold text-white">
                {t("身近な課題をスマートに解消", "Practical Problem Solving")}
              </h3>
              <p className="text-xs font-mono text-gray-400 leading-relaxed">
                {t(
                  "イベントの共有不足、貯金の続けにくさ、防犯啓発など、現実の課題に寄り添った解決策を形にします。",
                  "Developing practical software tackling everyday needs—from event hubs to shared savings and security awareness.",
                )}
              </p>
            </div>

            <div className="bg-[#0A0A0A] border border-white/10 p-6 space-y-3 hover:border-emerald-400 transition-all">
              <span className="text-xs font-mono text-emerald-400">
                03 / END-TO-END
              </span>
              <h3 className="text-lg font-bold text-white">
                {t("デザインから実装までの一貫力", "End-to-End Execution")}
              </h3>
              <p className="text-xs font-mono text-gray-400 leading-relaxed">
                {t(
                  "企画・ワイヤーフレーム作成・UIデザインから、Next.jsによるフロント/バックエンド実装、デプロイまで完結できます。",
                  "Capable of full-cycle development: from concept planning and UI prototyping to full-stack code and deployment.",
                )}
              </p>
            </div>
          </div>
        </motion.div>

        {/* 3. 詳細スキルスタック */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="flex items-center gap-3">
            <Cpu size={18} className="text-[#00F0FF]" />
            <h2 className="text-xl font-bold font-mono tracking-wider text-white">
              {t("技術スタック // SKILLS", "TECH STACK // SKILLS")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((category) => {
              const IconComp = category.icon;
              return (
                <div
                  key={category.name}
                  className="bg-[#0A0A0A] border border-white/10 p-6 space-y-4"
                >
                  <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                    <IconComp size={16} style={{ color: category.color }} />
                    <h3 className="font-bold text-white font-mono text-sm">
                      {category.name}
                    </h3>
                  </div>

                  <div className="space-y-2.5 font-mono text-xs">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between py-1 border-b border-white/5"
                      >
                        <span className="text-gray-300">{skill.name}</span>
                        <span
                          className="text-[10px] px-2 py-0.5 rounded"
                          style={{
                            color: category.color,
                            backgroundColor: `${category.color}15`,
                          }}
                        >
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* 4. 略歴・マイルストーン */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="flex items-center gap-3">
            <Calendar size={18} className="text-[#00F0FF]" />
            <h2 className="text-xl font-bold font-mono tracking-wider text-white">
              {t("略歴・制作歩み // TIMELINE", "TIMELINE // MILESTONES")}
            </h2>
          </div>

          <div className="space-y-6 border-l-2 border-[#00F0FF]/30 ml-3 pl-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#050505] border-2 border-[#00F0FF] group-hover:bg-[#00F0FF] transition-colors"></div>
                <span className="text-xs font-mono text-[#00F0FF] font-bold">
                  {m.date}
                </span>
                <h3 className="text-base font-bold text-white mt-1">
                  {m.title}
                </h3>
                <p className="text-xs font-mono text-gray-400 mt-1 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 5. 作品一覧への導線 */}
        <motion.div
          variants={itemVariants}
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10"
        >
          <div className="text-xs font-mono text-gray-400">
            {t("制作した作品の詳細はこちら", "Explore selected projects")}
          </div>
          <Link
            href="/works"
            className="px-6 py-3 bg-[#00F0FF] text-black font-mono text-xs font-bold hover:bg-[#00d0df] transition-colors flex items-center gap-2"
          >
            <span>{t("作品一覧を見る", "View Works")}</span>
            <ExternalLink size={14} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
