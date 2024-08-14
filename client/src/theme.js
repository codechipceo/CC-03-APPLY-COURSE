import { createTheme } from "@mui/material/styles";

const config = {
  palette: {
    shade1: {
      main: "#4B28D8",
    },
    shade2: {
      main: "#760DC9",
    },
    linkShade1: {
      main: "#0064E1",
    },
  },

  gradients: {
    primaryGradient: `linear-gradient(90deg, #4B28D8, #760DC9)`,
    secondoryGradient: "linear-gradient(180deg,#760DC9,#4B28D8",
  },
  typography: {
    fontFamily: "Open Sans",
    h1: {
      fontSize: "36px",
      fontWeight: "500",
    },
    h2: {
      fontSize: "80px",
      fontWeight: 800,
    },
    h3: {
      fontSize: "48px",
      fontWeight: "700",
    },
    h4: {
      fontSize: "32px",
      fontWeight: "600",
    },
    p: {
      fontSize: "18px",
      fontWeight: "400",
      color: "#333",
    },
    button: {
      fontWeight: "500",
      fontFamily: "Zoho Puvi",
      textTransform: "none",
    },
  },
  shadow: ["0px 0px 12.4px 0px #7010CA38", "0px 0px 12.5px 2px #8B69EB2B"],
};

const theme = createTheme(config);

export default theme;
