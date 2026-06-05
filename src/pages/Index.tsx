import Icon from "@/components/ui/icon";

const IMG_FEDYA = "https://cdn.poehali.dev/projects/56e2666f-17ee-442b-bfe7-8254b5ffe939/files/608be8d9-acf4-4217-8a47-2769ed280d8f.jpg";
const IMG_ANALYTICS = "https://cdn.poehali.dev/projects/56e2666f-17ee-442b-bfe7-8254b5ffe939/files/40b39950-ae1f-401d-8579-7335db922e48.jpg";
const IMG_MARKETING = "https://cdn.poehali.dev/projects/56e2666f-17ee-442b-bfe7-8254b5ffe939/files/912c8246-3b24-433b-b178-e2b556c550f8.jpg";
const IMG_OPERATIONS = "https://cdn.poehali.dev/projects/56e2666f-17ee-442b-bfe7-8254b5ffe939/files/c205c1be-7e01-47db-9dba-68af7f6c0711.jpg";
const IMG_MICROSERVICES = "https://cdn.poehali.dev/projects/56e2666f-17ee-442b-bfe7-8254b5ffe939/files/3328df29-816f-4296-90d3-4e709f5afb5d.jpg";
const IMG_INTEGRATIONS = "https://cdn.poehali.dev/projects/56e2666f-17ee-442b-bfe7-8254b5ffe939/files/7628765e-2ba0-44db-9294-f39afcef9f20.jpg";

const BLOCKS = [
  {
    num: "1",
    color: "#29B9C7",
    colorLight: "#E5F7F9",
    title: "ИИ ассистент «Федя»",
    img: IMG_FEDYA,
    items: [
      { icon: "Bot", label: "ИИ ассистент «Федя»" },
      { icon: "Mic", label: "ЭМК с голосовым вводом" },
      { icon: "MessageSquare", label: "CRM с диалогом в одном окне" },
      { icon: "Monitor", label: "PACS server с 3D Webviewer" },
    ],
  },
  {
    num: "2",
    color: "#3C8FD4",
    colorLight: "#E6F2FB",
    title: "Аналитика и управление",
    img: IMG_ANALYTICS,
    items: [
      { icon: "TrendingUp", label: "Сквозная аналитика РК" },
      { icon: "Users", label: "Аналитика движения пациентов" },
      { icon: "PieChart", label: "Когортный анализ" },
      { icon: "Mail", label: "Аналитика каскадных рассылок" },
      { icon: "RefreshCw", label: "Анализ PDSA" },
    ],
  },
  {
    num: "3",
    color: "#9B6AC4",
    colorLight: "#F2ECF8",
    title: "Маркетинг и лояльность",
    img: IMG_MARKETING,
    items: [
      { icon: "UserCheck", label: "Реактивация пациентов" },
      { icon: "Star", label: "Опросы и NPS" },
      { icon: "MessageCircle", label: "Коммуникации" },
      { icon: "ThumbsUp", label: "Отзывы и репутация" },
      { icon: "Filter", label: "Автоворонки" },
    ],
  },
  {
    num: "4",
    color: "#F0922A",
    colorLight: "#FEF1E6",
    title: "Операционное управление",
    img: IMG_OPERATIONS,
    items: [
      { icon: "CalendarDays", label: "Онлайн запись" },
      { icon: "ClipboardList", label: "Регистратура" },
      { icon: "BarChart2", label: "Отчёты" },
      { icon: "Stethoscope", label: "Расписание врачей" },
      { icon: "Users", label: "Расписание сотрудников" },
      { icon: "UserCog", label: "Координаторы" },
      { icon: "Shield", label: "ДМС" },
      { icon: "TrendingUp", label: "Прибыль клиники" },
      { icon: "FlaskConical", label: "Лаборатория" },
      { icon: "Package", label: "Склад" },
      { icon: "Banknote", label: "Заработная плата" },
    ],
  },
  {
    num: "5",
    color: "#29B9C7",
    colorLight: "#E5F7F9",
    title: "Микросервисы",
    img: IMG_MICROSERVICES,
    items: [
      { icon: "Send", label: "Telegram" },
      { icon: "Bot", label: "Telegram bot" },
      { icon: "MessageCircle", label: "WhatsApp" },
      { icon: "Layers", label: "Max" },
      { icon: "Bot", label: "Max bot" },
      { icon: "MessagesSquare", label: "Собственный мессенджер" },
    ],
  },
  {
    num: "6",
    color: "#3A56A5",
    colorLight: "#EAEEf8",
    title: "Интеграции",
    img: IMG_INTEGRATIONS,
    items: [
      { icon: "Phone", label: "Телефония" },
      { icon: "ShoppingCart", label: "Онлайн кассы" },
      { icon: "Target", label: "Колтрекинг" },
      { icon: "MessageSquare", label: "СМС центр" },
      { icon: "PenLine", label: "Цифровая подпись" },
      { icon: "Share2", label: "Агрегаторы (Продокторов, Сберздоровье)" },
      { icon: "Building2", label: "ЕГИСЗ" },
    ],
  },
];

