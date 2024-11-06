import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

const GradientButton = ({ buttonText, Icon,handleClick, styles,url, radius, ...props }) => {
  const theme = useTheme();

console.log(typeof handleClick)

  return Icon ? (
    <IconButton
      sx={{
        background: theme.gradients.primaryGradient,
        borderRadius: "20px",
        color: "black",

        typography: "button",
        "&:hover": {
          backgroundColor: "#d3d3d3",
          color: "black",
        },
        ...styles,
      }}
      {...props}
      onClick={handleClick}
    >
      {Icon}
    </IconButton>
  ) : (
    <Button
      {...props}
      sx={{
        background: theme.gradients.primaryGradient,
        borderRadius: "20px",
        color: "black",
        py: 1,
        px: 3,
        "&:hover": {
          backgroundColor: "#d3d3d3",
          color: "black",
        },

        typography: "button",
        ...styles,
      }}
      onClick={handleClick}
    >
      {buttonText}
    </Button>
  );
};

export default GradientButton;
