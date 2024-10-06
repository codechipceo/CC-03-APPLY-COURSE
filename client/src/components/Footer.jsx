import LogoImg from "./TopBar/LogoImg";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { metaData, navigationList } from "@/constants/footer";
import useStyle from "@/hooks/useStyle";
import { Link } from "react-router-dom";

const Footer = () => {
  const { theme, Box, Typography, GradientButton } = useStyle();

  return (
    <Box
      sx={{
        backgroundImage: `url(${metaData.backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        },
        py: { xs: 3, md: 5 },
        px: { xs: 2, md: 15 },
        gap: { xs: 3, md: 5 },
        textAlign: { xs: "center", md: "start" },
      }}
    >
      {/* Logo and Heading */}
      <Box sx={{ color: "#fff", textAlign: { xs: "center", md: "start" } }}>
        <LogoImg logoImg={metaData.logo} />
        <Typography
          sx={{
            typography: {
              xs: theme.typography.font3,
              md: theme.typography.heading3,
            },
            mt: { xs: 2, md: 3 },
          }}
        >
          {metaData.heading}
        </Typography>
      </Box>

      {/* Services Section */}
      <Box sx={{ color: "#fff", textAlign: { xs: "center", md: "start" } }}>
        <Typography sx={{ fontWeight: "bold" }}>Services</Typography>
        <Typography sx={{ mt: 0.5 }}>
          <Link to='/students'>Students</Link>
        </Typography>
        <Typography sx={{ mt: 0.5 }}>
          <Link to='/recruitment-partners'>Recruitment Partners</Link>
        </Typography>
        <Typography sx={{ mt: 0.5 }}>
          <Link to='/institutions'>Institutions</Link>
        </Typography>
      </Box>

      {/* Discover Section */}
      <Box sx={{ color: "#fff", textAlign: { xs: "center", md: "start" } }}>
        <Typography sx={{ fontWeight: "bold" }}>Discover</Typography>
        <Typography sx={{ mt: 0.5 }}>
          <Link to='/about-us'>About Us</Link>
        </Typography>
        <Typography sx={{ mt: 0.5 }}>
          <Link to='/privacy-policy'>Privacy Policy</Link>
        </Typography>
        <Typography sx={{ mt: 0.5 }}>
          <Link to='/terms-conditions'>Terms & Conditions</Link>
        </Typography>
      </Box>

      {/* Reach Out Section */}
      <Box sx={{ color: "#fff", textAlign: { xs: "center", md: "start" } }}>
        <Typography sx={{ fontWeight: "bold" }}>Reach Out</Typography>
        <Typography sx={{ typography: theme.typography.font3 }}>
          {metaData.address}
        </Typography>
        <Typography sx={{ mt: 1, fontWeight: "bold" }}>Contact Us</Typography>
        <Typography sx={{ mt: 0.5 }}>{metaData.contactMail}</Typography>
      </Box>

      {/* Copyright */}
      <Box
        sx={{
          gridColumn: { xs: "span 1", md: "span 4" },
          textAlign: "center",
          color: "#fff",
          mt: 2,
        }}
      >
        <Typography sx={{ fontSize: "small" }}>{metaData.copyRight}</Typography>
      </Box>

      {/* Social Media Icons */}
      {/* Uncomment this block to include social media icons */}
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "flex-start" },
          mt: { xs: 2, md: 0 },
        }}
      >
        <GradientButton
          Icon={<InstagramIcon />}
          styles={{ border: "1px solid #fff", background: "linear-gradient(180deg, #BF5AF2 0%, #615CE7 100%)" }}
        />
        <GradientButton
          Icon={<LinkedInIcon />}
          styles={{ border: "1px solid #fff", background: "linear-gradient(180deg, #BF5AF2 0%, #615CE7 100%)" }}
        />
        <GradientButton
          Icon={<FacebookIcon />}
          styles={{ border: "1px solid #fff", background: "linear-gradient(180deg, #BF5AF2 0%, #615CE7 100%)" }}
        />
        <GradientButton
          Icon={<TwitterIcon />}
          styles={{ border: "1px solid #fff", background: "linear-gradient(180deg, #BF5AF2 0%, #615CE7 100%)" }}
        />
      </Box> */}
    </Box>
  );
};

export default Footer;
