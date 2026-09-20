"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  Coffee,
  CheckCircle2,
  ExternalLink,
  Heart,
  MessageSquare,
  Sparkles,
  Clock,
  Terminal,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "project",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const key =
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY ||
      "629437a7-c561-4a4e-bb0c-9a88fb8585a3";

    const payload = new FormData();
    payload.append("access_key", key);
    payload.append("name", formData.name);
    payload.append("email", formData.email);
    payload.append(
      "subject",
      `[ポートフォリオお問い合わせ] ${formData.subject}: ${formData.name}`,
    );
    payload.append("message", formData.message);
    payload.append("from_name", formData.name || "ポートフォリオ訪問者");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(
          data.message ||
            t(
              "送信に失敗しました。時間をおいて再度お試しいただくか、直接メールでお送りください。",
              "Submission failed. Please try again or send directly via email.",
            ),
        );
      }
    } catch {
      setErrorMessage(
        t(
          "通信エラーが発生しました。メールアプリから直接お送りください。",
          "Network error. Please send directly via your mail client.",
        ),
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full max-w-6xl mx-auto py-16 scroll-mt-24"
    >
      {/* セクションヘッダー */}
      <div className="flex items-center gap-3 mb-3">
        <span className="w-2.5 h-2.5 bg-[#00F0FF] rounded-full shadow-[0_0_8px_#00F0FF] animate-pulse"></span>
        <h2 className="text-sm font-mono tracking-[0.25em] text-[#00F0FF] uppercase font-bold">
          {t(
            "お問い合わせ & 支援 // CONTACT & SUPPORT",
            "TRANSMISSION // CONTACT & SUPPORT",
          )}
        </h2>
      </div>

      <div className="mb-10">
        <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
          {t("ご連絡・開発への応援", "Get in Touch & Support My Work")}
        </h3>
        <p className="text-gray-400 font-mono text-xs md:text-sm mt-2 max-w-2xl leading-relaxed">
          {t(
            "プロダクト開発のご相談、協業、技術的な質問などお気軽にご連絡ください。また、活動を応援いただける方は Buy Me a Coffee よりご支援いただけると大変励みになります。",
            "Feel free to reach out for project inquiries, collaborations, or tech discussions. You can also support my ongoing development journey via Buy Me a Coffee!",
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* 左側：お問い合わせフォーム (7 cols) */}
        <div className="lg:col-span-7 bg-[#0A0A0A] border border-white/10 p-6 md:p-8 relative">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 font-mono text-xs text-gray-400">
            <span className="flex items-center gap-2 text-[#00F0FF]">
              <Terminal size={14} />
              <span>TERMINAL_INPUT // DISPATCH_MESSAGE</span>
            </span>
            <span className="text-[11px] text-gray-500">ENCRYPTED_CHANNEL</span>
          </div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 flex flex-col items-center text-center space-y-4 font-mono"
            >
              <div className="w-16 h-16 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF] flex items-center justify-center text-[#00F0FF] shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="text-xl font-bold text-white">
                {t("送信が完了しました", "Transmission Successful")}
              </h4>
              <p className="text-xs text-gray-400 max-w-md leading-relaxed">
                {t(
                  "お問い合わせありがとうございます。内容を確認の上、通常24〜48時間以内にご返信いたします。",
                  "Thank you for reaching out. I will review your message and get back to you within 24-48 hours.",
                )}
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    subject: "project",
                    message: "",
                  });
                }}
                className="mt-4 px-6 py-2 border border-white/20 text-xs text-gray-300 hover:border-[#00F0FF] hover:text-[#00F0FF] transition-colors"
              >
                {t("別のメッセージを送る", "Send Another Message")}
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5 font-mono text-xs"
            >
              {/* 名前 */}
              <div>
                <label className="block text-gray-400 mb-1.5 flex items-center justify-between">
                  <span>{t("お名前", "Your Name")} *</span>
                  <span className="text-[10px] text-gray-600">INPUT_NAME</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder={t("山田 太郎 / Teppei Izumi", "John Doe")}
                  className="w-full bg-[#050505] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#00F0FF] transition-colors text-sm placeholder-gray-700"
                />
              </div>

              {/* メールアドレス */}
              <div>
                <label className="block text-gray-400 mb-1.5 flex items-center justify-between">
                  <span>{t("メールアドレス", "Email Address")} *</span>
                  <span className="text-[10px] text-gray-600">INPUT_EMAIL</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="contact@example.com"
                  className="w-full bg-[#050505] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#00F0FF] transition-colors text-sm placeholder-gray-700"
                />
              </div>

              {/* ご用件カテゴリ */}
              <div>
                <label className="block text-gray-400 mb-1.5 flex items-center justify-between">
                  <span>{t("ご用件 / 件名", "Subject / Category")}</span>
                  <span className="text-[10px] text-gray-600">SELECT_TYPE</span>
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full bg-[#050505] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#00F0FF] transition-colors text-sm"
                >
                  <option value="project">
                    {t("Web開発・制作のご相談", "Web Development Inquiry")}
                  </option>
                  <option value="recruitment">
                    {t(
                      "採用・スカウトに関するご連絡",
                      "Recruiting & Career Opportunity",
                    )}
                  </option>
                  <option value="collaboration">
                    {t(
                      "共同開発・ハッカソン・協業",
                      "Collaboration / Hackathon",
                    )}
                  </option>
                  <option value="other">
                    {t("その他のお問い合わせ", "General Inquiries")}
                  </option>
                </select>
              </div>

              {/* メッセージ */}
              <div>
                <label className="block text-gray-400 mb-1.5 flex items-center justify-between">
                  <span>{t("メッセージ本文", "Message Details")} *</span>
                  <span className="text-[10px] text-gray-600">INPUT_BODY</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder={t(
                    "ご相談内容やスケジュール、メッセージをご記入ください...",
                    "Please write your message, requirements, or inquiries here...",
                  )}
                  className="w-full bg-[#050505] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#00F0FF] transition-colors text-sm placeholder-gray-700 resize-none"
                ></textarea>
              </div>

              {/* エラー表示 */}
              {errorMessage && (
                <div className="p-3 bg-red-950/40 border border-red-500/50 text-red-400 text-xs font-mono">
                  {errorMessage}
                </div>
              )}

              {/* 送信ボタン */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-[#00F0FF] text-black font-bold tracking-widest text-xs uppercase flex items-center justify-center gap-2 hover:bg-[#00d0df] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                    <span>{t("送信中...", "TRANSMITTING...")}</span>
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    <span>{t("メッセージを送信する", "TRANSMIT MESSAGE")}</span>
                  </>
                )}
              </button>

              <div className="text-center pt-1">
                <a
                  href="mailto:contact.tepe07@gmail.com?subject=%E3%83%9D%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%AA%E3%82%AA%E7%B5%8C%E7%94%B1%E3%81%AE%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B"
                  className="text-[11px] text-gray-500 hover:text-[#00F0FF] transition-colors inline-flex items-center gap-1.5"
                >
                  <Mail size={12} />
                  <span>
                    {t(
                      "メールアプリから直接送る（contact.tepe07@gmail.com）",
                      "Send directly via Mail app (contact.tepe07@gmail.com)",
                    )}
                  </span>
                </a>
              </div>
            </form>
          )}
        </div>

        {/* 右側：Buy Me a Coffee (支援する) & ダイレクト連絡先 (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          {/* Buy Me a Coffee 支援カード */}
          <div className="bg-gradient-to-br from-[#1a1408] via-[#0e0c07] to-[#0A0A0A] border border-[#FFDD00]/30 p-6 md:p-8 relative overflow-hidden shadow-[0_0_25px_rgba(255,221,0,0.08)]">
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#FFDD00]/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#FFDD00] uppercase tracking-wider mb-4">
              <Sparkles size={14} />
              <span>{t("クリエイター支援", "SUPPORT THE CREATOR")}</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#FFDD00]/20 border border-[#FFDD00]/50 flex items-center justify-center text-[#FFDD00] shadow-[0_0_15px_rgba(255,221,0,0.3)] flex-shrink-0">
                <Coffee size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">
                  Buy Me a Coffee
                </h4>
                <span className="text-xs font-mono text-[#FFDD00]">
                  @tepeee
                </span>
              </div>
            </div>

            <p className="text-xs font-mono text-gray-300 leading-relaxed mb-6">
              {t(
                "ポートフォリオや個人開発プロダクトのサーバー・ドメイン維持費、新たな技術への学習投資を応援していただけると大変励みになります。温かいご支援をよろしくお願いいたします！",
                "Your support directly fuels my development and hosting costs for creative web apps. If you enjoy my projects, buying me a coffee means the world to me!",
              )}
            </p>

            <a
              href="https://buymeacoffee.com/tepeee"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#FFDD00] text-black font-bold font-mono text-xs tracking-wider uppercase hover:bg-[#ffea4d] hover:shadow-[0_0_20px_rgba(255,221,0,0.5)] transition-all group"
            >
              <Coffee
                size={16}
                className="group-hover:rotate-12 transition-transform"
              />
              <span>{t("Buy Me a Coffee で支援する", "Buy Me a Coffee")}</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* その他の連絡先・SNS & ステータス */}
          <div className="bg-[#0A0A0A] border border-white/10 p-6 space-y-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-gray-500 uppercase tracking-widest border-b border-white/10 pb-2">
              <MessageSquare size={14} className="text-[#00F0FF]" />
              <span>{t("ダイレクト連絡先", "DIRECT CHANNELS")}</span>
            </div>

            <div className="space-y-3 text-gray-400">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Email</span>
                <a
                  href="mailto:contact.tepe07@gmail.com"
                  className="text-[#00F0FF] hover:underline flex items-center gap-1 transition-colors"
                >
                  contact.tepe07@gmail.com <ExternalLink size={12} />
                </a>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-500">GitHub</span>
                <a
                  href="https://github.com/te2bo23-bit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#00F0FF] flex items-center gap-1 transition-colors"
                >
                  te2bo23-bit <ExternalLink size={12} />
                </a>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-500">Instagram</span>
                <a
                  href="https://instagram.com/te_ppei07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#00F0FF] flex items-center gap-1 transition-colors"
                >
                  @te_ppei07 <ExternalLink size={12} />
                </a>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-500">
                  {t("返答目安", "Response Time")}
                </span>
                <span className="text-[#00F0FF] flex items-center gap-1">
                  <Clock size={12} /> 24-48 Hours
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
