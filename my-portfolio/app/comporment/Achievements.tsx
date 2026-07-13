// components/Achievements.tsx
import React from 'react';
import { Achievement } from '@/types';

const achievements: Achievement[] = [
  {
    id: "001",
    title: "成蹊小学校 運動会デジタル拡張プロジェクト",
    category: "FEATURED",
    date: "2024.04 - 現在",
    desc: "教育現場におけるメンタルモデルに基づいたUI設計とフロントエンド実装。ユーザー体験の最大化を追求。"
  },
  {
    id: "002",
    title: "スタートアップ・デザインインターン",
    category: "SYSTEM_LOG",
    date: "2023.09 - 2024.03",
    desc: "決済システムUI改善。コンポーネントライブラリ構築による開発効率30%向上と一貫性のあるデザイン提供。"
  }
];

export default function Achievements() {
  return (
    <section className="space-y-10 w-full py-12">
      <div className="border-b border-gray-900 pb-4">
        <h2 className="text-sm tracking-[0.3em] text-gray-500 font-bold font-mono">
          SYSTEM_LOGS // ACHIEVEMENTS
        </h2>
      </div>

      <div className="grid gap-6">
        {achievements.map((item) => (
          <div key={item.id} className="border-l border-[#00F0FF]/30 pl-6 py-2 hover:border-[#00F0FF] transition-colors duration-300">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] text-[#00F0FF] font-mono">{item.category}</span>
              <span className="text-[10px] text-gray-600 font-mono">{item.date}</span>
            </div>
            <h3 className="text-lg font-bold text-gray-200 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}