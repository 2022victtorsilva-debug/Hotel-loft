import { describe, expect, it } from "vitest";

import { formatDate, getLocalDateInputValue, validateBooking } from "@/lib/booking";
import {
  bookingWhatsAppMessage,
  buildWhatsAppUrl,
  getWhatsAppUrl,
} from "@/lib/contact";

describe("booking helpers", () => {
  it("formats ISO dates for WhatsApp", () => {
    expect(formatDate("2026-09-04")).toBe("04/09/2026");
  });

  it("uses the browser local date for date inputs", () => {
    expect(getLocalDateInputValue(new Date(2026, 7, 20, 23, 30))).toBe("2026-08-20");
  });

  it("rejects missing fields", () => {
    expect(
      validateBooking({ checkIn: "", checkOut: "", guests: "2", room: "Loft Essencial" }),
    ).toBe("Preencha todos os campos para continuar.");
  });

  it("rejects checkout before checkin", () => {
    expect(
      validateBooking({
        checkIn: "2026-09-10",
        checkOut: "2026-09-09",
        guests: "2",
        room: "Loft Essencial",
      }),
    ).toBe("O check-out não pode ser anterior ao check-in.");
  });

  it("accepts a valid consultation", () => {
    expect(
      validateBooking({
        checkIn: "2026-09-10",
        checkOut: "2026-09-12",
        guests: "2",
        room: "Loft Premium",
      }),
    ).toBe("");
  });

  it("builds the contextual reservation message", () => {
    const message = bookingWhatsAppMessage({
      checkIn: "10/09/2026",
      checkOut: "12/09/2026",
      guests: "2",
      room: "Loft Premium",
    });

    expect(message).toContain("Loft Premium");
    expect(message).toContain("Check-in: 10/09/2026");
    expect(message).toContain("Hóspedes: 2");
  });

  it("does not create a WhatsApp URL while the official number is absent", () => {
    expect(getWhatsAppUrl("Olá")).toBeNull();
  });

  it("sanitizes the number and encodes WhatsApp messages", () => {
    expect(buildWhatsAppUrl("+55 (77) 99999-9999", "Olá! Loft Premium & datas"))
      .toBe(
        "https://wa.me/5577999999999?text=Ol%C3%A1!%20Loft%20Premium%20%26%20datas",
      );
  });
});
