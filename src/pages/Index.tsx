import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Главная", href: "#home" },
  { label: "О компании", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Блог", href: "#blog" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  { icon: "Globe", title: "Веб-разработка", desc: "Создаём современные сайты и веб-приложения, которые работают на всех устройствах и привлекают клиентов." },
  { icon: "Smartphone", title: "Мобильные приложения", desc: "Разрабатываем iOS и Android приложения для вашего бизнеса с удобным интерфейсом и высокой производительностью." },
  { icon: "BarChart3", title: "Аналитика и SEO", desc: "Настраиваем аналитику, оптимизируем сайт для поисковых систем и увеличиваем органический трафик." },
  { icon: "Palette", title: "UI/UX Дизайн", desc: "Проектируем интерфейсы, которые нравятся пользователям и увеличивают конверсию в покупки." },
  { icon: "Shield", title: "Кибербезопасность", desc: "Защищаем ваши данные и цифровую инфраструктуру от угроз с помощью современных решений безопасности." },
  { icon: "Cloud", title: "Облачные решения", desc: "Переводим бизнес в облако: настраиваем инфраструктуру, автоматизируем процессы, снижаем издержки." },
];

const PORTFOLIO = [
  { tag: "E-commerce", title: "Интернет-магазин одежды", result: "+240% продаж за 6 месяцев" },
  { tag: "SaaS", title: "CRM для застройщиков", result: "3000+ активных пользователей" },
  { tag: "Финтех", title: "Платёжная платформа", result: "Обработка 50M ₽/день" },
  { tag: "Медицина", title: "Система записи пациентов", result: "40% сокращение времени ожидания" },
];

const BLOG_POSTS = [
  { date: "24 апр 2026", tag: "Технологии", title: "Как AI меняет веб-разработку в 2026 году", desc: "Рассказываем о новых инструментах, которые помогают создавать сайты быстрее и дешевле." },
  { date: "15 апр 2026", tag: "Бизнес", title: "5 причин обновить корпоративный сайт прямо сейчас", desc: "Устаревший сайт отталкивает клиентов. Разбираем признаки и способы исправить ситуацию." },
  { date: "3 апр 2026", tag: "SEO", title: "SEO в 2026: что работает, а что уже нет", desc: "Актуальные стратегии продвижения с учётом последних обновлений алгоритмов поисковиков." },
];

