"use client";

import Hero from "./comporment/Hero";
import ProfileBox from "./comporment/ProfileBox";
import Achievements from "./comporment/Achievements";
import ContactSection from "./comporment/ContactSection";

export default function Home() {
  return (
    <main className="w-full px-4 sm:px-6 md:px-16 py-6 md:py-12 max-w-[1600px] mx-auto overflow-x-hidden">
      {/* Heroセクション */}
      <section className="w-full mb-12 md:mb-24">
        <Hero />
      </section>

      {/* 作品セクション */}
      <div className="mb-8">
        <Achievements />
      </div>

      {/* プロフィールセクション */}
      <section className="w-full pt-8 md:pt-12 border-t border-gray-900">
        <ProfileBox />
      </section>

      {/* お問い合わせ & 支援セクション */}
      <section className="w-full pt-8 md:pt-12 border-t border-gray-900">
        <ContactSection />
      </section>
    </main>
  );
}
