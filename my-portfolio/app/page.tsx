'use client'; // Reactの機能を使うために必要
import { useState } from 'react';

export default function Home() {
  const [lang, setLang] = useState<'JP' | 'EN'>('JP');

  const content = {
    JP: {
      title: "SYNTHETIC_HORIZON",
      desc: "デジタルとフィジカルの境界線を再定義する学生クリエイター。",
      work1: "運動会Webサイト",
      work2: "ハンドメイドWebサイト"
    },
    EN: {
      title: "SYNTHETIC_HORIZON",
      desc: "Student creator redefining the boundaries between digital and physical.",
      work1: "Sports Day Web Site",
      work2: "Handmade Craft Web Site"
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-[#00F0FF] p-10 font-mono">
      {/* 言語切替ボタン */}
      <div className="flex justify-end gap-2 mb-8 text-xs">
        <button onClick={() => setLang('JP')} className={lang === 'JP' ? 'text-white underline' : 'opacity-50'}>JP</button>
        <button onClick={() => setLang('EN')} className={lang === 'EN' ? 'text-white underline' : 'opacity-50'}>EN</button>
      </div>

      <header className="mb-16 border-b border-[#00F0FF]/30 pb-8">
        <p className="text-[#BC13FE] text-sm">SYSTEM_INIT: SUCCESS</p>
        <h1 className="text-4xl font-bold tracking-tighter">{content[lang].title}</h1>
        <p className="mt-4 opacity-80">{content[lang].desc}</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-[#00F0FF]/20 p-6 hover:border-[#BC13FE] transition-all">
          <h2 className="text-xl font-bold">001_FEATURED</h2>
          <p className="mt-2 text-sm opacity-70">{content[lang].work1}</p>
        </div>
        <div className="border border-[#00F0FF]/20 p-6 hover:border-[#BC13FE] transition-all">
          <h2 className="text-xl font-bold">002_SYSTEM</h2>
          <p className="mt-2 text-sm opacity-70">{content[lang].work2}</p>
        </div>
      </section>
    </main>
  );
}