const TRUST_BADGES = [
  { icon: "Building2", label: "150+ проектов" },
  { icon: "Layers", label: "Единая экосистема" },
  { icon: "CalendarCheck", label: "Демо 7 дней" },
  { icon: "Headphones", label: "Поддержка и внедрение" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F7FAF8", color: "#1B1F28" }}>

      {/* ===== NAVBAR ===== */}
      <nav style={{ backgroundColor: "rgba(247,250,248,0.92)", borderBottom: "1px solid #E8F0EB" }} className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 md:px-8">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#34B86D" }}>
              <Icon name="Zap" size={18} className="text-white" />
            </div>
            <span className="font-display text-xl font-bold tracking-wide" style={{ color: "#1B1F28" }}>
              NOVA<span style={{ color: "#34B86D" }}>TECH</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="text-sm font-medium transition-colors duration-200" style={{ color: "#667085" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#34B86D")}
                onMouseLeave={e => (e.currentTarget.style.color = "#667085")}>
                {l.label}
              </a>
            ))}
          </div>

          <a href="#contacts" className="hidden md:inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200"
            style={{ backgroundColor: "#34B86D" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#249454")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#34B86D")}>
            Оставить заявку
          </a>

          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} style={{ color: "#1B1F28" }} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-3" style={{ borderColor: "#E8F0EB" }}>
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="font-medium py-1" style={{ color: "#1B1F28" }} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contacts" className="mt-2 text-white text-center py-3 rounded-lg font-semibold" style={{ backgroundColor: "#34B86D" }} onClick={() => setMenuOpen(false)}>
              Оставить заявку
            </a>
          </div>
        )}
      </nav>

      {/* ===== HERO ===== */}
      <section id="home" className="pt-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12 pb-0">

          {/* Hero card — светлая большая карточка */}
          <div className="rounded-3xl overflow-hidden relative" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8F0EB" }}>
            <div className="grid md:grid-cols-2 gap-0 min-h-[520px]">

              {/* LEFT: текст */}
              <div className="p-10 md:p-14 flex flex-col justify-between">
                <div>
                  {/* Super-label */}
                  <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "#98A2B3" }}>
                    #1 среди digital-агентств региона
                  </p>

                  <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-5" style={{ color: "#1B1F28" }}>
                    NOVATECH — агентство,<br />
                    которое показывает,<br />
                    <span style={{ color: "#34B86D" }}>где бизнес теряет<br />клиентов и деньги</span>
                  </h1>

                  <p className="text-base leading-relaxed mb-10" style={{ color: "#667085", maxWidth: "420px" }}>
                    От первого обращения до повторной продажи — сайты, аналитика, автоматизация и AI-инструменты в одной экосистеме.
                  </p>

                  {/* CTA buttons */}
                  <div className="flex flex-wrap items-center gap-4">
                    <a href="#contacts"
                      className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-xl text-base transition-all duration-200"
                      style={{ backgroundColor: "#34B86D" }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#249454")}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#34B86D")}>
                      Демо на 7 дней
                      <Icon name="ArrowRight" size={18} />
                    </a>
                    <a href="#portfolio"
                      className="inline-flex items-center gap-2 font-semibold text-base transition-colors duration-200"
                      style={{ color: "#667085" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#34B86D")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#667085")}>
                      Где клиент теряет деньги
                      <Icon name="ArrowRight" size={16} />
                    </a>
                  </div>
                </div>

                {/* Trust badges bottom */}
                <div className="flex flex-col gap-3 mt-12">
                  <div className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: "#F7FAF8", border: "1px solid #E8F0EB" }}>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#EEF8F2" }}>
                      <Icon name="Globe" size={18} style={{ color: "#34B86D" }} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold" style={{ color: "#1B1F28" }}>Интеграция с ведущими платформами</div>
                      <div className="text-xs" style={{ color: "#98A2B3" }}>Разработано в России</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: "#F7FAF8", border: "1px solid #E8F0EB" }}>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#DCE6F2" }}>
                      <Icon name="Award" size={18} style={{ color: "#7C98B6" }} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold" style={{ color: "#1B1F28" }}>Резидент Сколково</div>
                      <div className="text-xs" style={{ color: "#98A2B3" }}>Инновационный проект 2025</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: diagram illustration */}
              <div className="relative flex items-center justify-center p-8 md:p-10" style={{ backgroundColor: "#F4FBF7" }}>
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: "radial-gradient(circle at 2px 2px, #7BD9A1 1px, transparent 0)",
                  backgroundSize: "28px 28px"
                }} />

                <div className="relative z-10 w-full">
                  <img
                    src="https://cdn.poehali.dev/projects/56e2666f-17ee-442b-bfe7-8254b5ffe939/files/4a7928ba-0eb5-42e5-85d5-15161b217ada.jpg"
                    alt="Platform ecosystem"
                    className="w-full h-auto rounded-2xl animate-float"
                    style={{ maxHeight: "400px", objectFit: "cover" }}
                  />

                  {/* Floating stat cards */}
                  <div className="absolute top-4 left-2 bg-white rounded-xl px-4 py-2.5 shadow-lg" style={{ border: "1px solid #E8F0EB" }}>
                    <div className="font-display text-xl font-bold" style={{ color: "#34B86D" }}>+127%</div>
                    <div className="text-xs" style={{ color: "#98A2B3" }}>рост конверсии</div>
                  </div>

                  <div className="absolute bottom-4 right-2 bg-white rounded-xl px-4 py-2.5 shadow-lg" style={{ border: "1px solid #E8F0EB" }}>
                    <div className="font-display text-xl font-bold" style={{ color: "#1B1F28" }}>150+</div>
                    <div className="text-xs" style={{ color: "#98A2B3" }}>клиентов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust bar — 4 карточки */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3 mb-12">
            {TRUST_BADGES.map((b) => (
              <div key={b.label}
                className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4 transition-shadow duration-200 hover:shadow-md"
                style={{ border: "1px solid #E8F0EB" }}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#EEF8F2" }}>
                  <Icon name={b.icon} size={18} style={{ color: "#34B86D" }} />
                </div>
                <span className="font-semibold text-sm" style={{ color: "#1B1F28" }}>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FUNNEL (WHERE BUSINESS LOSES MONEY) ===== */}
      <section id="about" className="py-20 px-4 md:px-8" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ color: "#1B1F28" }}>
              Где бизнес{" "}
              <span style={{ color: "#34B86D" }}>теряет деньги?</span>
            </h2>
            <p className="text-lg" style={{ color: "#667085" }}>
              Самые дорогие потери происходят не в рекламе, а между этапами пути клиента.
            </p>
          </div>

          {/* Funnel stages */}
          <div className="relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-[52px] left-[60px] right-[60px] h-px" style={{ backgroundColor: "#DDF3E5", zIndex: 0 }} />

            <div className="grid grid-cols-2 md:grid-cols-6 gap-3 relative z-10">
              {[
                { icon: "PhoneCall", label: "Обращение", loss: null },
                { icon: "CalendarDays", label: "Запись", loss: "Не дозвонились" },
                { icon: "Stethoscope", label: "Приём", loss: "Не дошёл" },
                { icon: "ClipboardList", label: "План работ", loss: "Не понял задачу" },
                { icon: "CreditCard", label: "Оплата", loss: "Не купил" },
                { icon: "RotateCcw", label: "Повторный заказ", loss: "Не вернулся" },
              ].map((stage, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  {/* Stage card */}
                  <div
                    className="w-full flex flex-col items-center gap-3 rounded-2xl py-5 px-3 transition-all duration-200 hover:shadow-md cursor-default"
                    style={{
                      backgroundColor: i === 0 ? "#FFFFFF" : "#F4FBF7",
                      border: `1px solid ${i === 0 ? "#E8F0EB" : "#DDF3E5"}`,
                    }}
                  >
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#EEF8F2" }}>
                      <Icon name={stage.icon} size={20} style={{ color: "#34B86D" }} />
                    </div>
                    <span className="text-sm font-semibold text-center" style={{ color: "#1B1F28" }}>{stage.label}</span>
                  </div>

                  {/* Loss indicator */}
                  {stage.loss ? (
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: "#FFF1F3" }}>
                        <Icon name="X" size={14} style={{ color: "#E85D75" }} />
                      </div>
                      <span className="text-xs text-center leading-tight" style={{ color: "#E85D75" }}>{stage.loss}</span>
                    </div>
                  ) : (
                    <div className="h-[52px]" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom note */}
          <div className="mt-10 rounded-2xl p-6 flex items-start gap-4" style={{ backgroundColor: "#F4FBF7", border: "1px solid #DDF3E5" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#EEF8F2" }}>
              <Icon name="Lightbulb" size={20} style={{ color: "#34B86D" }} />
            </div>
            <div>
              <p className="font-semibold mb-1" style={{ color: "#1B1F28" }}>NOVATECH выявляет узкие места и помогает закрыть потери на каждом этапе</p>
              <p className="text-sm" style={{ color: "#667085" }}>Сайт, CRM, аналитика и автоматизация работают как единая система — без дыр в воронке.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-20 px-4 md:px-8" style={{ backgroundColor: "#F7FAF8" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest mb-4 block" style={{ color: "#34B86D" }}>Услуги</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "#1B1F28" }}>Что мы делаем</h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "#667085" }}>Полный цикл цифровой трансформации вашего бизнеса — от стратегии до поддержки.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <div key={i}
                className="group bg-white rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:shadow-lg"
                style={{ border: "1px solid #E8F0EB" }}
                onMouseEnter={e => { (e.currentTarget.style.borderColor = "#7BD9A1"); }}
                onMouseLeave={e => { (e.currentTarget.style.borderColor = "#E8F0EB"); }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300" style={{ backgroundColor: "#EEF8F2" }}>
                  <Icon name={s.icon} size={26} style={{ color: "#34B86D" }} />
                </div>
                <h3 className="font-bold text-xl mb-3" style={{ color: "#1B1F28" }}>{s.title}</h3>
                <p className="leading-relaxed" style={{ color: "#667085" }}>{s.desc}</p>
                <div className="mt-6 flex items-center gap-2 font-semibold text-sm" style={{ color: "#34B86D" }}>
                  Подробнее <Icon name="ArrowRight" size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO ===== */}
      <section id="portfolio" className="py-20 px-4 md:px-8" style={{ backgroundColor: "#161D30" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest mb-4 block" style={{ color: "#7BD9A1" }}>Портфолио</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Наши проекты</h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "#667085" }}>Реальные результаты для реального бизнеса.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {PORTFOLIO.map((p, i) => (
              <div key={i}
                className="rounded-2xl p-8 cursor-pointer group transition-all duration-300 hover:scale-[1.02]"
                style={{ backgroundColor: "#202B45", border: "1px solid rgba(123,217,161,0.15)" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(123,217,161,0.4)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(123,217,161,0.15)")}>
                <span className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-5" style={{ backgroundColor: "rgba(52,184,109,0.15)", color: "#7BD9A1" }}>{p.tag}</span>
                <h3 className="font-bold text-xl text-white mb-3">{p.title}</h3>
                <div className="flex items-center gap-2 text-sm" style={{ color: "#7BD9A1" }}>
                  <Icon name="TrendingUp" size={14} />
                  {p.result}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="#contacts"
              className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200"
              style={{ backgroundColor: "rgba(52,184,109,0.15)", border: "1px solid rgba(52,184,109,0.3)" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#34B86D")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "rgba(52,184,109,0.15)")}>
              Обсудить ваш проект <Icon name="ArrowRight" size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ===== BLOG ===== */}
      <section id="blog" className="py-20 px-4 md:px-8" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest mb-4 block" style={{ color: "#34B86D" }}>Блог</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: "#1B1F28" }}>Полезное о digital</h2>
            </div>
            <a href="#blog" className="hidden md:flex items-center gap-2 font-semibold transition-all duration-200" style={{ color: "#34B86D" }}>
              Все статьи <Icon name="ArrowRight" size={18} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {BLOG_POSTS.map((post, i) => (
              <article key={i}
                className="bg-white rounded-2xl overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300"
                style={{ border: "1px solid #E8F0EB" }}>
                <div className="h-44 flex items-center justify-center" style={{ backgroundColor: "#F4FBF7" }}>
                  <Icon name="FileText" size={44} style={{ color: "#DDF3E5" }} />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: "#EEF8F2", color: "#34B86D" }}>{post.tag}</span>
                    <span className="text-sm" style={{ color: "#98A2B3" }}>{post.date}</span>
                  </div>
                  <h3 className="font-bold text-lg leading-snug mb-3 transition-colors duration-200" style={{ color: "#1B1F28" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#34B86D")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#1B1F28")}>
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#667085" }}>{post.desc}</p>
                  <div className="mt-5 flex items-center gap-2 font-semibold text-sm" style={{ color: "#34B86D" }}>
                    Читать <Icon name="ArrowRight" size={14} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-20 px-4" style={{ backgroundColor: "#F7FAF8" }}>
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl px-10 py-16 text-center" style={{ background: "linear-gradient(135deg, #161D30 0%, #202B45 100%)" }}>
            <span className="text-sm font-semibold uppercase tracking-widest mb-4 block" style={{ color: "#7BD9A1" }}>Начать сейчас</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
              Готовы запустить проект?
            </h2>
            <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "#667085" }}>
              Получите бесплатную консультацию и расчёт стоимости за 24 часа.
            </p>
            <a href="#contacts"
              className="inline-flex items-center gap-2 font-bold px-10 py-5 rounded-xl text-lg transition-all duration-200"
              style={{ backgroundColor: "#34B86D", color: "#FFFFFF" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#249454")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#34B86D")}>
              Получить консультацию <Icon name="ArrowRight" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* ===== CONTACTS ===== */}
      <section id="contacts" className="py-20 px-4 md:px-8" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest mb-4 block" style={{ color: "#34B86D" }}>Контакты</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: "#1B1F28" }}>
                Давайте<br />поговорим о<br />
                <span style={{ color: "#34B86D" }}>вашем проекте</span>
              </h2>
              <p className="text-lg leading-relaxed mb-10" style={{ color: "#667085" }}>
                Расскажите о задаче — мы свяжемся в течение 2 часов и предложим лучшее решение.
              </p>

              <div className="flex flex-col gap-5">
                {[
                  { icon: "Phone", label: "Телефон", value: "+7 (800) 555-35-35", bg: "#EEF8F2", color: "#34B86D" },
                  { icon: "Mail", label: "Email", value: "info@novatech.ru", bg: "#EEF8F2", color: "#34B86D" },
                  { icon: "MapPin", label: "Офис", value: "Москва, ул. Большая Садовая, 5", bg: "#DCE6F2", color: "#7C98B6" },
                  { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 9:00 – 19:00", bg: "#DCE6F2", color: "#7C98B6" },
                ].map(c => (
                  <div key={c.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: c.bg }}>
                      <Icon name={c.icon} size={22} style={{ color: c.color }} />
                    </div>
                    <div>
                      <div className="text-sm" style={{ color: "#98A2B3" }}>{c.label}</div>
                      <div className="font-semibold" style={{ color: "#1B1F28" }}>{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl p-8" style={{ backgroundColor: "#F7FAF8", border: "1px solid #E8F0EB" }}>
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "#EEF8F2" }}>
                    <Icon name="CheckCircle" size={40} style={{ color: "#34B86D" }} />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-3" style={{ color: "#1B1F28" }}>Заявка отправлена!</h3>
                  <p style={{ color: "#667085" }}>Мы свяжемся с вами в течение 2 часов в рабочее время.</p>
                  <button onClick={() => setSent(false)} className="mt-8 font-semibold hover:underline" style={{ color: "#34B86D" }}>
                    Отправить ещё одну
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-bold text-2xl mb-2" style={{ color: "#1B1F28" }}>Оставить заявку</h3>
                  <p className="mb-8" style={{ color: "#667085" }}>Заполните форму — мы перезвоним бесплатно</p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block" style={{ color: "#1B1F28" }}>Ваше имя *</label>
                      <input
                        required type="text" placeholder="Иван Петров"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white rounded-xl px-4 py-3.5 placeholder-gray-400 focus:outline-none transition-all duration-200"
                        style={{ border: "1.5px solid #E8F0EB", color: "#1B1F28" }}
                        onFocus={e => (e.currentTarget.style.borderColor = "#34B86D")}
                        onBlur={e => (e.currentTarget.style.borderColor = "#E8F0EB")}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block" style={{ color: "#1B1F28" }}>Телефон *</label>
                      <input
                        required type="tel" placeholder="+7 (999) 000-00-00"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-white rounded-xl px-4 py-3.5 placeholder-gray-400 focus:outline-none transition-all duration-200"
                        style={{ border: "1.5px solid #E8F0EB", color: "#1B1F28" }}
                        onFocus={e => (e.currentTarget.style.borderColor = "#34B86D")}
                        onBlur={e => (e.currentTarget.style.borderColor = "#E8F0EB")}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block" style={{ color: "#1B1F28" }}>Расскажите о проекте</label>
                      <textarea
                        rows={4} placeholder="Кратко опишите задачу..."
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-white rounded-xl px-4 py-3.5 placeholder-gray-400 focus:outline-none transition-all duration-200 resize-none"
                        style={{ border: "1.5px solid #E8F0EB", color: "#1B1F28" }}
                        onFocus={e => (e.currentTarget.style.borderColor = "#34B86D")}
                        onBlur={e => (e.currentTarget.style.borderColor = "#E8F0EB")}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full text-white font-bold py-4 rounded-xl text-lg transition-colors duration-200 mt-2 flex items-center justify-center gap-2"
                      style={{ backgroundColor: "#34B86D" }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#249454")}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#34B86D")}>
                      Отправить заявку <Icon name="Send" size={18} />
                    </button>

                    <p className="text-xs text-center" style={{ color: "#98A2B3" }}>
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-12 px-4 md:px-8" style={{ backgroundColor: "#161D30" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#34B86D" }}>
                  <Icon name="Zap" size={18} className="text-white" />
                </div>
                <span className="font-display text-xl font-bold text-white">NOVA<span style={{ color: "#34B86D" }}>TECH</span></span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#667085" }}>
                Цифровое агентство полного цикла. Создаём продукты, которые приносят результат.
              </p>
              <div className="flex gap-3 mt-5">
                {["MessageCircle", "Send", "Instagram", "Linkedin"].map(icon => (
                  <button key={icon}
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
                    style={{ backgroundColor: "#202B45" }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#34B86D")}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#202B45")}>
                    <Icon name={icon} size={16} style={{ color: "#667085" }} />
                  </button>
                ))}
              </div>
            </div>

            {[
              { title: "Услуги", links: ["Веб-разработка", "Мобильные приложения", "UI/UX Дизайн", "SEO и аналитика"] },
              { title: "Компания", links: ["О нас", "Портфолио", "Блог", "Карьера"] },
              { title: "Контакты", links: ["+7 (800) 555-35-35", "info@novatech.ru", "Москва, Садовая 5", "Пн–Пт 9:00–19:00"] },
            ].map(col => (
              <div key={col.title}>
                <div className="font-semibold mb-4 text-white">{col.title}</div>
                <ul className="flex flex-col gap-2">
                  {col.links.map(link => (
                    <li key={link}>
                      <a href="#" className="text-sm transition-colors duration-200" style={{ color: "#667085" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#34B86D")}
                        onMouseLeave={e => (e.currentTarget.style.color = "#667085")}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid #202B45" }}>
            <p className="text-sm" style={{ color: "#667085" }}>© 2026 NOVATECH. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="text-sm transition-colors" style={{ color: "#667085" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#98A2B3")}
                onMouseLeave={e => (e.currentTarget.style.color = "#667085")}>
                Политика конфиденциальности
              </a>
              <a href="#" className="text-sm transition-colors" style={{ color: "#667085" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#98A2B3")}
                onMouseLeave={e => (e.currentTarget.style.color = "#667085")}>
                Договор оферты
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}