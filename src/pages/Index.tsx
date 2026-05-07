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
  { tag: "E-commerce", title: "Интернет-магазин одежды", result: "+240% продаж за 6 месяцев", color: "from-blue-500 to-violet-600" },
  { tag: "SaaS", title: "CRM для застройщиков", result: "3000+ активных пользователей", color: "from-emerald-500 to-teal-600" },
  { tag: "Финтех", title: "Платёжная платформа", result: "Обработка 50M ₽/день", color: "from-orange-500 to-red-600" },
  { tag: "Медицина", title: "Система записи пациентов", result: "40% сокращение времени ожидания", color: "from-pink-500 to-rose-600" },
];

const BLOG_POSTS = [
  { date: "24 апр 2026", tag: "Технологии", title: "Как AI меняет веб-разработку в 2026 году", desc: "Рассказываем о новых инструментах, которые помогают создавать сайты быстрее и дешевле." },
  { date: "15 апр 2026", tag: "Бизнес", title: "5 причин обновить корпоративный сайт прямо сейчас", desc: "Устаревший сайт отталкивает клиентов. Разбираем признаки и способы исправить ситуацию." },
  { date: "3 апр 2026", tag: "SEO", title: "SEO в 2026: что работает, а что уже нет", desc: "Актуальные стратегии продвижения с учётом последних обновлений алгоритмов поисковиков." },
];

