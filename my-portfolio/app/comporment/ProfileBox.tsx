"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import {
  Code2,
  Sparkles,
  ArrowRight,
  GraduationCap,
  MapPin,
} from "lucide-react";
import MobileCyberAvatar from "./MobileCyberAvatar";

export default function ProfileBox() {
  const { t } = useLanguage();

  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Framer Motion",
    "Git / GitHub",
    "Vercel",
    "Cloudinary",
    "Figma",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full max-w-6xl mx-auto py-12"
    >
      {/* セクションタイトル */}
      <div className="flex items-center gap-3 mb-8">
        <span className="w-2.5 h-2.5 bg-[#00F0FF] rounded-full shadow-[0_0_8px_#00F0FF] animate-pulse"></span>
        <h2 className="text-sm font-mono tracking-[0.25em] text-[#00F0FF] uppercase font-bold">
          {t("自己紹介 // PROFILE", "PROFILE // BIOGRAPHY")}
        </h2>
      </div>

      <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#0A0A0A] border border-white/10 hover:border-[#00F0FF]/40 p-5 sm:p-7 md:p-10 overflow-hidden transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_35px_rgba(0,240,255,0.08)]">
        {/* 背景グラデーション装飾 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#00F0FF]/10 via-[#BC13FE]/5 to-transparent rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>

        {/* 四隅のサイバーHUDコーナー */}
        <span className="absolute top-2 left-2 text-[10px] font-mono text-gray-700 group-hover:text-[#00F0FF] transition-colors pointer-events-none">
          ┌
        </span>
        <span className="absolute top-2 right-2 text-[10px] font-mono text-gray-700 group-hover:text-[#00F0FF] transition-colors pointer-events-none">
          ┐
        </span>
        <span className="absolute bottom-2 left-2 text-[10px] font-mono text-gray-700 group-hover:text-[#00F0FF] transition-colors pointer-events-none">
          └
        </span>
        <span className="absolute bottom-2 right-2 text-[10px] font-mono text-gray-700 group-hover:text-[#00F0FF] transition-colors pointer-events-none">
          ┘
        </span>

        {/* 左側：基本情報・顔写真風アバター・ステータス (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-8">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <MobileCyberAvatar size={66} showPrompt={false} />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {t("泉 哲平", "Teppei Izumi")}
                </h3>
                <p className="text-xs font-mono text-[#00F0FF] mt-0.5">
                  Web Developer & Creative Engineer
                </p>
              </div>
            </div>

            <div className="space-y-2.5 font-mono text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <GraduationCap
                  size={15}
                  className="text-[#00F0FF] flex-shrink-0"
                />
                <span>
                  {t(
                    "AIプログラミング科 在籍",
                    "AI Programming Course",
                  )}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-[#00F0FF] flex-shrink-0" />
                <span>Tokyo, Japan</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles size={15} className="text-[#00F0FF] flex-shrink-0" />
                <span>
                  {t(
                    "デザインとコードを横断するクリエイター",
                    "Bridging Design & Code",
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* スキルタグ */}
          <div className="pt-2">
            <span className="block font-mono text-[11px] text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <Code2 size={13} /> {t("主要スキルスタック", "TECH STACK")}
            </span>
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.08, y: -2 }}
                  transition={{ duration: 0.15 }}
                  className="px-2.5 py-1 bg-[#050505] border border-white/10 text-gray-300 hover:border-[#00F0FF] hover:text-[#00F0FF] hover:shadow-[0_0_10px_rgba(0,240,255,0.25)] transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* 右側：詳細自己紹介＆ビジョン (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6 lg:pl-4">
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
              {t(
                "「使う人がワクワクする体験」と「課題のスマートな解決」を両立させる。",
                "Creating inspiring digital experiences that solve everyday problems with elegance.",
              )}
            </h4>
            <p className="text-xs sm:text-sm font-mono text-gray-400 leading-relaxed">
              {t(
                "学校ではAIやプログラミング、Web開発技術を学びながら、個人やチームで実用的なプロダクトの開発に没頭しています。ただ画面を作るだけでなく、ユーザーが使ったときの心地よいアニメーションやインタラクション、そしてバックエンドを含めた設計を一気通貫で手がけることを得意としています。",
                "Studying AI, programming, and web development, I immerse myself in developing practical web applications and games. I specialize in end-to-end creation—from responsive UI/UX design with smooth micro-interactions to robust backend integration.",
              )}
            </p>
            <p className="text-xs sm:text-sm font-mono text-gray-400 leading-relaxed">
              {t(
                "学校祭の特設サイト「豹牙」をはじめ、防犯啓発ゲーム「CYBER-BAIT」や共有貯金アプリ「Plan Wallet」など、常に実社会で価値を生み出すアウトプットを意識して開発に取り組んでいます。",
                "With projects like the festival portal 'Hyoga', the cybersecurity game 'CYBER-BAIT', and the shared financial app 'Plan Wallet', I strive to build software that delivers real-world value and joy.",
              )}
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-white/10">
            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-gray-400">
              <span>STATUS:</span>
              <span className="inline-flex items-center gap-1.5 text-[#00F0FF] font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span>
                </span>
                AVAILABLE FOR PROJECTS
              </span>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#00F0FF] hover:text-white transition-colors group/link"
            >
              <span>{t("詳しい自己紹介を見る", "View Full Profile")}</span>
              <ArrowRight
                size={14}
                className="transform group-hover/link:translate-x-1.5 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
