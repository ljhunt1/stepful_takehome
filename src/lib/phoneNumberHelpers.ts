// https://stackoverflow.com/a/67987154
export const formatPhoneNumber = (phoneNumber: string) => {
  const cleaned = phoneNumber.replace(/\D/g, "");
  const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    const intlCode = match[1] ? "+1 " : "";
    return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
  }
  return null;
};

export const stripePhoneNumber = (phoneNumber: string) => {
  return phoneNumber.replace(/[^\d]/g, "");
};
