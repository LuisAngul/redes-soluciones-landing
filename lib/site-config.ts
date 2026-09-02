const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "573016434302";

export const siteConfig = {
  url: siteUrl.replace(/\/$/, ""),
  whatsappNumber,
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "301 643 43-02",
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "comercial@redeselectricas.com.co",
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}`;
  },
};
