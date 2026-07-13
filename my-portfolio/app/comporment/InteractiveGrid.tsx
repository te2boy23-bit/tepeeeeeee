"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function InteractiveGrid() {
  const [isMobile, setIsMobile] = useState(true);

  // マウスの物理座標
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // カーソルの追従を滑らかにするSpring設定
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // モバイル端末では重くなるため、マウス追従効果を無効化する判定
    setIsMobile(window.innerWidth < 768);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (isMobile) {
    // モバイルは通常の静的グリッド背景のみ
    return (
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none z-0" />
    );
  }

  return (
    <>
      {/* 1. マウスに反応して光る放射状のバックライト（波紋効果） */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0 mix-blend-screen"
        style={{
          background: `radial-gradient(600px circle at var(--x, -100px) var(--y, -100px), rgba(0, 240, 255, 0.08), transparent 80%)`,
        }}
        animate={{
          // MotionValueをCSS変数にブリッジして動的背景を作る
          style: {
            "--x": `${mouseX.get()}px`,
            "--y": `${mouseY.get()}px`,
          } as any,
        }}
      />

      {/* 2. 基本のデジタルグリッド線 */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-20 pointer-events-none z-0" />

      {/* 3. カスタムネオンカーソル ＆ トレイルリング */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-[#00F0FF] rounded-full pointer-events-none z-50 mix-blend-difference shadow-[0_0_10px_#00F0FF]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-[#00F0FF]/50 rounded-full pointer-events-none z-50 shadow-[0_0_15px_rgba(0,240,255,0.3)]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{ type: "spring", damping: 15, stiffness: 150 }}
      />
    </>
  );
}
