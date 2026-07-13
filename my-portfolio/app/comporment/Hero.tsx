"use client";

import { useState } from "react";
import SelectBox from "./SelectBox";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";

export default function Hero() {
  const [selectedItem, setSelectedItem] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const myOptions = [
    { label: "プロジェクト一覧", value: "projects" },
    { label: "技術スタック", value: "stack" },
    { label: "アーカイブ", value: "archive" },
    { label: "自己紹介", value: "about" },
  ];

  return (
    <section className="flex min-h-[60vh] items-center bg-[#050505] text-white">
      <div className="flex w-full flex-col items-center justify-between gap-12 lg:flex-row">
        {/* 左側：テキストエリア */}
        <div className="w-full space-y-8">
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
              onChange={setSelectedItem}
              placeholder="カテゴリを選択..."
            />
          </div>
        </div>

        {/* 右側：Canvasエリア */}
        <PixelatedCanvas
          src="/img/jibunn.jpg"
          responsive
          cellSize={4}
          dotScale={1}
          backgroundColor="#050505"
          shape="square"
          tintColor="#000000"
          tintStrength={0.25}
          interactive
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
