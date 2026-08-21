export type BookingForm = {
  checkIn: string;
  checkOut: string;
  guests: string;
  room: string;
};

export const getLocalDateInputValue = (date = new Date()) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const formatDate = (date: string) => {
  if (!date) return "";
  const [year, month, day] = date.split("-");
  if (!year || !month || !day) return date;
  return `${day}/${month}/${year}`;
};

export const validateBooking = (form: BookingForm) => {
  if (!form.checkIn || !form.checkOut || !form.guests || !form.room) {
    return "Preencha todos os campos para continuar.";
  }

  if (form.checkOut < form.checkIn) {
    return "O check-out não pode ser anterior ao check-in.";
  }

  return "";
};
