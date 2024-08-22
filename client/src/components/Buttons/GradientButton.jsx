import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

const GradientButton = ({ buttonText, Icon, radius, gradient, border }) => {
  const theme = useTheme();

  return Icon ? (
    <IconButton
      sx={{
        background: gradient ? gradient : theme.gradients.primaryGradient,
        borderRadius: radius,
        color: "white",
        border: border ? border : "none",
        typography: "button",
        ...styles,
      }}
      {...props}
    >
      {Icon}
    </IconButton>
  ) : (
    <Button
      sx={{
        background: theme.gradients.primaryGradient,
        borderRadius: radius,
        color: "white",
        py: 1,
        px: 4,
        boxShadow: 3,
        typography: "button",
      }}
      {...props}
    >
      {buttonText}
    </Button>
  );
};

export default GradientButton;
