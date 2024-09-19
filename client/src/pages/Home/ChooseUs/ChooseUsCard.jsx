import useStyle from "@/hooks/useStyle";

const ChooseUsCard = ({ img, text }) => {
  const { Box, Typography, MyImg } = useStyle();
  return (
    <Box textAlign="center">
      <Typography>
        <MyImg img={img} />
      </Typography>
      <Typography fontWeight="bold">{text}</Typography>
    </Box>
  );
};

export default ChooseUsCard;
