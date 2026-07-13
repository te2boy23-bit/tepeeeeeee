"use client";

import { useState, useRef, useEffect } from "react";

type Option = {
  label: string;
  value: string;
};

type SelectBoxProps = {
  options: Option[];
  value: Option | null;
  onChange: (value: Option) => void;
  placeholder?: string;
};

export default function SelectBox({
  options,
  value,
  onChange,
  placeholder = "選択してください",
}: SelectBoxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-64 text-sm font-medium" ref={dropdownRef}>
      {/* クリックして開閉するボタン */}
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-md border border-gray-800 bg-[#141414] px-4 py-2.5 text-gray-200 transition-colors focus:border-[#00F0FF] focus:outline-none focus:ring-1 focus:ring-[#00F0FF]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-mono">{value ? value.label : placeholder}</span>
        <svg
          className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* 開いた時に出る選択肢のリスト */}
      {isOpen && (
        <ul className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-md border border-gray-800 bg-[#141414] shadow-xl shadow-black/80">
          {options.map((option) => (
            <li
              key={option.value}
              className="cursor-pointer px-4 py-2.5 font-mono text-gray-400 transition-colors hover:bg-[#00F0FF]/10 hover:text-[#00F0FF]"
              onClick={() => {
                onChange(option); // 親のHeroに選んだ項目を伝える
                setIsOpen(false); // メニューを閉じる
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
