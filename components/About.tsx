import Image from "next/image";
import { INTERIOR_IMAGES, SALON_INFO } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-20 px-5 bg-[#faf8f5]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-handwritten text-5xl md:text-6xl text-[#4d6b44] mb-1 leading-none">
          About
        </h2>
        <p className="text-[#3d2b1f] text-sm font-bold tracking-widest mb-10">
          サロン紹介
        </p>

        {/* Interior photos */}
        <div className="grid grid-cols-3 gap-2 md:gap-3 mb-10">
          {INTERIOR_IMAGES.map((img) => (
            <div key={img.id} className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 33vw, 280px"
              />
            </div>
          ))}
        </div>

        {/* Concept text */}
        <div className="mb-8">
          {SALON_INFO.conceptText.split("\n").map((line, i) => (
            <p key={i} className="text-sm md:text-base text-[#5a4a3a] leading-relaxed mb-2">
              {line}
            </p>
          ))}
        </div>

        {/* Owner comment */}
        <div className="border-l-4 border-[#4d6b44] pl-4 py-2 bg-[#f5f0e8] rounded-r-xl mb-8">
          <p className="text-sm text-[#5a4a3a] leading-relaxed mb-3 italic">
            「{SALON_INFO.ownerComment.split("\n").map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}」
          </p>
          <p className="text-xs font-bold text-[#4d6b44]">
            {SALON_INFO.owner} / {SALON_INFO.ownerTitle}
          </p>
        </div>

        {/* サロン名の由来 */}
        <div className="flex flex-col items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
            <ellipse cx="60" cy="36" rx="9" ry="18" fill="#4d6b44" opacity="0.7" transform="rotate(0 60 60)"/>
            <ellipse cx="60" cy="36" rx="9" ry="18" fill="#4d6b44" opacity="0.7" transform="rotate(72 60 60)"/>
            <ellipse cx="60" cy="36" rx="9" ry="18" fill="#4d6b44" opacity="0.7" transform="rotate(144 60 60)"/>
            <ellipse cx="60" cy="36" rx="9" ry="18" fill="#4d6b44" opacity="0.7" transform="rotate(216 60 60)"/>
            <ellipse cx="60" cy="36" rx="9" ry="18" fill="#4d6b44" opacity="0.7" transform="rotate(288 60 60)"/>
            <circle cx="60" cy="60" r="10" fill="#e8dcc8"/>
            <circle cx="60" cy="60" r="6" fill="#4d6b44"/>
          </svg>
          <p className="text-xs text-[#8a7a60] leading-relaxed text-center">
            「Pua」は花、「Bliss」は幸福・幸せという意味。<br />
            花のようにやさしく、美しく。<br />
            わんちゃんにも飼い主さまにも、幸せな時間をお届けしたいという想いを込めて。
          </p>
        </div>
      </div>
    </section>
  );
}
