"use client";

import { SALON_INFO } from "@/lib/data";

export default function StickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#8aab8a] px-5 py-3 flex items-center justify-between shadow-2xl">
      <div className="flex items-center gap-2">
        <span className="text-xl">🐾</span>
        <span className="text-white text-xs font-bold">ご予約はLINEで</span>
      </div>
      <a
        href={SALON_INFO.lineUrl}
        className="bg-white text-[#3d2b1f] text-xs font-bold px-5 py-2.5 rounded-full hover:bg-[#faf8f5] transition-colors shadow"
      >
        LINEで予約する
      </a>
    </div>
  );
}
