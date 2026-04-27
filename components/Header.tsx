"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { LOGO_IMAGE, SALON_INFO } from "@/lib/data";

const NAV_ITEMS = [
  { label: "サロン紹介", href: "#about" },
  { label: "サービス", href: "#service" },
  { label: "ギャラリー", href: "#gallery" },
  { label: "アクセス", href: "#access" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#4b6345] shadow-sm" : "bg-[#4b6345]"
        } border-b border-[#3d5534]`}
      >
        <div className="max-w-5xl mx-auto px-5 h-16 grid grid-cols-3 items-center">
          {/* Left: empty */}
          <div />

          {/* Center: Logo */}
          <div className="flex justify-center">
            <a
              href="#top"
              onClick={() => handleNavClick("#top")}
              className="flex items-center"
            >
              <div className="relative h-14 w-44 flex-shrink-0">
                <Image
                  src={LOGO_IMAGE.src}
                  alt={LOGO_IMAGE.alt}
                  fill
                  className="object-contain"
                  sizes="176px"
                />
              </div>
            </a>
          </div>

          {/* Right: Desktop nav / hamburger (mobile) */}
          <div className="flex justify-end items-center">
            <nav className="hidden md:flex items-center gap-7">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-xs text-white hover:text-white/70 transition-colors tracking-wide"
                >
                  {item.label}
                </button>
              ))}
              <a
                href={SALON_INFO.lineUrl}
                className="bg-white text-[#4b6345] text-xs font-bold px-4 py-2 rounded-full hover:bg-white/80 transition-colors"
              >
                LINEで予約
              </a>
            </nav>
            <button
              className="md:hidden flex flex-col gap-[5px] p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="メニュー"
            >
              <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />
        {/* Drawer */}
        <nav
          className={`absolute top-16 left-0 right-0 bg-[#faf8f5] border-b border-[#e8dcc8] transition-transform duration-300 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="block w-full text-left px-6 py-4 text-sm text-[#3d2b1f] border-b border-[#e8dcc8] hover:bg-[#f5f0e8] transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="p-4">
            <a
              href={SALON_INFO.lineUrl}
              className="block bg-[#06C755] text-white text-sm font-bold text-center py-3 rounded-full"
            >
              LINEで予約する
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
