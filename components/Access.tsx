import { SALON_INFO } from "@/lib/data";

const INFO_ROWS = [
  { label: "住所", value: `${SALON_INFO.zipCode} ${SALON_INFO.address}` },
  { label: "営業時間", value: SALON_INFO.hours },
  { label: "定休日", value: SALON_INFO.closedDay },
  { label: "電話番号", value: SALON_INFO.tel || "未定", isTel: !!SALON_INFO.tel },
];

export default function Access() {
  return (
    <section id="access" className="py-20 px-5 bg-[#ddd0b8]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-handwritten text-5xl md:text-6xl text-[#4b6345] mb-1 leading-none">
          Access
        </h2>
        <p className="text-[#3d2b1f] text-sm font-bold tracking-widest mb-10">
          地図案内
        </p>

        {/* Google Maps embed */}
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
          <iframe
            src="https://maps.google.com/maps?q=千葉県長生郡長生村信友1880-1&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Pua Bliss アクセスマップ"
            className="absolute inset-0"
          />
        </div>

        {/* Info rows */}
        <div className="bg-[#faf8f5] rounded-2xl border border-[#e0d4c0] overflow-hidden text-left">
          {INFO_ROWS.map((row, i) => (
            <div
              key={row.label}
              className={`flex items-start gap-4 px-5 py-4 ${
                i < INFO_ROWS.length - 1 ? "border-b border-[#ddd0b8]" : ""
              }`}
            >
              <span className="text-xs font-bold text-[#4b6345] min-w-[5rem] pt-0.5">
                {row.label}
              </span>
              {row.isTel ? (
                <a
                  href={`tel:${row.value}`}
                  className="text-sm text-[#5a4a3a] hover:text-[#4b6345] transition-colors"
                >
                  {row.value}
                </a>
              ) : (
                <span className="text-sm text-[#5a4a3a] leading-relaxed">
                  {row.value}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
