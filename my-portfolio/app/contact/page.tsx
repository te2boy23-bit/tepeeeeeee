"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import ContactSection from "../comporment/ContactSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 md:px-16 py-12 max-w-[1600px] mx-auto z-10 relative">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-[#00F0FF] transition-colors"
        >
          <ArrowLeft size={14} /> SYSTEM_RETURN {"//"} TOP
        </Link>
      </motion.div>

      <ContactSection />
    </main>
  );
}
