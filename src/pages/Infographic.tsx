export default function Infographic() {
  const blocks = [
    {
      num: "1",
      numColor: "#4A7EF7",
      title: "ИИ ассистент «Федя»",
      accent: "#EEF3FF",
      accentDark: "#4A7EF7",
      items: [
        { icon: "🤖", label: "ИИ ассистент «Федя»" },
        { icon: "🎙️", label: "ЭМК с голосовым вводом" },
        { icon: "💬", label: "CRM с диалогом в одном окне" },
        { icon: "🖥️", label: "PACS sever с 3D Webviewer" },
      ],
      visual: (
        <div className="relative flex items-center justify-center mt-4">
          <div
            className="rounded-2xl px-5 py-3 flex items-center gap-3 shadow-md"
            style={{ backgroundColor: "#EEF3FF", border: "1px solid #c7d8ff" }}
          >
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
              style={{ backgroundColor: "#fff", border: "2px solid #4A7EF7" }}
            >
              🤖
            </div>
            <div>
              <div className="text-xs font-medium" style={{ color: "#4A7EF7" }}>
                Привет!
              </div>
              <div className="text-xs font-bold" style={{ color: "#4A7EF7" }}>
                Я Федя
              </div>
              <div className="flex gap-0.5 mt-1">
                {[3, 5, 4, 6, 3, 5, 4].map((h, i) => (
                  <div
                    key={i}
                    className="rounded-full"
                    style={{
                      width: 3,
                      height: h * 3,
                      backgroundColor: "#4A7EF7",
                      opacity: 0.6 + i * 0.05,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      num: "2",
      numColor: "#22C55E",
      title: "Аналитика и управление",
      accent: "#F0FDF4",
      accentDark: "#22C55E",
      items: [
        { icon: "📈", label: "Сквозная аналитика РК" },
        { icon: "👥", label: "Аналитика движения пациентов" },
        { icon: "🔵", label: "Когортный анализ" },
        { icon: "📧", label: "Аналитика каскадных рассылок" },
        { icon: "🔄", label: "Анализ PDSA" },
      ],
      visual: (
        <div className="flex flex-col gap-2 mt-4">
          {/* Bar chart */}
          <div className="flex items-end gap-1.5 h-14">
            {[40, 60, 45, 80, 65, 90, 75].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  height: `${h}%`,
                  backgroundColor: i === 5 ? "#22C55E" : "#86EFAC",
                  opacity: 0.7 + i * 0.04,
                }}
              />
            ))}
          </div>
          {/* Donut hint */}
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-full flex-shrink-0"
              style={{
                background:
                  "conic-gradient(#22C55E 0% 65%, #86EFAC 65% 85%, #d1fae5 85% 100%)",
              }}
            />
            <div className="flex flex-col gap-1 flex-1">
              {[65, 20, 15].map((w, i) => (
                <div
                  key={i}
                  className="h-1.5 rounded-full"
                  style={{
                    width: `${w}%`,
                    backgroundColor: ["#22C55E", "#86EFAC", "#d1fae5"][i],
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      num: "3",
      numColor: "#A855F7",
      title: "Маркетинг и лояльность",
      accent: "#FAF5FF",
      accentDark: "#A855F7",
      items: [
        { icon: "🔁", label: "Реактивация пациентов" },
        { icon: "⭐", label: "Опросы и NPS" },
        { icon: "💬", label: "Коммуникации" },
        { icon: "👍", label: "Отзывы и репутация" },
        { icon: "🔽", label: "Автоворонки" },
      ],
      visual: (
        <div className="flex flex-col gap-2 mt-3">
          {/* Stars */}
          <div
            className="rounded-xl px-3 py-2 flex items-center gap-1"
            style={{ backgroundColor: "#FAF5FF", border: "1px solid #e9d5ff" }}
          >
            {[1, 2, 3, 4].map((s) => (
              <span key={s} className="text-base">⭐</span>
            ))}
            <span className="text-base">☆</span>
            <span className="text-xs ml-1 font-medium" style={{ color: "#A855F7" }}>
              4.0
            </span>
          </div>
          {/* Funnel */}
          <div className="flex flex-col items-center gap-1 mt-1">
            {[90, 70, 50, 30].map((w, i) => (
              <div
                key={i}
                className="rounded-sm"
                style={{
                  width: `${w}%`,
                  height: 8,
                  backgroundColor: `rgba(168,85,247,${0.9 - i * 0.18})`,
                }}
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      num: "4",
      numColor: "#F97316",
      title: "Операционное управление",
      accent: "#FFF7ED",
      accentDark: "#F97316",
      items: [
        { icon: "📅", label: "Онлайн запись" },
        { icon: "📋", label: "Регистратура" },
        { icon: "📊", label: "Отчёты" },
        { icon: "👨‍⚕️", label: "Расписание врачей" },
        { icon: "👥", label: "Расписание сотрудников" },
        { icon: "🤝", label: "Координаторы" },
      ],
      items2: [
        { icon: "🏥", label: "ДМС" },
        { icon: "💹", label: "Прибыль клиники" },
        { icon: "🧪", label: "Лаборатория" },
        { icon: "📦", label: "Склад" },
        { icon: "💰", label: "Заработная плата" },
      ],
      visual: null,
    },
    {
      num: "5",
      numColor: "#06B6D4",
      title: "Микросервисы",
      accent: "#ECFEFF",
      accentDark: "#06B6D4",
      items: [
        { icon: "✈️", label: "Telegram" },
        { icon: "🤖", label: "Telegram bot" },
        { icon: "💚", label: "WhatsApp" },
        { icon: "🔵", label: "Max" },
        { icon: "🤖", label: "Max bot" },
        { icon: "💬", label: "Собственный мессенджер" },
      ],
      visual: (
        <div className="flex items-center justify-center mt-3">
          <div className="relative w-20 h-20">
            <div
              className="absolute inset-0 rounded-full flex items-center justify-center text-2xl"
              style={{ backgroundColor: "#ECFEFF", border: "2px solid #06B6D4" }}
            >
              ⚙️
            </div>
            {[
              { emoji: "✈️", style: { top: -8, left: "50%", marginLeft: -12 } },
              { emoji: "💚", style: { top: "50%", left: -8, marginTop: -12 } },
              { emoji: "🔵", style: { bottom: -8, left: "50%", marginLeft: -12 } },
            ].map((n, i) => (
              <div
                key={i}
                className="absolute w-7 h-7 rounded-full flex items-center justify-center text-sm shadow"
                style={{
                  backgroundColor: "#fff",
                  border: "2px solid #06B6D4",
                  ...n.style,
                }}
              >
                {n.emoji}
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      num: "6",
      numColor: "#3B82F6",
      title: "Мобильное приложение",
      accent: "#EFF6FF",
      accentDark: "#3B82F6",
      items: [],
      visual: (
        <div className="flex justify-center mt-2">
          {/* Phone mockup */}
          <div
            className="rounded-2xl overflow-hidden shadow-lg"
            style={{
              width: 120,
              backgroundColor: "#0f172a",
              border: "3px solid #1e293b",
              padding: "4px 4px 8px",
            }}
          >
            {/* Notch */}
            <div className="flex justify-center mb-1">
              <div
                className="rounded-full"
                style={{ width: 32, height: 6, backgroundColor: "#1e293b" }}
              />
            </div>
            <div
              className="rounded-xl overflow-hidden"
              style={{ backgroundColor: "#f8fafc" }}
            >
              {/* App UI */}
              <div className="px-2 py-2">
                <div className="text-xs font-bold mb-0.5" style={{ color: "#0f172a", fontSize: 8 }}>
                  Здравствуйте,
                </div>
                <div className="text-xs font-bold mb-2" style={{ color: "#0f172a", fontSize: 8 }}>
                  Александр!
                </div>
                <div
                  className="rounded-lg py-1 text-center mb-1"
                  style={{ backgroundColor: "#3B82F6", fontSize: 7, color: "#fff", fontWeight: 700 }}
                >
                  Запись на приём
                </div>
                <div
                  className="rounded-lg py-1 text-center mb-2"
                  style={{ backgroundColor: "#f1f5f9", fontSize: 7, color: "#475569" }}
                >
                  Мои записи
                </div>
                <div
                  className="rounded-lg p-1.5 mb-1"
                  style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0" }}
                >
                  <div style={{ fontSize: 7, color: "#64748b" }}>Ближайший приём</div>
                  <div style={{ fontSize: 7, fontWeight: 700, color: "#0f172a" }}>
                    12 мая, 10:00
                  </div>
                  <div style={{ fontSize: 7, color: "#64748b" }}>Терапевт</div>
                </div>
                {/* Bottom nav */}
                <div className="flex justify-around mt-1">
                  {["🏠", "📅", "💬", "👤"].map((ic) => (
                    <div key={ic} style={{ fontSize: 9 }}>
                      {ic}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      num: "7",
      numColor: "#64748B",
      title: "Интеграции",
      accent: "#F8FAFC",
      accentDark: "#64748B",
      items: [
        { icon: "📞", label: "Телефония" },
        { icon: "🖨️", label: "Онлайн кассы" },
        { icon: "🎯", label: "Колтрекинг" },
        { icon: "💬", label: "СМС центр" },
        { icon: "✍️", label: "Цифровая подпись" },
        { icon: "🔗", label: "Агрегаторы (Продокторов, Сберздоровье)" },
        { icon: "🏛️", label: "ЕГИСЗ" },
      ],
      visual: (
        <div className="flex justify-end items-center mt-3">
          <div className="relative">
            {/* Cloud shape */}
            <div
              className="w-16 h-12 rounded-full flex items-center justify-center text-2xl shadow"
              style={{ backgroundColor: "#EFF6FF", border: "2px dashed #93C5FD" }}
            >
              ☁️
            </div>
            {/* Puzzle */}
            <div
              className="absolute -bottom-2 -right-2 w-10 h-10 rounded-lg flex items-center justify-center text-lg"
              style={{ backgroundColor: "#DBEAFE", border: "2px solid #93C5FD" }}
            >
              🧩
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div
      className="min-h-screen py-10 px-4"
      style={{ backgroundColor: "#F0F4F8", fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1
            className="text-3xl md:text-4xl font-bold mb-2"
            style={{ color: "#0f172a", letterSpacing: "-0.02em" }}
          >
            Экосистема возможностей
          </h1>
          <p className="text-base" style={{ color: "#64748b" }}>
            Полный стек инструментов для современной клиники
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Row 1: blocks 1, 2, 3 */}
          {blocks.slice(0, 3).map((block) => (
            <BlockCard key={block.num} block={block} />
          ))}

          {/* Row 2: block 4 wide, 5, 6, 7 */}
          <div className="md:col-span-1">
            <BlockCard block={blocks[3]} twoCol />
          </div>
          <BlockCard block={blocks[4]} />
          <BlockCard block={blocks[5]} />
          <BlockCard block={blocks[6]} />
        </div>

        {/* Footer note */}
        <div className="text-center mt-8">
          <p className="text-xs" style={{ color: "#94a3b8" }}>
            Future IT Dent · Единая платформа управления стоматологической клиникой
          </p>
        </div>
      </div>
    </div>
  );
}

function BlockCard({
  block,
  twoCol = false,
}: {
  block: {
    num: string;
    numColor: string;
    title: string;
    accent: string;
    accentDark: string;
    items: { icon: string; label: string }[];
    items2?: { icon: string; label: string }[];
    visual: React.ReactNode;
  };
  twoCol?: boolean;
}) {
  return (
    <div
      className="rounded-2xl p-5 flex flex-col h-full"
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #e2e8f0",
        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
        minHeight: 260,
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-base font-bold flex-shrink-0"
          style={{ backgroundColor: block.numColor }}
        >
          {block.num}
        </div>
        <h2 className="text-base font-bold" style={{ color: "#0f172a", lineHeight: 1.2 }}>
          {block.title}
        </h2>
      </div>

      {/* Items */}
      {twoCol && block.items2 ? (
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 flex-1">
          <div className="flex flex-col gap-2">
            {block.items.map((item) => (
              <ItemRow key={item.label} item={item} accent={block.accentDark} bg={block.accent} />
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {block.items2.map((item) => (
              <ItemRow key={item.label} item={item} accent={block.accentDark} bg={block.accent} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2 flex-1">
          {block.items.map((item) => (
            <ItemRow key={item.label} item={item} accent={block.accentDark} bg={block.accent} />
          ))}
        </div>
      )}

      {/* Visual */}
      {block.visual && <div>{block.visual}</div>}
    </div>
  );
}

function ItemRow({
  item,
  accent,
  bg,
}: {
  item: { icon: string; label: string };
  accent: string;
  bg: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="w-7 h-7 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
        style={{ backgroundColor: bg, border: `1px solid ${accent}30` }}
      >
        {item.icon}
      </div>
      <span className="text-sm leading-tight" style={{ color: "#334155" }}>
        {item.label}
      </span>
    </div>
  );
}