const STATS = [
  { value: "150+", label: "Проектов запущено" },
  { value: "8 лет", label: "На рынке" },
  { value: "97%", label: "Довольных клиентов" },
  { value: "40+", label: "Специалистов" },
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
    <div className="min-h-screen bg-white">

      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 md:px-8">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={18} className="text-white" />
            </div>
            <span className="font-display text-xl font-bold tracking-wide text-gray-900">NOVA<span className="text-blue-600">TECH</span></span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors duration-200">
                {l.label}
              </a>
            ))}
          </div>

          <a href="#contacts" className="hidden md:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200">
            Оставить заявку
          </a>

          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} className="text-gray-700" />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="text-gray-700 font-medium py-1" onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contacts" className="mt-2 bg-blue-600 text-white text-center py-3 rounded-lg font-semibold" onClick={() => setMenuOpen(false)}>
              Оставить заявку
            </a>
          </div>
        )}
      </nav>

      {/* ===== HERO ===== */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)" }}>
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/56e2666f-17ee-442b-bfe7-8254b5ffe939/files/44723168-9f92-42c7-ab2b-6c963225af92.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(37,99,235,0.3) 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, rgba(124,58,237,0.2) 0%, transparent 50%)" }} />

        <div className="absolute top-32 right-20 w-64 h-64 opacity-10 hidden lg:block">
          <div className="grid grid-cols-8 gap-4">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 pt-20 pb-16 px-4 md:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-medium px-4 py-2 rounded-full mb-8">
              <Icon name="Sparkles" size={14} />
              Топ-1 digital-агентство в регионе
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Берём цифровой<br />
              <span className="gradient-text">бизнес</span> под<br />
              полный контроль
            </h1>

            <p className="text-lg md:text-xl text-blue-100/80 mb-10 max-w-xl leading-relaxed">
              От идеи до запуска — разрабатываем сайты, приложения и цифровые продукты, которые приносят реальные деньги.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contacts" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30">
                Обсудить проект
                <Icon name="ArrowRight" size={20} />
              </a>
              <a href="#portfolio" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg border border-white/20 transition-all duration-200">
                Смотреть работы
              </a>
            </div>

            <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/10">
              {STATS.map(s => (
                <div key={s.value}>
                  <div className="font-display text-3xl font-bold text-white">{s.value}</div>
                  <div className="text-blue-200/70 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={28} className="text-white/40" />
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-4 block">О компании</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                8 лет создаём<br />цифровые продукты,<br /><span className="gradient-text">которые работают</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                NOVATECH — команда из 40+ специалистов: разработчиков, дизайнеров и маркетологов. Мы не просто делаем красивые сайты — мы строим инструменты, которые привлекают клиентов и увеличивают выручку бизнеса.
              </p>
              <div className="flex flex-col gap-4">
                {["Работаем по договору с гарантией результата", "Прозрачная отчётность на каждом этапе", "Поддержка 24/7 после запуска проекта"].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={14} className="text-blue-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "Award", title: "Лучшее агентство", sub: "по версии Ruward 2025" },
                { icon: "Users", title: "150+ клиентов", sub: "малый и средний бизнес" },
                { icon: "TrendingUp", title: "+3x ROI", sub: "средний рост у клиентов" },
                { icon: "Clock", title: "В срок всегда", sub: "97% проектов без задержек" },
              ].map(card => (
                <div key={card.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={card.icon} size={24} className="text-blue-600" />
                  </div>
                  <div className="font-bold text-gray-900 text-lg">{card.title}</div>
                  <div className="text-gray-500 text-sm mt-1">{card.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-4 block">Услуги</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">Что мы делаем</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Полный цикл цифровой трансформации вашего бизнеса — от стратегии до поддержки.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div key={i} className="group bg-gray-50 hover:bg-blue-600 rounded-2xl p-8 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-500/20">
                <div className="w-14 h-14 bg-blue-100 group-hover:bg-blue-500 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon name={s.icon} size={26} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 group-hover:text-white mb-3 transition-colors duration-300">{s.title}</h3>
                <p className="text-gray-500 group-hover:text-blue-100 leading-relaxed transition-colors duration-300">{s.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-blue-600 group-hover:text-white font-semibold text-sm transition-colors duration-300">
                  Подробнее <Icon name="ArrowRight" size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO ===== */}
      <section id="portfolio" className="py-20 px-4 md:px-8" style={{ background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4 block">Портфолио</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Наши проекты</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">Реальные результаты для реального бизнеса.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {PORTFOLIO.map((p, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden group cursor-pointer">
                <div className={`h-56 bg-gradient-to-br ${p.color} relative flex items-end p-8 transition-transform duration-300 group-hover:scale-105`}>
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 10px)" }} />
                  <div className="relative z-10">
                    <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block backdrop-blur-sm">{p.tag}</span>
                    <h3 className="text-white font-bold text-2xl mb-2">{p.title}</h3>
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      <Icon name="TrendingUp" size={14} />
                      {p.result}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="#contacts" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-8 py-4 rounded-xl transition-all duration-200">
              Обсудить ваш проект
              <Icon name="ArrowRight" size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ===== BLOG ===== */}
      <section id="blog" className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-4 block">Блог</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900">Полезное о digital</h2>
            </div>
            <a href="#blog" className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-200">
              Все статьи <Icon name="ArrowRight" size={18} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post, i) => (
              <article key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-blue-50 to-violet-50 flex items-center justify-center">
                  <Icon name="FileText" size={48} className="text-blue-200" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">{post.tag}</span>
                    <span className="text-gray-400 text-sm">{post.date}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg leading-snug mb-3 group-hover:text-blue-600 transition-colors duration-200">{post.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{post.desc}</p>
                  <div className="mt-5 flex items-center gap-2 text-blue-600 font-semibold text-sm">
                    Читать <Icon name="ArrowRight" size={14} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(135deg, #1d4ed8 0%, #7c3aed 100%)" }}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Готовы запустить проект?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
            Получите бесплатную консультацию и расчёт стоимости за 24 часа.
          </p>
          <a href="#contacts" className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold px-10 py-5 rounded-xl text-lg transition-colors duration-200 shadow-xl">
            Получить консультацию
            <Icon name="ArrowRight" size={20} />
          </a>
        </div>
      </section>

      {/* ===== CONTACTS ===== */}
      <section id="contacts" className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-4 block">Контакты</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Давайте<br />поговорим о<br /><span className="gradient-text">вашем проекте</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                Расскажите о задаче — мы свяжемся в течение 2 часов и предложим лучшее решение.
              </p>

              <div className="flex flex-col gap-5">
                {[
                  { icon: "Phone", label: "Телефон", value: "+7 (800) 555-35-35" },
                  { icon: "Mail", label: "Email", value: "info@novatech.ru" },
                  { icon: "MapPin", label: "Офис", value: "Москва, ул. Большая Садовая, 5" },
                  { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 9:00 – 19:00" },
                ].map(c => (
                  <div key={c.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={c.icon} size={22} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">{c.label}</div>
                      <div className="text-gray-900 font-semibold">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <Icon name="CheckCircle" size={40} className="text-green-600" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">Заявка отправлена!</h3>
                  <p className="text-gray-500">Мы свяжемся с вами в течение 2 часов в рабочее время.</p>
                  <button onClick={() => setSent(false)} className="mt-8 text-blue-600 font-semibold hover:underline">Отправить ещё одну</button>
                </div>
              ) : (
                <>
                  <h3 className="font-bold text-2xl text-gray-900 mb-2">Оставить заявку</h3>
                  <p className="text-gray-500 mb-8">Заполните форму — мы перезвоним бесплатно</p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label className="text-gray-700 text-sm font-medium mb-2 block">Ваше имя *</label>
                      <input
                        required
                        type="text"
                        placeholder="Иван Петров"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="text-gray-700 text-sm font-medium mb-2 block">Телефон *</label>
                      <input
                        required
                        type="tel"
                        placeholder="+7 (999) 000-00-00"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="text-gray-700 text-sm font-medium mb-2 block">Расскажите о проекте</label>
                      <textarea
                        rows={4}
                        placeholder="Кратко опишите задачу — что нужно сделать, сроки, бюджет..."
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl text-lg transition-colors duration-200 mt-2 flex items-center justify-center gap-2"
                    >
                      Отправить заявку
                      <Icon name="Send" size={18} />
                    </button>

                    <p className="text-gray-400 text-xs text-center">
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
      <footer style={{ background: "#0f172a" }} className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={18} className="text-white" />
                </div>
                <span className="font-display text-xl font-bold text-white">NOVA<span className="text-blue-400">TECH</span></span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Цифровое агентство полного цикла. Создаём продукты, которые приносят результат.
              </p>
              <div className="flex gap-3 mt-5">
                {["MessageCircle", "Send", "Instagram", "Linkedin"].map(icon => (
                  <button key={icon} className="w-9 h-9 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200">
                    <Icon name={icon} size={16} className="text-slate-400" />
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
                <div className="text-white font-semibold mb-4">{col.title}</div>
                <ul className="flex flex-col gap-2">
                  {col.links.map(link => (
                    <li key={link}>
                      <a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">© 2026 NOVATECH. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Договор оферты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}