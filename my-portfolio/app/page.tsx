"use client";

import { useEffect, useState } from "react";
import Hero from "./comporment/Hero";
import ProfileBox from "./comporment/ProfileBox";
import Achievements from "./comporment/Achievements";

export default function Home() {
  const [specialEffect, setSpecialEffect] = useState(false);

  useEffect(() => {
    // 同じユーザーがリロードするたびにカウントが増えないよう sessionStorage で制御
    if (sessionStorage.getItem("counted")) return;

    async function countVisitor() {
      try {
        const res = await fetch("/api/counter", { method: "POST" });
        const data = await res.json();

        sessionStorage.setItem("counted", "true");

        // 1000人目だった場合の特別演出発火
        if (data.isMilestone) {
          setSpecialEffect(true);
        }
      } catch (error) {
        console.error("カウンターの更新に失敗しました", error);
      }
    }

    countVisitor();
  }, []);

  return (
    <main className="w-full px-6 md:px-16 py-12 max-w-[1600px] mx-auto relative">
      {/* 1000人目限定の特別演出（モーダルなど） */}
      {specialEffect && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 text-white p-4">
          <div className="text-center p-8 bg-red-600 rounded-xl shadow-2xl max-w-md w-full animate-bounce">
            <h2 className="text-3xl font-bold mb-4">🎉 祝・1000人目の訪問者！ 🎉</h2>
            <p className="mb-6">おめでとうございます！記念すべき1000人目のゲスト様です！</p>
            <button 
              onClick={() => setSpecialEffect(false)}
              className="px-6 py-2 bg-white text-red-600 font-bold rounded-lg shadow hover:bg-gray-100 transition-colors"
            >
              サイトを見る
            </button>
          </div>
        </div>
      )}

      {/* Heroセクション */}
      <section className="w-full mb-24">
        <Hero />
      </section>

      {/* 作品と所属の間 */}
      <div className="mb-8">
        <Achievements />
      </div>

      {/* プロフィールセクション */}
      <section className="w-full pt-6 border-t border-gray-900">
        <ProfileBox />
      </section>
    </main>
  );
}