import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Award,
  ChevronDown,
  Clock,
  Heart,
  Instagram,
  Leaf,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  Store,
  Truck,
  X,
} from "lucide-react";
import { ExternalOrderButton } from "@/components/ExternalOrderButton";
import {
  businessConfig,
  faqs,
  galleryImages,
  heroBowl,
  openingHours,
  ORDER_URL,
  products,
  storefrontImg,
  storyImg,
  testimonials,
} from "@/lib/business-config";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roxo Nativo Açaí | Seu momento merece mais sabor" },
      {
        name: "description",
        content:
          "Conheça o Roxo Nativo Açaí, descubra nossas combinações, veja horários e localização e acesse a plataforma para fazer seu pedido.",
      },
      { property: "og:title", content: "Roxo Nativo Açaí | Seu momento merece mais sabor" },
      {
        property: "og:description",
        content:
          "Conheça o Roxo Nativo Açaí, descubra nossas combinações, veja horários e localização e acesse a plataforma para fazer seu pedido.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: businessConfig.name,
          servesCuisine: "Açaí",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Avenida das Palmeiras, 245",
            addressLocality: "Centro",
            postalCode: businessConfig.cep,
            addressCountry: "BR",
          },
          telephone: businessConfig.phone,
          openingHours: ["Mo-Fr 10:00-22:00", "Sa 10:00-23:00", "Su 12:00-21:00"],
          hasMenu: businessConfig.orderUrl,
          acceptsReservations: false,
        }),
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-purple-800 focus:px-4 focus:py-2 focus:text-white"
      >
        Pular para o conteúdo
      </a>
      <AnnouncementBar />
      <Header />
      <main id="main">
        <Hero />
        <Benefits />
        <Products />
        <LocationSection />
        <HowToOrder />
        <BrandStory />
        <Gallery />
        <Testimonials />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <MobileOrderBar />
    </>
  );
}

/* ------------------------------ Announcement ------------------------------ */

function AnnouncementBar() {
  return (
    <div className="hidden bg-purple-900 text-purple-100 sm:block">
      <div className="mx-auto flex max-w-[1240px] items-center justify-center gap-3 px-6 py-2 text-sm">
        <Sparkles className="h-4 w-4 text-yellow-500" aria-hidden />
        <span>Peça pela plataforma online e acompanhe seu pedido</span>
        <a
          href={ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold underline underline-offset-4 hover:text-white"
        >
          Fazer pedido agora
        </a>
      </div>
    </div>
  );
}

/* --------------------------------- Header --------------------------------- */

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#destaques", label: "Destaques" },
  { href: "#sobre", label: "Sobre" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contato", label: "Contato" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-cream-100/85 backdrop-blur-md shadow-[0_6px_20px_-12px_rgba(43,16,61,0.2)]"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
        <a href="#inicio" className="block" aria-label="Roxo Nativo Açaí — início">
          <img
            src={logo}
            alt="Roxo Nativo"
            width={955}
            height={468}
            className="h-11 w-auto sm:h-12"
          />
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-4 py-2 text-sm font-semibold text-purple-900/80 transition-colors hover:bg-green-100 hover:text-green-700"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ExternalOrderButton size="sm" className="hidden sm:inline-flex">
            Fazer meu pedido
          </ExternalOrderButton>
          <ExternalOrderButton size="sm" className="sm:hidden">
            Pedir agora
          </ExternalOrderButton>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-purple-100 bg-white text-purple-800 shadow-card lg:hidden"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </div>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </header>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    closeRef.current?.focus();
  }, []);
  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navegação"
      className="fixed inset-0 z-50 lg:hidden"
    >
      <div className="absolute inset-0 bg-purple-900/40" onClick={onClose} aria-hidden />
      <div className="absolute right-3 top-3 max-h-[calc(100dvh-1.5rem)] w-[min(360px,calc(100vw-1.5rem))] overflow-auto rounded-3xl bg-white p-6 shadow-float">
        <div className="mb-4 flex items-center justify-between">
          <span className="font-display text-lg font-black text-purple-900">Menu</span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Fechar menu"
            className="grid h-11 w-11 place-items-center rounded-full bg-purple-100 text-purple-800"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>
        <nav aria-label="Navegação móvel">
          <ul className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={onClose}
                  className="block rounded-2xl px-4 py-3 text-base font-semibold text-purple-900 hover:bg-purple-100"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-4">
          <ExternalOrderButton fullWidth size="md">
            Fazer meu pedido
          </ExternalOrderButton>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------- Hero ---------------------------------- */

