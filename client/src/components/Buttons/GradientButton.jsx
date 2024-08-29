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
        boxShadow:
          "0px 4px 4px 0px rgba(255, 255, 255, 0.25) inset,0px -3px 4px 0px rgba(0, 0, 0, 0.25) inset,0px 0px 6.7px 2px rgba(255, 255, 255, 0.57)",
        "&:hover": {
          boxShadow:
            "0px 4px 4px 0px rgba(255, 255, 255, 0.25) inset,0px -3px 4px 0px rgba(0, 0, 0, 0.25) inset,0px 0px 6.7px 2px rgba(255, 255, 255, 0.57)",
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
