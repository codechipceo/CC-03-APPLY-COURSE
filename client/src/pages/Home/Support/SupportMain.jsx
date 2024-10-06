import useStyle from "@/hooks/useStyle";

import { supportersList } from "@/constants/supportersList";

import Support from "./Support";

const SupportMain = () => {
  const { Box, Typography, theme } = useStyle();
  return (
    <Box sx={{ mt: 10, mx: 2 }}>
      <Typography
        sx={{
          typography: {
            md: theme.typography.heading2,
            xs: theme.typography.heading3,
          },
        }}
      >
        A Platform That Supports You End-to-End
      </Typography>
      <Box
        sx={{ display: { md: "grid", xs: "block" } }}
        gridTemplateColumns='repeat(2, 1fr)'
        gap={3}
      >
        {supportersList.length > 0
          ? supportersList.map((item, i) => (
              <Support
                key={item.heading + item.paragraph}
                heading={item.heading}
                paragraph={item.paragraph}
                img={item.img}
                url={item.url}
              />
            ))
          : null}
      </Box>
    </Box>
  );
};

export default SupportMain;
