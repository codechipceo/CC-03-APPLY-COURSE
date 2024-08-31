import useStyle from "@/hooks/useStyle";

const HeroContainer = ({ heading, paragraph, children }) => {
  const { theme, Box, Typography } = useStyle();
  return (
    <Box>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          mt: 5,
          px: 2,
          justifyContent: "center",
        }}
      >
        <Box width="800px">
          <Typography
            sx={{
              typography: {
                md: theme.typography.heading2,
                xs: theme.typography.heading3,
              },
            }}
          >
            {heading}
          </Typography>
          <Typography sx={{ typography: theme.typography.font3 }}>
            {paragraph}
          </Typography>
        </Box>
      </Box>
      {children}
    </Box>
  );
};

export default HeroContainer;
