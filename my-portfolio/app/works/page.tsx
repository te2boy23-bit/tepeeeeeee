import { Star, Terminal } from "lucide-react";

export default function Works() {
  return (
    <section className="py-10 animate-fade-in">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#00F0FF]">
          SELECTED_WORKS
        </h2>
        <div className="h-px bg-white/20 flex-grow"></div>
        <span className="text-xs font-mono text-gray-500">02 / ACTIVE</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* 作品 1 */}
        <a
          href="#"
          className="group block bg-[#0A0A0A] border border-white/10 hover:border-[#00F0FF] transition-all duration-500 p-4 md:p-6 hover:-translate-y-1"
        >
          <div className="aspect-video bg-[#111] mb-6 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-[#00F0FF]/20 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"></div>
            <div className="absolute inset-0 border border-white/5 m-4"></div>
          </div>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl md:text-2xl font-bold leading-tight">
              UNDOKAI_OS
              <br />
              <span className="text-sm text-gray-400 font-normal tracking-wide">
                (成蹊小学校 運動会)
              </span>
            </h3>
            <span className="text-[10px] font-mono text-[#00F0FF] flex items-center gap-1 bg-[#00F0FF]/10 px-2 py-1">
              <Star size={10} /> 001_FEATURED
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            伝統的な運動会をデジタル技術で拡張するプロジェクト。センサーとリアルタイムビジュアライゼーションを用いた、新たな競技体験のプロトタイプ。
          </p>
          <div className="flex flex-wrap gap-2 font-mono text-[10px] text-gray-500">
            <span className="px-2 py-1 border border-white/10">ARDUINO</span>
            <span className="px-2 py-1 border border-white/10">UNITY</span>
            <span className="px-2 py-1 border border-white/10">
              REALTIME_GL
            </span>
          </div>
        </a>

        {/* 作品 2 */}
        <a
          href="#"
          className="group block bg-[#0A0A0A] border border-white/10 hover:border-[#BC13FE] transition-all duration-500 p-4 md:p-6 hover:-translate-y-1"
        >
          <div className="aspect-video bg-[#111] mb-6 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-[#BC13FE]/20 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"></div>
            <div className="absolute inset-0 border border-white/5 m-4"></div>
          </div>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl md:text-2xl font-bold leading-tight">
              HANDMADE_CORE
            </h3>
            <span className="text-[10px] font-mono text-[#BC13FE] flex items-center gap-1 bg-[#BC13FE]/10 px-2 py-1">
              <Terminal size={10} /> 002_SYSTEM
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            職人の手仕事とアルゴリズムの融合を探求するインスタレーション。不完全さと精密さの対比を、木工とプログラミングの交差地点で表現。
          </p>
          <div className="flex flex-wrap gap-2 font-mono text-[10px] text-gray-500">
            <span className="px-2 py-1 border border-white/10">P5.JS</span>
            <span className="px-2 py-1 border border-white/10">
              DIGITAL_FABRICATION
            </span>
            <span className="px-2 py-1 border border-white/10">REACT</span>
          </div>
        </a>
      </div>
    </section>
  );
}
