"use client";

import SelectBox from "./SelectBox";

type HeroProps = {
  selectedItem: { label: string; value: string } | null;
  setSelectedItem: (value: { label: string; value: string } | null) => void;
};

export default function Hero({ selectedItem, setSelectedItem }: HeroProps) {
  const myOptions = [
    { label: "プロジェクト一覧", value: "projects" },
    { label: "技術スタック", value: "stack" },
    { label: "アーカイブ", value: "archive" },
    { label: "自己紹介", value: "about" },
  ];

  return (
    <section className="flex flex-col justify-center bg-[#050505] px-8 pt-24 pb-12 text-white select-none">
      <div className="max-w-3xl space-y-8">
        <div className="inline-block rounded border border-[#00F0FF]/30 bg-[#00F0FF]/5 px-3 py-1 text-xs font-mono tracking-widest text-[#00F0FF]">
          SYSTEM_INIT: SUCCESS
        </div>

        <h1 className="font-mono text-5xl font-bold tracking-tighter sm:text-7xl">
          SYNTHETIC_
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#BC13FE]">
            HORIZON
          </span>
        </h1>

        <p className="max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
          デジタルとフィジカルの境界線を再定義する学生クリエイター。
          テクノロジーと感性の融合により、未だ見ぬ体験を設計します。
        </p>

        <div className="pt-4 space-y-3">
          <label className="block font-mono text-xs tracking-widest text-gray-500">
            CATEGORY_SELECT //
          </label>
          <SelectBox
            options={myOptions}
            value={selectedItem}
            onChange={(value) => setSelectedItem(value)}
            placeholder="カテゴリを選択..."
          />
        </div>
      </div>
    </section>
  );
}