function Hero() {
  return (
    <section id="inicio" className="px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[32px] bg-gradient-purple px-6 py-14 sm:px-12 sm:py-20 lg:py-24">
        {/* organic blobs */}
        <div
          className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-purple-500/30 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-24 right-10 h-80 w-80 rounded-full bg-green-500/20 blur-3xl"
          aria-hidden
        />

        <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-100 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-yellow-500" aria-hidden />
              Açaí cremoso todos os dias
            </span>
            <h1 className="mt-5 font-display text-[38px] font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-[64px]">
              Seu momento merece <span className="text-green-100">mais sabor</span>
            </h1>
            <p className="mt-5 max-w-lg text-base text-purple-100 sm:text-lg">
              Açaí cremoso, frutas frescas e combinações irresistíveis. Escolha seus favoritos e
              faça o pedido pela nossa plataforma online.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ExternalOrderButton size="lg">Fazer meu pedido</ExternalOrderButton>
              <a
                href="#destaques"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 text-base font-bold text-white backdrop-blur transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
              >
                Ver nossos destaques
              </a>
            </div>
            <p className="mt-4 text-sm text-purple-100/80">
              Pedido realizado em plataforma parceira externa
            </p>
          </div>

          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-[32px] shadow-float blob-mask">
              <img
                src={heroBowl}
                alt="Tigela de açaí com banana, morango, granola e cremes"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>

            {/* floating cards */}
            <div className="absolute -left-3 top-8 flex items-center gap-2 rounded-2xl bg-white/95 px-4 py-3 shadow-card backdrop-blur sm:-left-6">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-green-100 text-green-700">
                <Truck className="h-4 w-4" aria-hidden />
              </span>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
                  Prático
                </div>
                <div className="text-sm font-bold text-purple-900">Entrega e retirada</div>
              </div>
            </div>

            <div className="absolute -bottom-4 right-2 flex items-center gap-2 rounded-2xl bg-white/95 px-4 py-3 shadow-card backdrop-blur sm:right-4">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-purple-100 text-purple-700">
                <Heart className="h-4 w-4" aria-hidden />
              </span>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
                  Personalizado
                </div>
                <div className="text-sm font-bold text-purple-900">Feito do seu jeito</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Benefits -------------------------------- */

function Benefits() {
  const items = [
    {
      icon: Leaf,
      title: "Ingredientes selecionados",
      desc: "Frutas frescas e complementos para criar combinações cheias de sabor.",
    },
    {
      icon: Heart,
      title: "Do seu jeito",
      desc: "Escolha tamanho, cremes, frutas e adicionais diretamente na plataforma de pedidos.",
    },
    {
      icon: Truck,
      title: "Pedido prático",
      desc: "Faça o pedido online e escolha entre entrega ou retirada, conforme a disponibilidade.",
    },
  ];
  return (
    <section className="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 sm:py-24">
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((b) => (
          <div
            key={b.title}
            className="rounded-3xl border border-purple-100 bg-white p-7 shadow-card transition-transform duration-200 hover:-translate-y-1 hover:shadow-hover"
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-green-100 text-green-700">
              <b.icon className="h-6 w-6" aria-hidden />
            </span>
            <h3 className="mt-5 text-xl font-black text-purple-900">{b.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------- Products -------------------------------- */

function Products() {
  return (
    <section id="destaques" className="mx-auto max-w-[1240px] px-4 py-10 sm:px-6 sm:py-16">
      <div className="mb-10 max-w-2xl">
        <span className="inline-flex rounded-full bg-green-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-green-700">
          Cardápio
        </span>
        <h2 className="mt-4 font-display text-3xl font-black leading-tight text-purple-900 sm:text-4xl lg:text-[44px]">
          Combinações que conquistam
        </h2>
        <p className="mt-3 text-[17px] text-ink-soft">
          Conheça alguns dos sabores preferidos de quem ama açaí.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <article
            key={p.id}
            className="group flex flex-col overflow-hidden rounded-3xl border border-purple-100 bg-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-hover"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={p.image}
                alt={`${p.name} — ${p.description}`}
                loading="lazy"
                width={800}
                height={1000}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {p.tag && (
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-purple-800 shadow-card backdrop-blur">
                  {p.tag}
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-black text-purple-900">{p.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{p.description}</p>
              <div className="mt-4 text-xs uppercase tracking-wider text-ink-soft">A partir de</div>
              <div className="text-2xl font-black text-purple-800">{p.price}</div>
              <ExternalOrderButton
                size="sm"
                fullWidth
                className="mt-5"
                aria-label={`Pedir ${p.name}, abre a plataforma de pedidos em uma nova aba`}
              >
                Pedir este sabor
              </ExternalOrderButton>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 text-center">
        <p className="max-w-2xl text-sm text-ink-soft">
          Valores e disponibilidade podem variar. Consulte as opções atualizadas na plataforma de
          pedidos.
        </p>
        <ExternalOrderButton size="lg" variant="secondary">
          Ver cardápio e pedir
        </ExternalOrderButton>
      </div>
    </section>
  );
}

/* ------------------------------- How To Order ----------------------------- */

function HowToOrder() {
  const steps = [
    {
      n: "1",
      title: "Acesse a plataforma",
      desc: "Clique em um dos botões de pedido para abrir nosso cardápio online.",
    },
    {
      n: "2",
      title: "Escolha seus favoritos",
      desc: "Confira tamanhos, combinações, adicionais e valores disponíveis.",
    },
    {
      n: "3",
      title: "Finalize o pedido",
      desc: "Informe a forma de recebimento e conclua diretamente na plataforma.",
    },
  ];
  return (
    <section className="bg-gradient-cream py-16 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="font-display text-3xl font-black leading-tight text-purple-900 sm:text-4xl lg:text-[44px]">
            Seu pedido em poucos passos
          </h2>
        </div>

        <div className="relative grid gap-6 md:grid-cols-3">
          <div
            className="pointer-events-none absolute left-[10%] right-[10%] top-8 hidden h-[2px] bg-gradient-to-r from-green-100 via-green-500 to-green-100 md:block"
            aria-hidden
          />
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-3xl border border-purple-100 bg-white p-7 shadow-card"
            >
              <div className="mb-4 grid h-16 w-16 place-items-center rounded-full bg-gradient-green-soft text-2xl font-black text-white shadow-card">
                {s.n}
              </div>
              <h3 className="text-xl font-black text-purple-900">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{s.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 rounded-2xl border border-purple-100 bg-white/70 p-4 text-center text-sm text-purple-800">
          O pedido, o pagamento e o acompanhamento são realizados em uma plataforma externa.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------- Brand Story ------------------------------ */

function BrandStory() {
  const highlights = [
    { icon: Award, label: "Preparado com cuidado" },
    { icon: Heart, label: "Opções para diferentes gostos" },
    { icon: MessageCircle, label: "Atendimento próximo" },
    { icon: Store, label: "Ambiente acolhedor" },
  ];
  return (
    <section id="sobre" className="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-[32px] shadow-card">
            <img
              src={storyImg}
              alt="Preparação cuidadosa de uma tigela de açaí no balcão da loja"
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-3 hidden rounded-3xl bg-white p-5 shadow-float sm:block lg:-right-6">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-yellow-500/20 text-purple-800">
                <Sparkles className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-ink-soft">Nosso jeito</div>
                <div className="font-black text-purple-900">Cada tigela é única</div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-green-700">
            Nossa história
          </span>
          <h2 className="mt-4 font-display text-3xl font-black leading-tight text-purple-900 sm:text-4xl lg:text-[44px]">
            Sabor que aproxima
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink-soft">
            O Roxo Nativo nasceu da vontade de transformar o açaí em uma pausa especial no dia. Com
            combinações cremosas, frutas frescas e muitos complementos, criamos opções para
            diferentes momentos — do lanche rápido ao encontro com os amigos.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink-soft">
            Nossa proposta é simples: servir sabor, cuidado e liberdade para cada pessoa montar sua
            combinação favorita.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((h) => (
              <li
                key={h.label}
                className="flex items-center gap-3 rounded-2xl border border-purple-100 bg-white p-4"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-green-100 text-green-700">
                  <h.icon className="h-4 w-4" aria-hidden />
                </span>
                <span className="text-sm font-semibold text-purple-900">{h.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Gallery -------------------------------- */

function Gallery() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 py-10 sm:px-6 sm:py-16">
      <div className="mb-10 max-w-2xl">
        <h2 className="font-display text-3xl font-black leading-tight text-purple-900 sm:text-4xl lg:text-[44px]">
          Um pouco do nosso sabor
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className={[
              "overflow-hidden rounded-3xl shadow-card",
              i === 0 ? "col-span-2 row-span-2 md:col-span-2 md:row-span-2" : "",
            ].join(" ")}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-square h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------- Testimonials ----------------------------- */

function Testimonials() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 sm:py-24">
      <div className="mb-10 max-w-2xl">
        <h2 className="font-display text-3xl font-black leading-tight text-purple-900 sm:text-4xl lg:text-[44px]">
          Quem prova, recomenda
        </h2>
        <p className="mt-3 text-sm text-ink-soft">
          Depoimentos demonstrativos criados para este projeto conceitual.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col rounded-3xl border border-purple-100 bg-white p-7 shadow-card"
          >
            <div className="flex items-center gap-1" aria-label={`${t.rating} de 5 estrelas`}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" aria-hidden />
              ))}
              <span className="sr-only">{t.rating} de 5 estrelas</span>
            </div>
            <blockquote className="mt-4 flex-1 text-[16px] leading-relaxed text-ink">
              “{t.text}”
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-purple-soft font-black text-white">
                {t.name.charAt(0)}
              </span>
              <span className="font-bold text-purple-900">{t.name}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------- Location --------------------------------- */

function LocationSection() {
  return (
    <section id="localizacao" className="bg-gradient-cream py-16 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-green-700">
            Onde estamos
          </span>
          <h2 className="mt-4 font-display text-3xl font-black leading-tight text-purple-900 sm:text-4xl lg:text-[44px]">
            Visite o Roxo Nativo
          </h2>
          <p className="mt-3 text-[17px] text-ink-soft">
            Venha conhecer nosso espaço ou retire seu pedido no balcão.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="overflow-hidden rounded-3xl border border-purple-100 bg-white shadow-card">
            <iframe
              src={businessConfig.mapsEmbedUrl}
              title={`Mapa mostrando ${businessConfig.address}`}
              loading="lazy"
              className="h-[380px] w-full sm:h-[460px]"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-3xl border border-purple-100 bg-white p-6 shadow-card">
              <div className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-green-100 text-green-700">
                  <MapPin className="h-5 w-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-ink-soft">Endereço</div>
                  <div className="font-bold text-purple-900">{businessConfig.address}</div>
                  <div className="text-sm text-ink-soft">CEP {businessConfig.cep}</div>
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                <a
                  href={businessConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-gradient-purple-soft px-5 text-sm font-bold text-white shadow-card transition hover:shadow-hover focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-500/40"
                >
                  <MapPin className="h-4 w-4" aria-hidden />
                  Abrir no Google Maps
                </a>
                <a
                  href={businessConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-purple-100 bg-white px-5 text-sm font-bold text-purple-800 transition hover:border-purple-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-500/40"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  Falar pelo WhatsApp
                </a>
              </div>
            </div>

            <StorefrontPreview />

            <OpeningHoursCard />
          </div>
        </div>

        <ContactCard />
      </div>
    </section>
  );
}

function StorefrontPreview() {
  return (
    <div className="group relative min-h-[240px] overflow-hidden rounded-3xl border border-purple-100 bg-purple-100 shadow-card">
      <img
        src={storefrontImg}
        alt="Fachada acolhedora de uma cafeteria com mesas e plantas"
        loading="lazy"
        width={1200}
        height={800}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-purple-950/90 via-purple-950/55 to-transparent px-6 pb-5 pt-16 text-white">
        <div className="flex items-center gap-2 font-bold">
          <Store className="h-5 w-5" aria-hidden />
          Fachada da loja
        </div>
      </div>
    </div>
  );
}

function OpeningHoursCard() {
  return (
    <div className="rounded-3xl border border-purple-100 bg-white p-6 shadow-card">
      <div className="flex items-start gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-purple-100 text-purple-700">
          <Clock className="h-5 w-5" aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <div className="text-xs uppercase tracking-wider text-ink-soft">Horários</div>
          <ul className="mt-2 space-y-1.5">
            {openingHours.map((h) => (
              <li key={h.label} className="flex flex-wrap justify-between gap-2 text-sm">
                <span className="font-semibold text-purple-900">{h.label}</span>
                <span className="text-ink-soft">{h.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ContactCard() {
  const items = [
    {
      icon: Phone,
      label: "Telefone",
      value: businessConfig.phone,
      href: `tel:${businessConfig.phone.replace(/\D/g, "")}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Enviar mensagem",
      href: businessConfig.whatsappUrl,
      external: true,
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: businessConfig.instagramHandle,
      href: businessConfig.instagramUrl,
      external: true,
    },
    {
      icon: Mail,
      label: "E-mail",
      value: businessConfig.email,
      href: `mailto:${businessConfig.email}`,
    },
  ];
  return (
    <div id="contato" className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((i) => (
        <a
          key={i.label}
          href={i.href}
          {...(i.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="group flex items-center gap-3 rounded-2xl border border-purple-100 bg-white p-4 shadow-card transition-transform hover:-translate-y-0.5 hover:shadow-hover"
        >
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-purple-100 text-purple-700 group-hover:bg-gradient-purple-soft group-hover:text-white">
            <i.icon className="h-5 w-5" aria-hidden />
          </span>
          <div className="min-w-0">
            <div className="text-xs uppercase tracking-wider text-ink-soft">{i.label}</div>
            <div className="truncate font-bold text-purple-900">{i.value}</div>
          </div>
        </a>
      ))}
    </div>
  );
}

/* ------------------------------------ FAQ ---------------------------------- */

function FAQSection() {
  return (
    <section className="mx-auto max-w-[900px] px-4 py-16 sm:px-6 sm:py-24">
      <div className="mb-10 text-center">
        <span className="inline-flex rounded-full bg-green-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-green-700">
          Dúvidas frequentes
        </span>
        <h2 className="mt-4 font-display text-3xl font-black leading-tight text-purple-900 sm:text-4xl">
          Perguntas frequentes
        </h2>
      </div>
      <div className="space-y-3">
        {faqs.map((f, i) => (
          <FAQItem key={i} q={f.q} a={f.a} />
        ))}
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-3xl border border-purple-100 bg-white shadow-card">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <span className="font-bold text-purple-900">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-purple-700 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-[15px] leading-relaxed text-ink-soft">{a}</p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- Final CTA -------------------------------- */

function FinalCTA() {
  return (
    <section id="final-cta" className="px-4 pb-16 sm:px-6 sm:pb-24">
      <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[32px] bg-gradient-purple px-6 py-14 text-center sm:px-12 sm:py-20">
        <div
          className="pointer-events-none absolute -left-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-purple-500/30 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-yellow-500/10 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-2xl text-white">
          <h2 className="font-display text-3xl font-black leading-tight sm:text-4xl lg:text-[52px]">
            Seu próximo açaí está a poucos cliques
          </h2>
          <p className="mt-4 text-purple-100">
            Confira o cardápio atualizado, escolha seus favoritos e finalize o pedido pela nossa
            plataforma.
          </p>
          <div className="mt-8 flex justify-center">
            <ExternalOrderButton size="lg">Fazer meu pedido</ExternalOrderButton>
          </div>
          <p className="mt-4 text-sm text-purple-100/80">
            Você será direcionado para o ambiente externo de pedidos.
          </p>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Footer --------------------------------- */

function Footer() {
  return (
    <footer className="rounded-t-[32px] bg-gradient-purple pt-14 text-purple-100">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <img
              src={logo}
              alt="Roxo Nativo"
              width={955}
              height={468}
              className="h-20 w-auto rounded-xl bg-white/95 px-3 py-2"
            />
            <p className="mt-4 max-w-xs text-sm text-purple-100/80">
              {businessConfig.slogan}. Açaí cremoso, frutas frescas e muitas combinações.
            </p>
            <div className="mt-5">
              <ExternalOrderButton size="md">Fazer meu pedido</ExternalOrderButton>
            </div>
            <p className="mt-3 text-xs text-purple-100/70">
              Você será direcionado para o ambiente externo de pedidos.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Navegar</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contato</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>{businessConfig.address}</li>
              <li>{businessConfig.phone}</li>
              <li>
                <a
                  href={businessConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={businessConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {businessConfig.instagramHandle}
                </a>
              </li>
              <li>
                <a href={`mailto:${businessConfig.email}`} className="hover:text-white">
                  {businessConfig.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Horários</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {openingHours.map((h) => (
                <li key={h.label} className="flex flex-col">
                  <span className="font-semibold text-white">{h.label}</span>
                  <span>{h.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 py-6 text-xs text-purple-100/70">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <div>
              © {new Date().getFullYear()} {businessConfig.name}. Todos os direitos reservados.
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#" className="hover:text-white">
                Política de privacidade
              </a>
              <span>Projeto conceitual criado para portfólio.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* --------------------------- Mobile Floating Bar -------------------------- */

function MobileOrderBar() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const cta = document.getElementById("final-cta");
    if (!cta) return;
    const obs = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      threshold: 0.15,
    });
    obs.observe(cta);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      className={[
        "fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-[max(1rem,env(safe-area-inset-bottom))] transition-all duration-300 lg:hidden",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      ].join(" ")}
    >
      <ExternalOrderButton
        size="lg"
        variant="pill"
        className="w-full max-w-sm"
        aria-label="Fazer meu pedido, abre a plataforma de pedidos em uma nova aba"
      >
        Fazer meu pedido
      </ExternalOrderButton>
    </div>
  );
}
