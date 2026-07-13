export default function ProfileBox() {
  return (
    <div className="grid gap-8 sm:grid-cols-3 border-t border-gray-900 pt-12 mt-12 w-full max-w-6xl mx-auto">
      {/* 所属 */}
      <div className="border-l border-gray-700 pl-6 py-1">
        <span className="block font-mono text-[11px] tracking-widest text-gray-500 uppercase mb-2">
          所属
        </span>
        <div className="text-xl font-bold tracking-wide text-white font-sans">
          デザイン情報工学専攻
        </div>
      </div>

      {/* 注力分野 */}
      <div className="border-l border-gray-700 pl-6 py-1">
        <span className="block font-mono text-[11px] tracking-widest text-gray-500 uppercase mb-2">
          注力分野
        </span>
        <div className="text-xl font-bold tracking-wide text-white font-sans">
          UX / 新技術実装
        </div>
      </div>

      {/* ビジョン */}
      <div className="border-l border-gray-700 pl-6 py-1">
        <span className="block font-mono text-[11px] tracking-widest text-gray-500 uppercase mb-2">
          ビジョン
        </span>
        <div className="text-xl font-bold tracking-wide text-white font-sans">
          未知の視覚言語の創造
        </div>
      </div>
    </div>
  );
}