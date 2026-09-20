import React from "react";
import Link from "next/link";
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
      date: t("2024.04 - 現在", "2024.04 - Present"),
      desc: t(
        "チームの要望を形にするためデザインからシステム構築まで担当。最高の瞬間をつくるための裏側を、Webの力で支えています！",
        "Designed and engineered full-stack portal platform with countdown, member profiles, and live photo gallery API.",
      ),
      imageUrl: "/img/logo.jpg",
      link: "https://akadan.vercel.app/",
      detailPage: "/works/akadan",
    },
    {
      id: "002",
      title: "CYBER-BAIT",
      category: "SYSTEM_LOG",
      date: t("2024 - 稼働中", "2024 - Active"),
      desc: t(
        "特殊詐欺や闇バイトの手口を疑似体験し防犯リテラシーを高める、ブラウザ型潜入捜査シミュレーションゲーム。チャットで証拠を引き出し逮捕状を請求する本格体験。",
        "Cybersecurity simulation game educating against fraud & scams through interactive undercover chat investigations.",
      ),
      imageUrl: "/img/cyber-bait.png",
      link: "https://cyber-bait.com",
      detailPage: "/works/cyber-bait",
    },
    {
      id: "003",
      title: "Plan Wallet",
      category: "FEATURED",
      date: t("2024 - 稼働中", "2024 - Active"),
      desc: t(
        "旅行や同棲、趣味の資金など、恋人や友人と一緒にお金を貯めながら、目標までのTodoを楽しく管理・可視化できる共有型Webアプリケーション。",
        "Collaborative savings & task management web app helping friends and couples achieve joint goals together.",
      ),
      imageUrl: "/img/plan-wallet.png",
      link: "https://plan-wallet.com",
      detailPage: "/works/plan-wallet",
    },
  ];

  return (
    <section className="space-y-10 w-full py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((item) => (
          <div
            key={item.id}
            className="group relative flex flex-col border border-gray-800 bg-[#050505] hover:border-[#00F0FF] transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#00F0FF] group-hover:w-full transition-all duration-500 z-10"></div>

            {/* 画像エリア（クリックで詳細ページへ） */}
            <Link
              href={item.detailPage}
              className="relative w-full aspect-video border-b border-gray-800 group-hover:border-[#00F0FF] overflow-hidden transition-colors duration-500 bg-gray-900 block"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90"></div>
            </Link>

            {/* テキストコンテンツ */}
            <div className="flex flex-col p-6 space-y-4 flex-grow">
              <div className="flex justify-between items-center text-xs font-mono tracking-wider">
                <span className="text-[#00F0FF] bg-[#00F0FF]/10 px-2 py-1 border border-[#00F0FF]/30">
                  {item.category}
                </span>
                <span className="text-gray-500">{item.date}</span>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-[#00F0FF] transition-colors duration-300 line-clamp-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed font-mono flex-grow">
                {item.desc}
              </p>

              {/* ボタンエリア（詳細ページ用 ＆ 外部サイト用） */}
              <div className="pt-4 flex items-center gap-3 border-t border-gray-900/80">
                {/* 内部の詳細ページへ飛ぶボタン */}
                <Link
                  href={item.detailPage}
                  className="flex-1 text-center py-2 px-3 border border-gray-800 bg-[#050505] text-white font-mono text-xs tracking-wider hover:border-[#00F0FF] hover:text-[#00F0FF] transition-colors duration-300"
                >
                  {t("詳細を見る", "View Details")}
                </Link>
                {/* 外部の特設サイトへ飛ぶボタン */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 border border-[#00F0FF]/30 bg-[#00F0FF]/10 text-[#00F0FF] font-mono text-xs hover:bg-[#00F0FF]/20 transition-colors duration-300"
                  title="サイトを開く"
                >
                  {t("外部サイト ↗", "Live Site ↗")}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-4">
        <Link
          href="/works"
          className="group relative inline-flex items-center gap-3 px-8 py-4 border border-gray-800 bg-[#050505] text-white font-mono text-sm tracking-widest hover:border-[#00F0FF] hover:text-[#00F0FF] transition-all duration-300 overflow-hidden"
        >
          <span className="absolute inset-0 bg-[#00F0FF]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          <span className="relative z-10">
            {t("作品一覧はこちら", "View All Works")}
          </span>
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
        </Link>
      </div>
    </section>
  );
}
