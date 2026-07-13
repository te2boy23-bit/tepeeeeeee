"use client";

import Hero from "./comporment/Hero";
import ProfileBox from "./comporment/ProfileBox";
import Achievements from "./comporment/Achievements"; // インポート追加
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";

export default function Home() {
  const works = [
    /* ... worksの定義 ... */
  ];

  return (
    <main className="w-full px-6 md:px-16 py-12 space-y-24 max-w-[1600px] mx-auto">
      <section className="w-full">
        <Hero />
      </section>

      {/* 2. 制作実績セクション */}
      <section className="space-y-10 w-full">
        <div className="flex items-center justify-between border-b border-gray-900 pb-4">
          <h2 className="text-sm tracking-[0.3em] text-gray-500 font-bold font-mono">
            SELECTED_WORKS //
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {works.map((work) => (
            <div
              key={work.id}
              className="border border-gray-800 bg-[#0c0c0c]/60 p-8 space-y-6"
            >
              <div className="w-full aspect-[16/10] border border-gray-800">
                <PixelatedCanvas
                  src={work.image}
                  responsive
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-white">{work.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 新しく追加したAchievements */}
      <Achievements />

      <section className="w-full pt-12 border-t border-gray-900">
        <ProfileBox />
      </section>
    </main>
  );
}
