"use client";

import Hero from "./comporment/Hero";
import ProfileBox from "./comporment/ProfileBox";
import Achievements from "./comporment/Achievements"; // インポート追加

export default function Home() {
  return (
    <main className="w-full px-6 md:px-16 py-12 space-y-24 max-w-[1600px] mx-auto">
      <section className="w-full">
        <Hero />
      </section>

      {/* 新しく追加したAchievements */}
      <Achievements />

      <section className="w-full pt-12 border-t border-gray-900">
        <ProfileBox />
      </section>
    </main>
  );
}
