export const SITE = {
  name: "Cole Puterbaugh",
  wordmark: "Cole Puterbaugh",
  email: import.meta.env.VITE_CONTACT_EMAIL || "hello@coleputerbaugh.com",
  calendlyUrl: import.meta.env.VITE_CALENDLY_URL || "https://calendly.com/coleputerbaugh/20min",
  formspreeEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT || "",
  tagline: "I build custom tools for small businesses.",
  copyright: "© Cole Puterbaugh 2026",
};

export const CALENDLY_URL = SITE.calendlyUrl;
export const SITE_EMAIL = SITE.email;
export const FORMSPREE_ENDPOINT = SITE.formspreeEndpoint;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Work With Me", to: "/work-with-me" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export default SITE;
