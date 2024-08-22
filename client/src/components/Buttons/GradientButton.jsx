import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

const GradientButton = ({ buttonText, Icon, onClick }) => {
  const theme = useTheme();

  return Icon ? (
    <IconButton
      sx={{
        background: theme.gradients.primaryGradient,
        borderRadius: "20px",
        color: "white",

        typography: "button",
      }}>
      {Icon}
    </IconButton>
  ) : (
    <Button
      onClick={onClick}
      sx={{
        background: theme.gradients.primaryGradient,
        borderRadius: "20px",
        color: "white",
        py: 1,
        px: 3,
        boxShadow: "inset 0 4px 4px #fff3, 0 3px 4px #0003",
        typography: "button",
      }}>
      {buttonText}
    </Button>
  );
};

export default GradientButton;
