import { useEffect, useState } from "react";
import { Maximize2, X } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";

const classes = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "sm:col-span-2",
  "",
  "",
];

export const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex]);

  const active = activeIndex === null ? null : siteConfig.media.gallery[activeIndex];

  return (
    <section id="estrutura" className="section-space">
      <div className="container-main">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="section-kicker">Estrutura & galeria</p>
              <h2 className="section-title mt-4">
                Conheça nossos <span className="italic text-brand">espaços.</span>
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-muted lg:justify-self-end">
              Uma seleção visual ilustrativa da atmosfera que inspira a experiência
              Barreiras LOFT — ambientes limpos, atuais e acolhedores.
            </p>
          </div>
        </Reveal>

        <div className="mt-11 grid auto-rows-[190px] grid-cols-1 gap-3 sm:grid-cols-4 sm:auto-rows-[175px] lg:auto-rows-[215px]">
          {siteConfig.media.gallery.map((image, index) => (
            <Reveal
              key={image.src}
              className={`overflow-hidden rounded-[1.4rem] ${classes[index] ?? ""}`}
              delay={(index % 3) * 55}
            >
              <button
                type="button"
                className="group relative h-full w-full overflow-hidden bg-secondary text-left"
                onClick={() => setActiveIndex(index)}
                aria-label={`Ampliar imagem: ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                />
                <span className="absolute bottom-3 right-3 inline-flex size-10 items-center justify-center rounded-full bg-black/45 text-white opacity-0 backdrop-blur transition group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Maximize2 size={16} aria-hidden="true" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-5 text-xs leading-5 text-muted">
            Imagens ilustrativas para apresentação do projeto. Fotografias oficiais
            podem ser substituídas mantendo esta composição.
          </p>
        </Reveal>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[90] grid place-items-center bg-black/88 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Visualização ampliada da galeria"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setActiveIndex(null);
          }}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] inline-flex size-12 items-center justify-center rounded-full bg-white/12 text-white transition hover:bg-white/20 sm:right-8"
            aria-label="Fechar imagem ampliada"
            autoFocus
          >
            <X size={22} />
          </button>
          <img
            src={active.src}
            alt={active.alt}
            className="max-h-[86svh] max-w-[min(1100px,96vw)] rounded-2xl object-contain shadow-2xl"
          />
        </div>
      ) : null}
    </section>
  );
};
