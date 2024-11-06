import Card from "@mui/material/Card";
import EastIcon from "@mui/icons-material/East";
import useStyle from "@/hooks/useStyle";
import { useNavigate } from "react-router-dom";

const MyCard = ({ heading, p, img, url = "/students" }) => {
  const { theme, Box, Typography, MyImg, GradientButton } = useStyle();
  const navigate = useNavigate();
  return (
    <Card
      elevation={0}
      sx={{
        border: "1px solid #EFECEC ",
        borderRadius: 0,

        py: 2,
        px: 2,
        my: 1,
        "&:hover": {
          bgcolor:"white", // Changes background color on hover
        },
        position: "relative",
      }}
    >
      <Box display={"flex"} gap={1} alignItems={"start"}>
        <Box height={"80px"} width={"100px"}>
          {img}
        </Box>

        <Box display='grid' gridTemplateColumns='1fr .2fr'>
          <Box>
            <Typography fontWeight={600} fontSize={20} color={"#012D4C"}>
              {heading}
            </Typography>
            <Typography color={"#333333"} variant="body1"  mt={2}>
              {p}
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* <Box position='absolute' right={20} bottom={20}>
        <GradientButton Icon={<EastIcon />} handleClick={() => navigate(url)} />
      </Box> */}
    </Card>
  );
};

export default MyCard;
