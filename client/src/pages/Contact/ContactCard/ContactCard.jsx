import { Card, CardContent, Divider, Typography, Link } from "@mui/material";
// import { Link } from "react-router-dom";

export const ContactCard = ({ data }) => {
  const { title, span, link, linkTitle, text } = data;
  return (
    <Card
      sx={{
        padding: 2,
        textAlign: "center",
        boxShadow: 2,
        borderRadius: 1,
        height: "100%",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 8,
        },
      }}>
      <CardContent>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          {title}
        </Typography>
        <Typography color="text.secondary" mb={1}>
          {span}
        </Typography>
        <Link href={link} underline="hover" color="#760dc9">
          {linkTitle}
        </Link>
        <Divider sx={{ my: 3 }} />
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};
