import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

const GradientButton = ({ buttonText }) => {
  const theme = useTheme();
  return (
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
