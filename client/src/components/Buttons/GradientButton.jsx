import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

const GradientButton = ({ buttonText, Icon, styles, radius, ...props }) => {
  const theme = useTheme();

  return Icon ? (
    <IconButton
      sx={{
        background: theme.gradients.primaryGradient,
        borderRadius: "20px",
        color: "white",
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
        borderRadius: "20px",
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
