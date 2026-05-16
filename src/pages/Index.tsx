import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const PHOTO_DESIGNER = "https://cdn.poehali.dev/projects/56e2666f-17ee-442b-bfe7-8254b5ffe939/files/a440de51-806e-4577-8519-8f91503e9fd5.jpg";
const PHOTO_HANDS = "https://cdn.poehali.dev/projects/56e2666f-17ee-442b-bfe7-8254b5ffe939/files/efbd13d3-2faa-4c5f-8706-f654bcd62c60.jpg";
const PHOTO_DESK = "https://cdn.poehali.dev/projects/56e2666f-17ee-442b-bfe7-8254b5ffe939/files/289adbf8-1e09-430b-89de-51c8603d3c9d.jpg";

const CASES = [
  {
    tag: "SaaS / B2B",
    year: "2025",
    title: "Редизайн платформы управления логистикой",
    problem: "Менеджеры тратили по 40 мин на одну задачу из-за перегруженного интерфейса",
    result: "−62% времени на задачу, +31% NPS после релиза",
    color: "#1a1a2e",
    accent: "#6366f1",
  },
  {
    tag: "E-commerce",
    year: "2024",
    title: "UX-аудит и ребрендинг интернет-магазина",
    problem: "Конверсия упала после обновления движка — клиент не понимал, почему",
    result: "+18% конверсии, снижение отказов на 41%",
    color: "#0f2027",
    accent: "#06b6d4",
  },
  {
    tag: "Fintech",
    year: "2024",
    title: "Онбординг для мобильного банка",
    problem: "70% пользователей бросали регистрацию на 3-м шаге",
    result: "Completion rate вырос с 29% до 74%",
    color: "#1a1a1a",
    accent: "#10b981",
  },
];

const JOURNAL = [
  {
    date: "12 мая 2026",
    tag: "Процесс",
    title: "Как я провожу первый созвон с клиентом",
    excerpt: "За 5 лет выработала структуру первого разговора, которая помогает сразу понять — будем ли мы работать хорошо...",
    readTime: "4 мин",
  },
  {
    date: "28 апр 2026",
    tag: "Кейс",
    title: "Когда клиент говорит «сделай красиво» — что за этим стоит",
    excerpt: "Разбираю реальный запрос, который пришёл мне в понедельник утром, и как мы с командой его декомпозировали...",
    readTime: "6 мин",
  },
  {
    date: "14 апр 2026",
    tag: "Заметки",
    title: "Три недели на удалёнке в Тбилиси: как работать из другой страны",
    excerpt: "Я работала с двумя командами одновременно — и обе даже не знали, что я не в Москве...",
    readTime: "3 мин",
  },
  {
    date: "2 апр 2026",
    tag: "Дизайн",
    title: "Figma-воркшоп с командой разработки: что получилось",
    excerpt: "Провела внутренний мастер-класс для 6 разработчиков. Делюсь шаблоном и тем, что пошло не по плану...",
    readTime: "7 мин",
  },
];

