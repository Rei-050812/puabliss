import { SERVICES, OPTIONS, SERVICE_NOTE, SALON_INFO } from "@/lib/data";

export default function Services() {
  return (
    <section id="service" className="py-20 px-5 bg-[#f5f0e8]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-handwritten text-5xl md:text-6xl text-[#4d6b44] mb-1 leading-none">
          Service
        </h2>
        <p className="text-[#3d2b1f] text-sm font-bold tracking-widest mb-10">
          サービス紹介
        </p>

        {/* 料金テーブル */}
        <div className="flex flex-col gap-6 mb-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-[#faf8f5] border border-[#e0d4c0] rounded-2xl overflow-hidden"
            >
              {/* コース名 */}
              <div className="px-5 py-4 border-b border-[#e0d4c0]">
                <h3 className="text-sm font-bold text-[#3d2b1f]">
                  {service.name}
                </h3>
                <p className="text-xs text-[#8a7a60] mt-0.5">{service.description}</p>
              </div>
              {/* 犬種別料金 */}
              <div className="divide-y divide-[#f0e8d8]">
                {service.prices.map((item) => (
                  <div key={item.breed} className="flex items-center justify-between px-5 py-3">
                    <span className="text-sm text-[#3d2b1f]">{item.breed}</span>
                    <span className="text-sm font-bold text-[#4d6b44]">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* オプション */}
        <div className="bg-[#faf8f5] border border-[#e0d4c0] rounded-2xl overflow-hidden mb-6">
          <div className="px-5 py-4 border-b border-[#e0d4c0]">
            <h3 className="text-sm font-bold text-[#3d2b1f]">
              オプションメニュー
            </h3>
          </div>
          <div className="divide-y divide-[#f0e8d8]">
            {OPTIONS.map((option) => (
              <div key={option.name} className="flex items-center justify-between px-5 py-3">
                <span className="text-sm text-[#3d2b1f]">{option.name}</span>
                <span className="text-sm font-bold text-[#4d6b44]">{option.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 送迎 */}
        <div className="text-left flex items-center gap-2">
          <svg width="28" height="20" viewBox="0 0 56 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
            <path d="M4 26 C3 26 2 25 2 24 L2 20 C2 19 3 18 4 18 L6 18 L10 10 C11 8 13 7 15 7 L36 7 C38 7 40 8 41 10 L45 18 L52 18 C53 19 54 19 54 21 L54 24 C54 25 53 26 52 26 Z" stroke="#4d6b44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 17 L17 10 C17.5 9 18.5 8.5 19.5 8.5 L32 8.5 C33 8.5 34 9 34.5 10 L38 17 Z" stroke="#4d6b44" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#e8dcc8" fillOpacity="0.5"/>
            <line x1="26" y1="9" x2="26" y2="17" stroke="#4d6b44" strokeWidth="1.2" strokeLinecap="round"/>
            <circle cx="42" cy="27" r="5.5" stroke="#4d6b44" strokeWidth="2" fill="#faf8f5"/>
            <circle cx="42" cy="27" r="2" stroke="#4d6b44" strokeWidth="1.5" fill="#4d6b44"/>
            <circle cx="15" cy="27" r="5.5" stroke="#4d6b44" strokeWidth="2" fill="#faf8f5"/>
            <circle cx="15" cy="27" r="2" stroke="#4d6b44" strokeWidth="1.5" fill="#4d6b44"/>
            <line x1="27" y1="18" x2="27" y2="26" stroke="#4d6b44" strokeWidth="1.2" strokeLinecap="round"/>
            <circle cx="24" cy="22" r="1" fill="#4d6b44"/>
            <circle cx="30" cy="22" r="1" fill="#4d6b44"/>
          </svg>
          <p className="text-sm text-[#4d6b44] font-medium">{SALON_INFO.deliveryService}</p>
        </div>

        {/* 注意書き */}
        <div className="text-left mt-6 pt-4 border-t border-[#e0d4c0]">
          <p className="text-xs text-[#8a7a60]">{SERVICE_NOTE}</p>
        </div>
      </div>
    </section>
  );
}
