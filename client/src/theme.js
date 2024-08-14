import { createTheme } from "@mui/material/styles";

const shd1 = "#4B28D8";
const shd2 = "#760DC9";

const config = {
  palette: {
    shade1: shd1,
    shade2: shd2,
    linkShade1: "#0064E1",
  },
  gradients: {
    primaryGradient: `linear-gradient(90deg,${shd1}, ${shd2})`,
    secondaryGradient: `linear-gradient(180deg,${shd2},${shd1}`,
  },
  typography: {
    fontFamily: "Open sans",
    heading1: {
      fontSize: "100px",
      fontWeight: "700",
    },
    h2: {
      fontWeight: 800,
      fontSize: "48px",
    },
    h3: {
      fontWeight: "700",
      fontSize: "36px",
    },
    h4: {
      fontSize: "25px",
      fontWeight: "400",
    },
    p: {
      fontSize: "18px",
      fontWeight: "400",
      color: "#333",
    },
    button: {
      fontWeight: "500",
      textTransform: "none",
    },
  },
  shadow: ["0px 0px 12.4px 0px #7010CA38", "0px 0px 12.5px 2px #8B69EB2B"],
};

const theme = createTheme(config);

export default theme;
