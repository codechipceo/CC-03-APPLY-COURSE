import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

const GradientButton = ({
  buttonText,
  Icon,
  gradient,
  styles,
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
        boxShadow: 3,
        typography: "button",
        "&:hover": {
          boxShadow: 8,
        },
        "&:active": {
          boxShadow: 0,
        },
        ...styles,
      }}
      {...props}
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
        boxShadow: 3,
        "&:hover": {
          boxShadow: 8, // Shadow on hover
        },
        "&:active": {
          boxShadow: 0,
        },
        typography: "button",
        ...styles,
      }}
    >
      {buttonText}
    </Button>
  );
};

export default GradientButton;
