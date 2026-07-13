import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <section className="py-20 md:py-32 flex flex-col justify-center min-h-[70vh]">
      <div className="text-xs font-mono text-[#2FF924] mb-6 tracking-widest">
        SYSTEM_INIT: SUCCESS
      </div>

      <h1 className="text-5xl md:text-8xl font-extrabold font-mono tracking-tighter mb-8 leading-[1.1] text-[#FDFCFB]">
        SYNTHETIC_
        <br />
        <span className="text-[#00F0FF]">HORIZON</span>
      </h1>

      <p className="max-w-xl text-[#FDFCFB] text-base md:text-lg mb-12 leading-relaxed">
        デジタルとフィジカルの境界線を再定義する学生クリエイター。
        <br />
        テクノロジーと感性の融合により、未だ見ぬ体験を設計します。
      </p>

      <div>
        <Link
          href="/works"
          className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#00F0FF] text-[#00F0FF] font-bold text-sm md:text-base hover:bg-[#00F0FF]/10 transition-all duration-300"
        >
          プロジェクトを見る <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}
