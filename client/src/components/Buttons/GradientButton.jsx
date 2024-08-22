import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

const GradientButton = ({
  buttonText,
  Icon,
  gradient,
  radius,
  border,
  ...props
}) => {
  const theme = useTheme();

  return Icon ? (
    <IconButton
      sx={{
        background: gradient ? gradient : theme.gradients.primaryGradient,
        borderRadius: radius,
        color: "white",
        border: border ? border : "none",
        typography: "button",
      }}
    >
      {Icon}
    </IconButton>
  ) : (
    <Button
      {...props}
      sx={{
        background: theme.gradients.primaryGradient,
        borderRadius: radius,
        color: "white",
        py: 1,
        px: 3,
        boxShadow: "inset 0 4px 4px #fff3, 0 3px 4px #0003",
        typography: "button",
      }}
    >
      {buttonText}
    </Button>
  );
};

export default GradientButton;
