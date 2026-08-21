import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { siteConfig } from "@/config/site";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Acomodações", href: "#acomodacoes" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Comodidades", href: "#comodidades" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isSolid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        isSolid
          ? "border-border/70 bg-background/92 py-3 text-foreground shadow-[0_12px_50px_-30px_rgba(21,20,18,0.45)] backdrop-blur-xl"
          : "border-transparent bg-transparent py-5 text-white"
      }`}
    >
      <div className="container-main flex items-center justify-between gap-4">
        <a href="#inicio" className="inline-flex min-w-0 flex-col leading-none">
          <span className="truncate font-display text-xl font-semibold tracking-tight sm:text-2xl">
            {siteConfig.hotel.name}
          </span>
          <span
            className={`mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.26em] ${
              isSolid ? "text-muted" : "text-white/65"
            }`}
          >
            Barreiras • Bahia
          </span>
        </a>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[0.68rem] font-semibold uppercase tracking-[0.11em] transition hover:opacity-65 ${
                isSolid ? "text-foreground" : "text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#reserva"
            className={`hidden min-h-11 items-center justify-center rounded-full px-5 text-xs font-bold uppercase tracking-[0.12em] transition sm:inline-flex ${
              isSolid
                ? "bg-brand text-brand-foreground hover:bg-brand-dark"
                : "bg-white text-foreground hover:bg-white/90"
            }`}
          >
            Reservar
          </a>

          <button
            type="button"
            className={`inline-flex size-11 items-center justify-center rounded-full xl:hidden ${
              isSolid ? "hover:bg-secondary" : "hover:bg-white/10"
            }`}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        className={`grid transition-[grid-template-rows,opacity] duration-300 xl:hidden ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <nav
            className="container-main flex max-h-[calc(100svh-76px)] flex-col gap-1 overflow-y-auto pb-[max(1rem,env(safe-area-inset-bottom))] pt-5"
            aria-label="Menu mobile"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 font-medium hover:bg-secondary"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#reserva"
              className="mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-brand-foreground"
              onClick={() => setOpen(false)}
            >
              Consultar disponibilidade
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
