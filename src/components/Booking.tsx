import { type FormEvent, useMemo, useState } from "react";
import { ArrowUpRight, CalendarDays, UsersRound } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";
import {
  formatDate,
  getLocalDateInputValue,
  type BookingForm,
  validateBooking,
} from "@/lib/booking";
import {
  bookingWhatsAppMessage,
  getWhatsAppUrl,
  hasWhatsapp,
} from "@/lib/contact";

const initialForm: BookingForm = {
  checkIn: "",
  checkOut: "",
  guests: "2",
  room: siteConfig.rooms[0].name,
};

export const Booking = () => {
  const [form, setForm] = useState<BookingForm>(initialForm);
  const [error, setError] = useState("");
  const today = useMemo(() => getLocalDateInputValue(), []);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validateBooking(form);
    setError(validation);
    if (validation) return;

    const message = bookingWhatsAppMessage({
      checkIn: formatDate(form.checkIn),
      checkOut: formatDate(form.checkOut),
      guests: form.guests,
      room: form.room,
    });

    const url = getWhatsAppUrl(message);
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }

    document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="reserva" className="section-space bg-secondary/65">
      <div className="container-main">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-border bg-background shadow-soft">
            <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
              <div className="bg-brand p-7 text-brand-foreground sm:p-10 lg:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-foreground/55">
                  Sua estadia
                </p>
                <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
                  Consulte sua próxima estadia em Barreiras.
                </h2>
                <p className="mt-5 max-w-md text-sm leading-7 text-brand-foreground/68">
                  Preencha as informações ao lado. O site monta sua mensagem e abre
                  uma conversa para atendimento manual — sem reserva automática.
                </p>

                <div className="mt-10 space-y-4 border-t border-white/15 pt-7 text-sm text-brand-foreground/65">
                  <p className="flex items-center gap-3">
                    <CalendarDays size={17} aria-hidden="true" /> Escolha as datas desejadas
                  </p>
                  <p className="flex items-center gap-3">
                    <UsersRound size={17} aria-hidden="true" /> Informe hóspedes e acomodação
                  </p>
                </div>
              </div>

              <form
                className="grid gap-5 p-6 sm:grid-cols-2 sm:p-10 lg:p-12"
                onSubmit={submit}
                noValidate
              >
                <label className="field-label">
                  Check-in
                  <input
                    type="date"
                    className="field-input"
                    min={today}
                    value={form.checkIn}
                    onChange={(event) => {
                      setError("");
                      setForm((current) => ({ ...current, checkIn: event.target.value }));
                    }}
                    required
                  />
                </label>

                <label className="field-label">
                  Check-out
                  <input
                    type="date"
                    className="field-input"
                    min={form.checkIn || today}
                    value={form.checkOut}
                    onChange={(event) => {
                      setError("");
                      setForm((current) => ({ ...current, checkOut: event.target.value }));
                    }}
                    required
                  />
                </label>

                <label className="field-label">
                  Hóspedes
                  <select
                    className="field-input"
                    value={form.guests}
                    onChange={(event) => {
                      setError("");
                      setForm((current) => ({ ...current, guests: event.target.value }));
                    }}
                    required
                  >
                    <option value="1">1 hóspede</option>
                    <option value="2">2 hóspedes</option>
                    <option value="3">3 hóspedes</option>
                    <option value="4">4 hóspedes</option>
                  </select>
                </label>

                <label className="field-label">
                  Acomodação
                  <select
                    className="field-input"
                    value={form.room}
                    onChange={(event) => {
                      setError("");
                      setForm((current) => ({ ...current, room: event.target.value }));
                    }}
                    required
                  >
                    {siteConfig.rooms.map((room) => (
                      <option key={room.id} value={room.name}>
                        {room.name}
                      </option>
                    ))}
                  </select>
                </label>

                <div className="sm:col-span-2">
                  {error ? (
                    <p
                      className="mb-4 rounded-xl bg-destructive/8 px-4 py-3 text-sm text-destructive"
                      role="alert"
                    >
                      {error}
                    </p>
                  ) : null}

                  {!hasWhatsapp() ? (
                    <p className="mb-4 text-xs leading-5 text-muted">
                      O número oficial de WhatsApp ainda não está configurado neste
                      protótipo. O fluxo está pronto e será ativado ao adicionar o
                      número em um único arquivo de configuração.
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    className="inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-ink px-6 text-center text-sm font-semibold text-ink-foreground transition hover:-translate-y-0.5 hover:bg-brand"
                  >
                    Consultar disponibilidade pelo WhatsApp
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
