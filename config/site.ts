export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Carlota Catot Bragós",
  description: "",
  navItems: [
    {
      label: "About me",
      href: "#about",
    },
    {
      label: "Timeline",
      href: "#resume",
    },
    {
      label: "Projects",
      href: "#projects",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Resume",
      href: "#resume",
    },
    {
      label: "Projects",
      href: "/blog",
    },
  ],
  links: {
    github: "https://github.com/carlotacb",
    linkedin: "https://es.linkedin.com/in/carlotacb",
    mail: "mailto:carlota.catot@gmail.com",
    instagram: "https://www.instagram.com/charlietotb",
  },
};
