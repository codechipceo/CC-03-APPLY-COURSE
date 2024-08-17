import { Box } from "@mui/material";

const BackgroundImgContainer = ({ children, img }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
        borderRadius: "20px",
      }}
    >
      {children}
    </Box>
  );
};

export default BackgroundImgContainer;