export default function Index() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#EFF2F7",
        fontFamily: "'Inter', 'Golos Text', system-ui, sans-serif",
        padding: "44px 20px 64px",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              backgroundColor: "#fff",
              borderRadius: 100,
              padding: "6px 16px",
              marginBottom: 16,
              border: "1px solid #E5E7EB",
            }}
          >
            <span style={{ fontSize: 16 }}>🦷</span>
            <span style={{ fontSize: 13, color: "#6B7280", fontWeight: 500 }}>Future IT Dent</span>
          </div>
          <h1
            style={{
              fontSize: 30,
              fontWeight: 800,
              color: "#111827",
              margin: 0,
              letterSpacing: "-0.025em",
              lineHeight: 1.2,
            }}
          >
            Как Future IT Dent закрывает потери стоматологий?
          </h1>
          <p style={{ fontSize: 15, color: "#6B7280", marginTop: 10, fontWeight: 400 }}>
            Полная экосистема для управления современной клиникой
          </p>
        </div>

        {/* Grid 3 cols */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 14,
          }}
        >
          {BLOCKS.map((block) => (
            <Card key={block.num} block={block} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ block }: { block: (typeof BLOCKS)[0] }) {
  const isOperational = block.num === "4";

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: 18,
        overflow: "hidden",
        boxShadow: "0 1px 12px rgba(0,0,0,0.07)",
        border: "1px solid #E5E7EB",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "14px 16px 12px",
          borderBottom: `2px solid ${block.colorLight}`,
        }}
      >
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: 9,
            backgroundColor: block.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 15,
            fontWeight: 800,
            flexShrink: 0,
            letterSpacing: "-0.01em",
          }}
        >
          {block.num}
        </div>
        <h2
          style={{
            fontSize: 14.5,
            fontWeight: 700,
            color: "#111827",
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          {block.title}
        </h2>
      </div>

      {/* Body */}
      <div style={{ display: "flex", flex: 1 }}>

        {/* Items */}
        <div
          style={{
            flex: 1,
            padding: "12px 14px",
          }}
        >
          {isOperational ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "7px 14px",
              }}
            >
              {block.items.map((item) => (
                <ItemRow key={item.label} item={item} color={block.color} bg={block.colorLight} />
              ))}
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {block.items.map((item) => (
                <ItemRow key={item.label} item={item} color={block.color} bg={block.colorLight} />
              ))}
            </div>
          )}
        </div>

        {/* Illustration */}
        <div
          style={{
            width: 124,
            flexShrink: 0,
            padding: "10px 12px 10px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={block.img}
            alt={block.title}
            style={{
              width: 110,
              height: 110,
              objectFit: "cover",
              borderRadius: 12,
              border: `1.5px solid ${block.colorLight}`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

function ItemRow({
  item,
  color,
  bg,
}: {
  item: { icon: string; label: string };
  color: string;
  bg: string;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
      <div
        style={{
          width: 26,
          height: 26,
          borderRadius: 7,
          backgroundColor: bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon name={item.icon} size={13} style={{ color }} />
      </div>
      <span
        style={{
          fontSize: 12.5,
          color: "#374151",
          lineHeight: 1.3,
        }}
      >
        {item.label}
      </span>
    </div>
  );
}
