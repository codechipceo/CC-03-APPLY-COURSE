import { Box, Card, CardContent, Typography } from "@mui/material";

export const InstitutionCard = ({ data }) => {
  const { img, title, text } = data;
  return (
    <Card
      sx={{
        textAlign: "center",
        boxShadow: 3,
        height: "100%",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 6,
        },
      }}>
      <CardContent>
        <Box display="flex" justifyContent="center" alignitem="center" mb={2}>
          <img src={img} alt={title} />
        </Box>
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};