const WHY_ME = [
  { icon: "Users", title: "Работаю внутри команды", desc: "Не просто получаю ТЗ и сдаю макет. Участвую в обсуждениях, синках, планированиях." },
  { icon: "RefreshCw", title: "Долгосрочное сотрудничество", desc: "Большинство клиентов работают со мной от года и дольше. Знаю продукт изнутри." },
  { icon: "MessageCircle", title: "Прозрачная коммуникация", desc: "Пишу статусы сама, не жду пинка. Всегда знаете, что происходит и почему." },
  { icon: "MapPin", title: "Удалёнка / гибрид", desc: "Комфортно работаю из любой точки. Часовой пояс согласовываю на старте." },
  { icon: "FileText", title: "Официально через ИП", desc: "Договор, закрывающие документы, всё по-белому. Для компаний — это важно." },
  { icon: "Wrench", title: "Поддержка после запуска", desc: "Помогаю адаптировать дизайн под новые задачи. Не бросаю после сдачи." },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", message: "" });
  const [sent, setSent] = useState(false);
  const [activeCase, setActiveCase] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setCursorVisible(true);
    };
    const leave = () => setCursorVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseleave", leave); };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fafaf9", color: "#111110", fontFamily: "'Inter', 'Manrope', system-ui, sans-serif" }}>

      {/* Custom cursor dot */}
      <div
        style={{
          position: "fixed",
          left: cursorPos.x - 4,
          top: cursorPos.y - 4,
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "#111110",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: cursorVisible ? 0.35 : 0,
          transition: "opacity 0.3s ease, left 0.05s linear, top 0.05s linear",
          mixBlendMode: "multiply",
        }}
      />

      {/* ===== NAVBAR ===== */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{ backgroundColor: "rgba(250,250,249,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #e8e8e6" }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="text-sm font-semibold tracking-tight" style={{ color: "#111110" }}>
            Екатерина Алистратова
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Проекты", href: "#cases" },
              { label: "Процесс", href: "#process" },
              { label: "О себе", href: "#about" },
              { label: "Журнал", href: "#journal" },
            ].map(l => (
              <a key={l.href} href={l.href} className="text-sm transition-colors duration-200"
                style={{ color: "#6b6b6a" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#111110")}
                onMouseLeave={e => (e.currentTarget.style.color = "#6b6b6a")}>
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200"
            style={{ backgroundColor: "#111110", color: "#fafaf9" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#333")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#111110")}>
            Написать
          </a>
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ backgroundColor: "rgba(250,250,249,0.98)" }}>
            {[{ label: "Проекты", href: "#cases" }, { label: "Процесс", href: "#process" }, { label: "О себе", href: "#about" }, { label: "Журнал", href: "#journal" }, { label: "Контакт", href: "#contact" }].map(l => (
              <a key={l.href} href={l.href} className="text-sm font-medium" style={{ color: "#111110" }} onClick={() => setMenuOpen(false)}>{l.label}</a>
            ))}
          </div>
        )}
      </header>

      {/* ===== HERO ===== */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div>
              <FadeIn>
                <div className="flex items-center gap-2 mb-8">
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#22c55e" }} />
                  <span className="text-xs font-medium tracking-wide uppercase" style={{ color: "#6b6b6a" }}>Открыта к новым проектам</span>
                </div>
              </FadeIn>
              <FadeIn delay={80}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight mb-8" style={{ letterSpacing: "-0.03em" }}>
                  Привет,<br />я Катя
                </h1>
              </FadeIn>
              <FadeIn delay={160}>
                <p className="text-lg leading-relaxed mb-4" style={{ color: "#4a4a48", maxWidth: 480 }}>
                  Делаю сайты и digital-дизайн для компаний, с которыми работаю в&nbsp;долгую.
                </p>
                <p className="text-base leading-relaxed mb-10" style={{ color: "#7a7a78", maxWidth: 480 }}>
                  Показываю не только результат, но и процесс — созвоны, правки, хаос, поиск решений и реальную работу внутри команды.
                </p>
              </FadeIn>
              <FadeIn delay={240}>
                <div className="flex flex-wrap gap-3">
                  <a href="#cases"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200"
                    style={{ backgroundColor: "#111110", color: "#fafaf9" }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#333"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = "#111110"; e.currentTarget.style.transform = "translateY(0)"; }}>
                    Смотреть проекты
                    <Icon name="ArrowRight" size={16} />
                  </a>
                  <a href="#process"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border transition-all duration-200"
                    style={{ borderColor: "#d4d4d2", color: "#4a4a48", backgroundColor: "transparent" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "#111110"; e.currentTarget.style.color = "#111110"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "#d4d4d2"; e.currentTarget.style.color = "#4a4a48"; }}>
                    Внутрянка работы
                  </a>
                  <a href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200"
                    style={{ color: "#6b6b6a" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#111110"}
                    onMouseLeave={e => e.currentTarget.style.color = "#6b6b6a"}>
                    Связаться →
                  </a>
                </div>
              </FadeIn>

              {/* Stats */}
              <FadeIn delay={320}>
                <div className="flex gap-8 mt-14 pt-8" style={{ borderTop: "1px solid #e8e8e6" }}>
                  {[{ num: "5+", label: "лет в дизайне" }, { num: "40+", label: "проектов" }, { num: "12", label: "компаний работают дольше года" }].map(s => (
                    <div key={s.label}>
                      <div className="text-2xl font-semibold mb-1" style={{ letterSpacing: "-0.02em" }}>{s.num}</div>
                      <div className="text-xs" style={{ color: "#7a7a78" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right — photo + floating notes */}
            <FadeIn delay={200} className="relative">
              <div className="relative">
                <img
                  src={PHOTO_DESIGNER}
                  alt="Екатерина Алистратова — веб-дизайнер"
                  className="w-full rounded-3xl object-cover"
                  style={{ height: 560, filter: "brightness(0.97) saturate(0.9)" }}
                />

                {/* Floating note 1 */}
                <div
                  className="absolute -left-6 top-16 rounded-2xl p-4 shadow-lg"
                  style={{ backgroundColor: "#fff", border: "1px solid #e8e8e6", maxWidth: 200 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: "#f0fdf4", color: "#16a34a" }}>✓</div>
                    <span className="text-xs font-medium">Правки приняты</span>
                  </div>
                  <p className="text-xs" style={{ color: "#7a7a78" }}>Итерация 3 — финальный вариант одобрен командой</p>
                </div>

                {/* Floating note 2 */}
                <div
                  className="absolute -right-4 bottom-20 rounded-2xl p-4 shadow-lg"
                  style={{ backgroundColor: "#fff", border: "1px solid #e8e8e6", maxWidth: 190 }}
                >
                  <div className="text-xs font-medium mb-1">Сегодня в работе</div>
                  <div className="flex flex-col gap-1.5">
                    {["Онбординг / мобайл", "Дашборд аналитики", "Гайдлайн v2"].map((t, i) => (
                      <div key={t} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded border flex items-center justify-center flex-shrink-0"
                          style={{ borderColor: i === 0 ? "#6366f1" : "#d4d4d2", backgroundColor: i === 0 ? "#6366f1" : "transparent" }}>
                          {i === 0 && <Icon name="Check" size={8} style={{ color: "#fff" }} />}
                        </div>
                        <span className="text-xs" style={{ color: i === 0 ? "#111110" : "#9a9a98", textDecoration: i === 0 ? "none" : "none" }}>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Figma badge */}
                <div
                  className="absolute left-1/2 -bottom-5 -translate-x-1/2 rounded-full px-4 py-2 flex items-center gap-2 shadow-md"
                  style={{ backgroundColor: "#fff", border: "1px solid #e8e8e6" }}
                >
                  <span className="text-sm">🎨</span>
                  <span className="text-xs font-medium">Figma · Auto Layout · Components</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== PROCESS / HOW I WORK ===== */}
      <section id="process" className="py-24 px-6" style={{ backgroundColor: "#f5f5f3" }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
              <div>
                <span className="text-xs font-medium uppercase tracking-widest mb-3 block" style={{ color: "#9a9a98" }}>Как я работаю</span>
                <h2 className="text-4xl md:text-5xl font-semibold" style={{ letterSpacing: "-0.03em" }}>
                  Реальная<br />внутрянка
                </h2>
              </div>
              <p className="text-base max-w-sm" style={{ color: "#6b6b6a" }}>
                Не глянцевые слайды — показываю живые кадры процесса. Так вы сразу понимаете, как именно я работаю.
              </p>
            </div>
          </FadeIn>

          {/* Feed-like grid */}
          <div className="grid md:grid-cols-3 gap-4">

            {/* Large card — photo */}
            <FadeIn delay={0} className="md:col-span-2 md:row-span-2">
              <div className="rounded-3xl overflow-hidden relative h-80 md:h-full min-h-[400px]"
                style={{ backgroundColor: "#e8e8e6" }}>
                <img src={PHOTO_HANDS} alt="Работа в Figma" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }} />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs font-medium px-2 py-1 rounded-full mb-2 inline-block" style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#fff", backdropFilter: "blur(8px)" }}>Работа в Figma</span>
                  <p className="text-white text-sm leading-relaxed">Прорабатываю auto layout перед передачей в разработку — чтобы компоненты растягивались правильно на любых данных</p>
                </div>
              </div>
            </FadeIn>

            {/* Process step card */}
            <FadeIn delay={80}>
              <div className="rounded-3xl p-6 h-full min-h-[180px]" style={{ backgroundColor: "#fff", border: "1px solid #e8e8e6" }}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm" style={{ backgroundColor: "#f0f0ee" }}>💬</div>
                  <span className="text-xs font-medium uppercase tracking-wide" style={{ color: "#9a9a98" }}>Созвон</span>
                </div>
                <p className="text-sm font-medium mb-2">Каждую неделю — синк с командой</p>
                <p className="text-xs leading-relaxed" style={{ color: "#6b6b6a" }}>30 минут. Статус задач, блокеры, приоритеты. Без лишних чатов и недопонимания.</p>
                <div className="flex items-center gap-2 mt-4">
                  <div className="flex -space-x-2">
                    {["#6366f1","#06b6d4","#f59e0b"].map((c, i) => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-white flex-shrink-0" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                  <span className="text-xs" style={{ color: "#9a9a98" }}>+3 участника</span>
                </div>
              </div>
            </FadeIn>

            {/* Notes card */}
            <FadeIn delay={160}>
              <div className="rounded-3xl p-6 min-h-[180px]" style={{ backgroundColor: "#1a1a2e", color: "#e8e8ff" }}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#6366f1" }} />
                  <span className="text-xs font-medium uppercase tracking-wide" style={{ color: "#8b8bcc" }}>Заметки дизайнера</span>
                </div>
                <p className="text-sm font-medium mb-3 text-white">Итерация #4 — правки от Артёма</p>
                <div className="space-y-2">
                  {["↳ кнопка CTA — попробовать без обводки", "↳ шапка — убрать тень, добавить blur", "↳ мобайл — отступы сверху +8px"].map(n => (
                    <p key={n} className="text-xs font-mono" style={{ color: "#8b8bcc" }}>{n}</p>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Desk photo */}
            <FadeIn delay={60} className="md:col-span-2">
              <div className="rounded-3xl overflow-hidden relative h-56"
                style={{ backgroundColor: "#e8e8e6" }}>
                <img src={PHOTO_DESK} alt="Рабочий стол" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.4) 0%, transparent 70%)" }} />
                <div className="absolute left-6 top-1/2 -translate-y-1/2">
                  <p className="text-white text-sm font-medium mb-1">UX-исследование</p>
                  <p className="text-white/70 text-xs max-w-[200px]">Бумажные скетчи, карты пользователей, job stories — всё начинается руками</p>
                </div>
              </div>
            </FadeIn>

            {/* Chat-like card */}
            <FadeIn delay={120}>
              <div className="rounded-3xl p-5 min-h-[220px]" style={{ backgroundColor: "#fff", border: "1px solid #e8e8e6" }}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-full text-xs flex items-center justify-center font-medium" style={{ backgroundColor: "#dcfce7", color: "#16a34a" }}>К</div>
                  <span className="text-xs font-medium">Катя → Команда</span>
                  <span className="text-xs ml-auto" style={{ color: "#9a9a98" }}>10:47</span>
                </div>
                <div className="space-y-2">
                  <div className="rounded-xl rounded-tl-sm px-3 py-2 text-xs max-w-[90%]" style={{ backgroundColor: "#f5f5f3" }}>
                    Обновила прототип. Финальная версия в Figma → ссылка в треде ☝️
                  </div>
                  <div className="rounded-xl rounded-tl-sm px-3 py-2 text-xs max-w-[85%]" style={{ backgroundColor: "#f5f5f3" }}>
                    На мобайле пришлось перекомпоновать карточки — иначе не влезало без скролла
                  </div>
                  <div className="rounded-xl rounded-tr-sm px-3 py-2 text-xs max-w-[80%] ml-auto text-right" style={{ backgroundColor: "#1a1a2e", color: "#e8e8ff" }}>
                    🔥 Спасибо, смотрим!
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ===== CASES ===== */}
      <section id="cases" className="py-24 px-6" style={{ backgroundColor: "#fafaf9" }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <div>
                <span className="text-xs font-medium uppercase tracking-widest mb-3 block" style={{ color: "#9a9a98" }}>Проекты</span>
                <h2 className="text-4xl md:text-5xl font-semibold" style={{ letterSpacing: "-0.03em" }}>Кейсы</h2>
              </div>
              <p className="text-base max-w-xs" style={{ color: "#6b6b6a" }}>Каждый проект — это история. Задача, проблема, процесс, решение.</p>
            </div>
          </FadeIn>

          {/* Case tabs */}
          <FadeIn delay={80}>
            <div className="flex gap-2 mb-10 flex-wrap">
              {CASES.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCase(i)}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                  style={{
                    backgroundColor: activeCase === i ? "#111110" : "#f0f0ee",
                    color: activeCase === i ? "#fafaf9" : "#6b6b6a",
                  }}
                >
                  {c.tag}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Active case */}
          {CASES.map((c, i) => (
            <div
              key={i}
              style={{
                display: activeCase === i ? "block" : "none",
                opacity: activeCase === i ? 1 : 0,
                transition: "opacity 0.4s ease",
              }}
            >
              <div className="rounded-3xl overflow-hidden" style={{ backgroundColor: c.color }}>
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Left — text */}
                  <div className="p-10 md:p-14 flex flex-col justify-between min-h-[400px]">
                    <div>
                      <div className="flex items-center gap-3 mb-8">
                        <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: c.accent + "20", color: c.accent }}>{c.tag}</span>
                        <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{c.year}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6 leading-tight">{c.title}</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wide mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>Проблема</p>
                          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>{c.problem}</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wide mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>Результат</p>
                          <p className="text-sm font-medium" style={{ color: c.accent }}>{c.result}</p>
                        </div>
                      </div>
                    </div>
                    <button
                      className="inline-flex items-center gap-2 mt-8 text-sm font-medium transition-all duration-200 self-start"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}>
                      Читать кейс полностью <Icon name="ArrowRight" size={16} />
                    </button>
                  </div>

                  {/* Right — mockup */}
                  <div className="p-8 flex items-center justify-center min-h-[300px]" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
                    {/* Fake browser mockup */}
                    <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl" style={{ backgroundColor: "#1a1a2e", border: "1px solid rgba(255,255,255,0.08)" }}>
                      {/* Browser bar */}
                      <div className="flex items-center gap-2 px-4 py-3" style={{ backgroundColor: "rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ff5f57" }} />
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ffbd2e" }} />
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#28c940" }} />
                        </div>
                        <div className="flex-1 mx-3 rounded-md px-3 py-1 text-xs" style={{ backgroundColor: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.3)" }}>
                          figma.com/proto/...
                        </div>
                      </div>
                      {/* Content mockup */}
                      <div className="p-5 space-y-3">
                        <div className="h-8 rounded-lg w-2/3" style={{ backgroundColor: c.accent + "30" }} />
                        <div className="h-3 rounded w-full" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />
                        <div className="h-3 rounded w-5/6" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />
                        <div className="h-3 rounded w-4/6" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />
                        <div className="grid grid-cols-2 gap-2 mt-4">
                          <div className="h-20 rounded-xl" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: `1px solid ${c.accent}30` }} />
                          <div className="h-20 rounded-xl" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: `1px solid ${c.accent}30` }} />
                        </div>
                        <div className="h-9 rounded-xl mt-2 flex items-center justify-center" style={{ backgroundColor: c.accent }}>
                          <div className="h-2 rounded w-16" style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WHY LONG-TERM ===== */}
      <section id="about" className="py-24 px-6" style={{ backgroundColor: "#111110" }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="mb-16">
              <span className="text-xs font-medium uppercase tracking-widest mb-3 block" style={{ color: "#6b6b6a" }}>Почему работают долго</span>
              <h2 className="text-4xl md:text-5xl font-semibold text-white" style={{ letterSpacing: "-0.03em" }}>
                Становлюсь частью<br />вашей команды
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_ME.map((item, i) => (
              <FadeIn key={item.title} delay={i * 60}>
                <div
                  className="rounded-2xl p-6 h-full transition-all duration-300 cursor-default"
                  style={{ backgroundColor: "#1a1a19", border: "1px solid #2a2a28" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "#3a3a38")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "#2a2a28")}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "#2a2a28" }}>
                    <Icon name={item.icon} size={18} style={{ color: "#9a9a98" }} />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#5a5a58" }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Quote */}
          <FadeIn delay={200}>
            <div className="mt-16 rounded-3xl p-10 md:p-14" style={{ backgroundColor: "#1a1a19", border: "1px solid #2a2a28" }}>
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-white mb-6" style={{ maxWidth: 680 }}>
                «Я не freelancer, который сдал макеты и пропал. Мне важно, чтобы дизайн реально работал — на пользователях, в продукте, в метриках.»
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img src={PHOTO_DESIGNER} alt="Катя" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Екатерина Алистратова</p>
                  <p className="text-xs" style={{ color: "#5a5a58" }}>UX/UI designer · ИП · 5+ лет опыта</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== JOURNAL ===== */}
      <section id="journal" className="py-24 px-6" style={{ backgroundColor: "#fafaf9" }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
              <div>
                <span className="text-xs font-medium uppercase tracking-widest mb-3 block" style={{ color: "#9a9a98" }}>Digital-журнал</span>
                <h2 className="text-4xl md:text-5xl font-semibold" style={{ letterSpacing: "-0.03em" }}>
                  Мысли,<br />заметки, процессы
                </h2>
              </div>
              <p className="text-base max-w-xs" style={{ color: "#6b6b6a" }}>Пишу о работе без позы — про реальные проекты, ошибки и находки.</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-5">
            {JOURNAL.map((post, i) => (
              <FadeIn key={post.title} delay={i * 70}>
                <article
                  className="rounded-2xl p-7 cursor-pointer transition-all duration-200 group"
                  style={{ backgroundColor: "#fff", border: "1px solid #e8e8e6" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#c8c8c6"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8e8e6"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium px-2 py-1 rounded-full" style={{ backgroundColor: "#f5f5f3", color: "#4a4a48" }}>{post.tag}</span>
                    <span className="text-xs" style={{ color: "#9a9a98" }}>{post.date}</span>
                    <span className="text-xs ml-auto" style={{ color: "#9a9a98" }}>{post.readTime} чтения</span>
                  </div>
                  <h3 className="text-base font-semibold mb-3 leading-snug group-hover:underline" style={{ textDecorationColor: "#d4d4d2" }}>{post.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b6b6a" }}>{post.excerpt}</p>
                  <div className="flex items-center gap-1 mt-5 text-xs font-medium" style={{ color: "#9a9a98" }}>
                    Читать <Icon name="ArrowRight" size={12} />
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-24 px-6" style={{ backgroundColor: "#f5f5f3" }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-xs font-medium uppercase tracking-widest mb-3 block" style={{ color: "#9a9a98" }}>Контакт</span>
              <h2 className="text-4xl md:text-5xl font-semibold mb-5" style={{ letterSpacing: "-0.03em" }}>
                Давайте поговорим
              </h2>
              <p className="text-base" style={{ color: "#6b6b6a", maxWidth: 420, margin: "0 auto" }}>
                Напишите о задаче. Даже если она ещё не сформулирована чётко — это нормально, разберёмся вместе.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={80}>
            <div className="rounded-3xl p-8 md:p-12" style={{ backgroundColor: "#fff", border: "1px solid #e8e8e6" }}>
              {sent ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#f0fdf4" }}>
                    <Icon name="CheckCircle" size={28} style={{ color: "#16a34a" }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Сообщение получено</h3>
                  <p className="text-sm" style={{ color: "#6b6b6a" }}>Отвечу в течение дня. Обычно быстрее.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-medium mb-2 block" style={{ color: "#4a4a48" }}>Имя</label>
                      <input
                        type="text"
                        placeholder="Алексей"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{ backgroundColor: "#f5f5f3", border: "1px solid #e8e8e6", color: "#111110" }}
                        onFocus={e => (e.target.style.borderColor = "#111110")}
                        onBlur={e => (e.target.style.borderColor = "#e8e8e6")}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium mb-2 block" style={{ color: "#4a4a48" }}>Компания / проект</label>
                      <input
                        type="text"
                        placeholder="Название"
                        value={form.company}
                        onChange={e => setForm({ ...form, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{ backgroundColor: "#f5f5f3", border: "1px solid #e8e8e6", color: "#111110" }}
                        onFocus={e => (e.target.style.borderColor = "#111110")}
                        onBlur={e => (e.target.style.borderColor = "#e8e8e6")}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium mb-2 block" style={{ color: "#4a4a48" }}>Расскажите о задаче</label>
                    <textarea
                      rows={5}
                      placeholder="Что делаем, зачем, в каком контексте..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                      style={{ backgroundColor: "#f5f5f3", border: "1px solid #e8e8e6", color: "#111110" }}
                      onFocus={e => (e.target.style.borderColor = "#111110")}
                      onBlur={e => (e.target.style.borderColor = "#e8e8e6")}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-sm font-medium transition-all duration-200"
                    style={{ backgroundColor: "#111110", color: "#fafaf9" }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#333")}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#111110")}>
                    Отправить сообщение
                  </button>
                </form>
              )}
            </div>
          </FadeIn>

          {/* Social links */}
          <FadeIn delay={160}>
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              {[
                { icon: "Send", label: "Telegram", href: "https://t.me/" },
                { icon: "Instagram", label: "Instagram", href: "https://instagram.com/" },
                { icon: "Mail", label: "katya@example.com", href: "mailto:katya@example.com" },
              ].map(s => (
                <a key={s.label} href={s.href}
                  className="flex items-center gap-2 text-sm transition-colors duration-200"
                  style={{ color: "#6b6b6a" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#111110")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#6b6b6a")}>
                  <Icon name={s.icon} size={16} />
                  {s.label}
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-8 px-6" style={{ borderTop: "1px solid #e8e8e6", backgroundColor: "#fafaf9" }}>
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <span className="text-sm font-semibold" style={{ color: "#111110" }}>Екатерина Алистратова</span>
          <span className="text-xs" style={{ color: "#9a9a98" }}>UX/UI Designer · ИП · Удалёнка / Гибрид · {new Date().getFullYear()}</span>
        </div>
      </footer>

    </div>
  );
}