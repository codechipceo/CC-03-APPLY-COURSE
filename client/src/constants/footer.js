export const metaData = {
  logo: new URL("@/assets/img/logo.png", import.meta.url).href,
  backgroundImg: new URL("@/assets/footerBackground.png", import.meta.url).href,
  heading: "Enhance Your Productivity",
  address: "101 Frederik St, Kitchener, ON N2H 6R3",
  contactMail: "info@applyabroad.in",
  copyRight: "© 2023, All Right Reserved |",
};

export const navigationList = [
  {
    newLine: true,
    heading: "Students",
    children: [{ heading: "Institutions" }, { heading: "Recruiters" }],
  },
  {
    newLine: true,

    heading: "Explore",
    children: [
      { heading: "Explore Schools & Programs" },
      { heading: "Register" },
    ],
  },
  {
    newLine: true,
    heading: "Discover",
    children: [
      { heading: "Our Story" },
      { heading: "Careers" },
      { heading: "Knowledge Hub" },
      { heading: "Press" },
      { heading: "Life at ApplyBoard" },
      { heading: "Leadership" },
      { heading: "Contact" },
    ],
  },

  {
    newLine: true,
    heading: "Resources",
    children: [{ heading: "UK Resources" }, { heading: "AU Resources" }],
  },

  {
    heading: "Legal",
    children: [
      { heading: "Privacy & Cookies Policy" },
      { heading: "Terms & Conditions" },
      { heading: "Accessibility" },
      { heading: "Modern Slavery Statement" },
      { heading: "ApplyBoard Fees" },
    ],
  },
];
