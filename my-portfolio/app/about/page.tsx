export default function About() {
  return (
    <section className="py-10 animate-fade-in">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#BC13FE]">IDENTITY_PROFILE</h2>
        <div className="h-px bg-white/20 flex-grow"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#0A0A0A] p-8 border border-white/5 hover:border-white/20 transition-colors">
          <div className="text-[10px] tracking-widest font-mono text-gray-500 mb-4">所属</div>
          <div className="font-bold text-xl">デザイン情報工学専攻</div>
          <p className="text-sm text-gray-400 mt-4 leading-relaxed">
            人間とシステムのインタラクションを研究し、次世代のインターフェース設計を探求しています。
          </p>
        </div>
        
        <div className="bg-[#0A0A0A] p-8 border border-white/5 border-l-[#00F0FF]/50">
          <div className="text-[10px] tracking-widest font-mono text-gray-500 mb-4">注力分野</div>
          <div className="font-bold text-xl text-[#00F0FF]">UX / 新技術実装</div>
          <ul className="text-sm text-gray-400 mt-4 space-y-2 font-mono">
            <li>&gt; React / Next.js</li>
            <li>&gt; WebGL / Three.js</li>
            <li>&gt; Physical Computing</li>
          </ul>
        </div>

        <div className="bg-[#0A0A0A] p-8 border border-white/5 border-l-[#BC13FE]/50">
          <div className="text-[10px] tracking-widest font-mono text-gray-500 mb-4">ビジョン</div>
          <div className="font-bold text-xl text-[#BC13FE]">未知の視覚言語の創造</div>
          <p className="text-sm text-gray-400 mt-4 leading-relaxed">
            単なる美しさではなく、コードの論理構造が生み出す新しい「体験としてのデザイン」を目指しています。
          </p>
        </div>
      </div>
    </section>
  );
}