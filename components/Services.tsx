import { SERVICES, OPTIONS, BREEDS, SERVICE_NOTE, SALON_INFO } from "@/lib/data";

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
              <div className="bg-[#4d6b44] px-5 py-3 text-left">
                <h3 className="font-sans text-sm font-bold text-white">
                  {service.name}
                </h3>
                <p className="text-white/80 text-xs mt-0.5">{service.description}</p>
              </div>
              {/* 犬種別料金 */}
              <div className="divide-y divide-[#e8dcc8]">
                {BREEDS.map((breed) => (
                  <div key={breed} className="flex items-center justify-between px-5 py-3">
                    <span className="text-sm text-[#3d2b1f]">{breed}</span>
                    <span className="text-sm font-bold text-[#4d6b44]">
                      {service.prices[breed]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* オプション */}
        <div className="bg-[#faf8f5] border border-[#e0d4c0] rounded-2xl overflow-hidden mb-6">
          <div className="bg-[#e8dcc8] px-5 py-3 text-left">
            <h3 className="font-sans text-sm font-bold text-[#3d2b1f]">
              オプションメニュー
            </h3>
          </div>
          <div className="divide-y divide-[#e8dcc8]">
            {OPTIONS.map((option) => (
              <div key={option.name} className="flex items-center justify-between px-5 py-3">
                <span className="text-sm text-[#3d2b1f]">{option.name}</span>
                <span className="text-sm font-bold text-[#4d6b44]">{option.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 送迎 */}
        <div className="text-left">
          <p className="text-sm text-[#4d6b44] font-medium">🚗 {SALON_INFO.deliveryService}</p>
        </div>

        {/* 注意書き */}
        <div className="text-left mt-6 pt-4 border-t border-[#e0d4c0]">
          <p className="text-xs text-[#8a7a60]">{SERVICE_NOTE}</p>
        </div>
      </div>
    </section>
  );
}
