import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full px-6 md:px-12 py-10 border-t border-white/5 bg-[#050505] relative z-10">
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-mono text-gray-600">
        <span className="text-[#2FF924] font-bold tracking-widest drop-shadow-[0_0_5px_rgba(47,249,36,0.3)]">
          ***SYNTHETIC_HORIZON***
        </span>
        <div className="flex gap-8">
          <Link href="/terminal" className="hover:text-[#00F0FF] transition-colors">ターミナル</Link>
          <Link href="/logs" className="hover:text-[#00F0FF] transition-colors">ログ</Link>
          <Link href="/network" className="hover:text-[#00F0FF] transition-colors">ネットワーク</Link>
        </div>
        <span>©2026_SYNTHETIC_HORIZON_SYSTEMS</span>
      </div>
    </footer>
  );
}