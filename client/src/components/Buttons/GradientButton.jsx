import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

const GradientButton = ({ buttonText, Icon }) => {
  const theme = useTheme();

  return Icon ? (
    <IconButton
      sx={{
        background: theme.gradients.primaryGradient,
        borderRadius: "20px",
        color: "white",

        typography: "button",
      }}
    >
      {Icon}
    </IconButton>
  ) : (
    <Button
      sx={{
        background: theme.gradients.primaryGradient,
        borderRadius: "20px",
        color: "white",
        py: 1,
        px: 3,

        typography: "button",
      }}
    >
      {buttonText}
    </Button>
  );
};

export default GradientButton;
