"use client";

import Hero from "./comporment/Hero";
import ProfileBox from "./comporment/ProfileBox";
import Achievements from "./comporment/Achievements";
import ContactSection from "./comporment/ContactSection";

export default function Home() {
  return (
    <main className="w-full px-6 md:px-16 py-12 max-w-[1600px] mx-auto">
      {/* Heroセクション（下には広めの余白 mb-24 を設定） */}
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

      {/* お問い合わせ & 支援セクション */}
      <section className="w-full pt-6 border-t border-gray-900">
        <ContactSection />
      </section>
    </main>
  );
}
