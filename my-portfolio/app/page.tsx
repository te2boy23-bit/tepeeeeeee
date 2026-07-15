"use client";

import Hero from "./comporment/Hero";
import ProfileBox from "./comporment/ProfileBox";
import Achievements from "./comporment/Achievements";

export default function Home() {
  return (
    // 💡 `space-y-24` を削除しました！これで強制的な大余白が消えます。
    <main className="w-full px-6 md:px-16 py-12 max-w-[1600px] mx-auto">
      {/* Heroセクション（下には広めの余白 mb-24 を設定） */}
      <section className="w-full mb-24">
        <Hero />
      </section>

      {/* 💡 作品と所属の間を詰めるために mb-8 にしています */}
      <div className="mb-8">
        <Achievements />
      </div>

      {/* 💡 pt-12 を pt-6 に減らして、線と文字の隙間も少し縮めました */}
      <section className="w-full pt-6 border-t border-gray-900">
        <ProfileBox />
      </section>
    </main>
  );
}
