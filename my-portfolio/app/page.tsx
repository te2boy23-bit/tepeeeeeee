"use client";

import { useState } from "react";
import { ArrowRight, Star, Terminal } from "lucide-react";
import Link from "next/link";
import Hero from "./comporment/Hero";
import ProfileBox from "./comporment/ProfileBox";
// 修正: 正しいフォルダパスからインポート


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
    <main className="min-h-screen bg-[#050505] text-[#FDFCFB] font-mono selection:bg-[#00F0FF]/30">
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 space-y-16">
        {/* 1. メインヒーロー */}
        <Hero selectedItem={selectedItem} setSelectedItem={setSelectedItem} />

        {/* 2. 制作実績セクション */}
        <section className="px-8 space-y-8">
          <h2 className="text-xs tracking-widest text-gray-500 font-bold">
            SELECTED_WORKS //
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {works.map((work) => (
              <div
                key={work.id}
                className="border border-gray-800 bg-[#141414]/50 p-6 flex flex-col justify-between space-y-6 hover:border-[#00F0FF]/50 transition-colors duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">
                      {work.num} / {work.tag}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400">
                      {work.icon} {work.id}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center justify-between">
                      {work.title}
                      <span className="text-xs font-normal text-[#2FF924]">
                        {work.year}
                      </span>
                    </h3>
                  </div>

                  <p className="text-xs leading-relaxed text-gray-400">
                    {work.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {work.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] bg-gray-900 px-2 py-1 text-gray-400 border border-gray-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link
              href="/works"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#00F0FF] text-[#00F0FF] font-bold text-sm md:text-base hover:bg-[#00F0FF]/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300"
            >
              プロジェクトを見る <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        {/* 3. プロフィール情報 */}
        <section className="px-8 pt-8 border-t border-gray-900">
          <ProfileBox />
        </section>
      </div>
    </main>
  );
}
