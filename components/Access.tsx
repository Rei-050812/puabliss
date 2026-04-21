import { SALON_INFO } from "@/lib/data";

const INFO_ROWS = [
  { label: "住所", value: `${SALON_INFO.zipCode} ${SALON_INFO.address}` },
  { label: "営業時間", value: SALON_INFO.hours },
  { label: "定休日", value: SALON_INFO.closedDay },
  ...(SALON_INFO.tel ? [{ label: "電話番号", value: SALON_INFO.tel, isTel: true }] : []),
];

export default function Access() {
  return (
    <section id="access" className="py-20 px-5 bg-[#f5f0e8]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-handwritten text-5xl md:text-6xl text-[#4d6b44] mb-1 leading-none">
          Access
        </h2>
        <p className="text-[#3d2b1f] text-sm font-bold tracking-widest mb-10">
          地図案内
        </p>

        {/* Google Maps embed placeholder */}
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8 bg-[#e0d8cc] border-2 border-dashed border-[#b8a890] flex items-center justify-center">
          {/* 本番環境では以下のiframeを実際のGoogle Maps埋め込みコードに差し替えてください */}
          <div className="text-center">
            <p className="text-2xl mb-2">🗺️</p>
            <p className="text-sm text-[#8a7a60] font-medium">Googleマップ埋め込みエリア</p>
            <p className="text-xs text-[#8a7a60] mt-1">住所確定後にiframeを設置</p>
          </div>
          {/* 差し替え用 iframe（住所確定後にコメントを外す）
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Pua Bliss アクセスマップ"
            className="absolute inset-0"
          />
          */}
        </div>

        {/* Info rows */}
        <div className="bg-[#faf8f5] rounded-2xl border border-[#e0d4c0] overflow-hidden text-left">
          {INFO_ROWS.map((row, i) => (
            <div
              key={row.label}
              className={`flex items-start gap-4 px-5 py-4 ${
                i < INFO_ROWS.length - 1 ? "border-b border-[#e8dcc8]" : ""
              }`}
            >
              <span className="text-xs font-bold text-[#4d6b44] min-w-[5rem] pt-0.5">
                {row.label}
              </span>
              {row.isTel ? (
                <a
                  href={`tel:${row.value}`}
                  className="text-sm text-[#5a4a3a] hover:text-[#4d6b44] transition-colors"
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
