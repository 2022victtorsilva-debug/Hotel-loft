import { Plus } from "lucide-react";

import { Reveal } from "@/components/Reveal";

const items = [
  {
    question: "Como consultar disponibilidade?",
    answer:
      "Use o formulário de consulta, informe as datas, hóspedes e acomodação. Quando o WhatsApp oficial estiver configurado, o site abrirá uma mensagem pronta para atendimento manual.",
  },
  {
    question: "Como faço uma reserva?",
    answer:
      "Este site não confirma reservas automaticamente. A solicitação é iniciada pelo contato direto e a própria Barreiras LOFT confirma disponibilidade e próximos passos.",
  },
  {
    question: "Como consultar os valores?",
    answer:
      "Os valores exibidos nas acomodações são demonstrativos nesta proposta. Os preços oficiais podem ser atualizados em um único arquivo de configuração.",
  },
  {
    question: "Onde fica a Barreiras LOFT?",
    answer:
      "A hospedagem é apresentada como localizada em Barreiras, Bahia. O endereço exato ainda precisa ser confirmado e, por isso, não foi inventado no protótipo.",
  },
  {
    question: "Como entro em contato pelo WhatsApp?",
    answer:
      "Os botões de WhatsApp são ativados automaticamente quando o número oficial é adicionado à configuração do site.",
  },
  {
    question: "Como obter mais informações?",
    answer:
      "A área de contato reúne os canais oficiais assim que WhatsApp, Instagram e localização forem fornecidos pela Barreiras LOFT.",
  },
];

export const FAQ = () => (
  <section className="section-space bg-secondary/55" aria-labelledby="faq-title">
    <div className="container-main">
      <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <p className="section-kicker">Dúvidas frequentes</p>
            <h2 id="faq-title" className="section-title mt-4">
              Antes de <span className="italic text-brand">chegar.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-muted">
              Respostas diretas sobre consulta, contato e funcionamento deste site de apresentação.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="border-t border-border">
            {items.map((item) => (
              <details key={item.question} className="faq-item group border-b border-border">
                <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-5 py-5 text-left [&::-webkit-details-marker]:hidden">
                  <span className="font-display text-xl sm:text-2xl">{item.question}</span>
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-border text-brand transition group-open:rotate-45 group-open:bg-brand group-open:text-white">
                    <Plus size={16} aria-hidden="true" />
                  </span>
                </summary>
                <div className="faq-answer max-w-2xl pb-6 pr-10 text-sm leading-7 text-muted">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
