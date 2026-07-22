// components/Achievements.tsx
import React from "react";

const achievements = [
  {
    id: "001",
    title: "三幸フェスティバル（赤団）特設サイト",
    category: "FEATURED",
    date: "2024.04 - 現在",
    desc: "チームのメンバーからの「こんな機能が欲しい」「もっと盛り上げたい」という要望を形にするため、デザインからシステム構築まで担当しています。最高の瞬間をつくるための裏側を、Webの力で支えています！",
    // ここをプロジェクト内の画像パスに変更
    imageUrl: "img/logo.jpg",
  },
];

export default function Achievements() {
  return (
    <section className="space-y-10 w-full py-12">
      <div className="border-b border-gray-900 pb-4">
        <h2 className="text-sm tracking-[0.3em] text-gray-500 font-bold font-mono">
          SYSTEM_LOGS // ACHIEVEMENTS
        </h2>
      </div>

      {/* 横3列のグリッドレイアウト（現在は1個だけ表示されますが、追加すると横に最大3列まで並びます） */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((item) => (
          <div
            key={item.id}
            className="group relative flex flex-col border border-gray-800 bg-[#050505] hover:border-[#00F0FF] transition-all duration-500 overflow-hidden"
          >
            {/* ホバー時の上部ネオンライン */}
            <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#00F0FF] group-hover:w-full transition-all duration-500 z-10"></div>

            {/* 画像エリア */}
            <div className="relative w-full aspect-video border-b border-gray-800 group-hover:border-[#00F0FF] overflow-hidden transition-colors duration-500 bg-gray-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              {/* 画像へのグラデーションオーバーレイ */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90"></div>
            </div>

            {/* テキストコンテンツ */}
            <div className="flex flex-col p-6 space-y-4 flex-grow">
              {/* メタ情報（カテゴリと日付） */}
              <div className="flex justify-between items-center text-xs font-mono tracking-wider">
                <span className="text-[#00F0FF] bg-[#00F0FF]/10 px-2 py-1 border border-[#00F0FF]/30">
                  {item.category}
                </span>
                <span className="text-gray-500">{item.date}</span>
              </div>

              {/* タイトル */}
              <h3 className="text-lg font-bold text-white group-hover:text-[#00F0FF] transition-colors duration-300 line-clamp-2">
                {item.title}
              </h3>

              {/* 説明文 */}
              <p className="text-sm text-gray-400 leading-relaxed font-mono flex-grow">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ほかの一覧を見るボタン */}
      <div className="flex justify-center pt-4">
        <a
          href="/works" // 遷移先のパス（必要に応じて変更してください）
          className="group relative inline-flex items-center gap-3 px-8 py-4 border border-gray-800 bg-[#050505] text-white font-mono text-sm tracking-widest hover:border-[#00F0FF] hover:text-[#00F0FF] transition-all duration-300 overflow-hidden"
        >
          {/* ホバー時の背景エフェクト */}
          <span className="absolute inset-0 bg-[#00F0FF]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>

          <span className="relative z-10">一覧はこちら</span>

          {/* 矢印アイコン */}
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
