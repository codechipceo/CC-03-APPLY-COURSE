export const metaData = {
  logo: new URL("@/assets/img/newlogo.png", import.meta.url).href,
  backgroundImg: new URL("@/assets/footerBackground.png", import.meta.url).href,
  heading: "Enhance Your Career",
  address: " Calgary, Alberta T2R1G8",
  contactMail: " info@weeducation.ca",
  copyRight: `© ${new Date().getFullYear()}, All Right Reserved`,
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
