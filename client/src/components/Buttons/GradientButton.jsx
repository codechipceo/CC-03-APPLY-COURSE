import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

const GradientButton = ({
  buttonText,
  styles,
  gradientsSec,
  Icon,
  ...props
}) => {
  const theme = useTheme();

  return Icon ? (
    <IconButton
      sx={{
        background: gradientsSec
          ? theme.gradients.secondaryGradient
          : theme.gradients.primaryGradient,
        borderRadius: "20px",
        color: "white",

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
        borderRadius: "20px",
        color: "white",
        py: 1,
        px: 3,

        typography: "button",
      }}
      {...props}
    >
      {buttonText}
    </Button>
  );
};

export default GradientButton;
