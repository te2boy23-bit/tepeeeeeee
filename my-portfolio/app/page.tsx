"use client";

import { useState } from "react";
import { ArrowRight, Star, Terminal } from "lucide-react";
import Link from "next/link";
import Hero from "./comporment/Hero";
import ProfileBox from "./comporment/ProfileBox";

type Option = {
  label: string;
  value: string;
};

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<Option | null>(null);

  const works = [
    {
      id: "001_FEATURED",
      num: "01",
      tag: "ACTIVE",
      title: "UNDOKAI_OS (成蹊小学校 運動会)",
      year: "2024",
      description:
        "伝統的な運動会をデジタル技術で拡張するプロジェクト。センサーとリアルタイムビジュアライゼーションを用いた、新たな競技体験のプロトタイプ。",
      tech: ["ARDUINO", "UNITY", "REALTIME_GL"],
      icon: <Star size={16} className="text-[#00F0FF]" />,
    },
    {
      id: "002_SYSTEM",
      num: "02",
      tag: "SYSTEM",
      title: "HANDMADE_CORE",
      year: "2023",
      description:
        "職人の手仕事とアルゴリズムの融合を探求するインスタレーション。不完全さと精密さの対比を、木工とプログラミングの交差地点で表現。",
      tech: ["P5.JS", "DIGITAL_FABRICATION", "REACT"],
      icon: <Terminal size={16} className="text-[#BC13FE]" />,
    },
  ];

  return (
    <div className="w-full px-6 md:px-16 py-12 space-y-24 max-w-[1600px] mx-auto">
      {/* 1. ヒーローセクション */}
      <section className="w-full">
        <Hero selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      </section>

      {/* 2. 制作実績セクション */}
      <section className="space-y-10 w-full">
        <div className="flex items-center justify-between border-b border-gray-900 pb-4">
          <h2 className="text-sm tracking-[0.3em] text-gray-500 font-bold font-mono">
            SELECTED_WORKS //
          </h2>
          <span className="text-xs font-mono text-gray-600">PAGE_01 // 02</span>
        </div>

        {/* 💡 ここを grid-cols-1 md:grid-cols-2 に変更して綺麗に横並びにします */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-stretch">
          {works.map((work) => (
            <div
              key={work.id}
              className="group relative border border-gray-800 bg-[#0c0c0c]/60 p-8 flex flex-col justify-between space-y-8 backdrop-blur-sm transition-all duration-500 hover:border-[#00F0FF]/60 hover:shadow-[0_0_30px_rgba(0,240,255,0.05)] hover:-translate-y-1"
            >
              {/* カードホバー時のネオンコーナーデコレーション */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-transparent group-hover:border-[#00F0FF] transition-all" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-transparent group-hover:border-[#BC13FE] transition-all" />

              <div className="space-y-6">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-500 tracking-wider">
                    {work.num} // {work.tag}
                  </span>
                  <span className="flex items-center gap-2 text-gray-400 font-bold bg-gray-900/50 px-3 py-1 rounded-sm border border-gray-800/60">
                    {work.icon} {work.id}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 tracking-tight">
                    {work.title}
                    <span className="w-fit text-sm font-mono font-bold text-[#2FF924] bg-[#2FF924]/5 px-2 py-0.5 border border-[#2FF924]/20">
                      {work.year}
                    </span>
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-gray-400 font-sans">
                  {work.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-4 border-t border-gray-900">
                {work.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono bg-[#141414] px-3 py-1 text-gray-400 border border-gray-800 tracking-wider group-hover:text-white group-hover:border-gray-700 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ボタン要素のネオングロウ化 */}
        <div className="pt-6 flex justify-start">
          <Link
            href="/works"
            className="group inline-flex items-center gap-4 px-10 py-5 border border-[#00F0FF]/50 text-[#00F0FF] font-mono font-bold text-sm tracking-widest bg-transparent transition-all duration-300 hover:border-[#00F0FF] hover:bg-[#00F0FF]/5 hover:shadow-[0_0_25px_rgba(0,240,255,0.25)]"
          >
            プロジェクトを見る
            <ArrowRight
              size={18}
              className="transform group-hover:translate-x-1.5 transition-transform"
            />
          </Link>
        </div>
      </section>

      {/* 3. プロフィール情報セクション */}
      <section className="w-full pt-12 border-t border-gray-900">
        <ProfileBox />
      </section>
    </div>
  );
}
