import { createTheme } from "@mui/material/styles";
import { textAlign } from "@mui/system";

const shd1 = "#4B28D8";
const shd2 = "#760DC9";

const theme50= "#FFC600"

const config = {
  components: {
    MuiAvatarGroup: {
      styleOverrides: {
        root: ({ ownerState: { max } }) => ({
          ...[...Array(max)].reduce(
            (result, curr, index) => ({
              ...result,
              [`& > .MuiAvatar-root:nth-child(${index + 1})`]: {
                zIndex: max - index,
              },
            }),
            {}
          ),
        }),
      },
    },
  },
  palette: {
    theme50: theme50,
    darkBlue: "#07294D",
    darkBlueHover:'#092E56',
    shade1: shd1,
    shade2: shd2,
    shade3: "rgba(191, 90, 242, 1)",
    bg1: "rgba(0, 100, 225, .05)",
    bg2: "rgba(0, 100, 225, .1)",
    bg3: "#FFFFFF",
    linkShade1: "#0064E1",
  },
  gradients: {
    primaryGradient: `linear-gradient(90deg,${shd1}, ${shd2})`,
    secondaryGradient: `linear-gradient(180deg,${shd1},${shd2})`,
  },
  typography: {
    fontFamily: "sans-serif",
    StudentsPageHeading: {
      fontSize: "80px",
      fontWeight: "700",
    },
    heading1: {
      fontSize: "90px",
      fontWeight: "700",
    },
    heading2: {
      fontWeight: "600",
      fontSize: "48px",
    },
    heading3: {
      fontWeight: "700",
      fontSize: "36px",
    },
    heading4: {
      fontSize: "25px",
      fontWeight: "400",
    },
    p: {
      fontSize: "18px",
      fontWeight: "400",
    },
    font3: {
      fontSize: "16px",
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
