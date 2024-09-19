import LogoImg from "./TopBar/LogoImg";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { metaData, navigationList } from "@/constants/footer";
import useStyle from "@/hooks/useStyle";

// const FooterTree = ({ data }) => {
//   return (
//     data &&
//     data.length > 0 &&
//     data.map((node) =>
//       node.children && node.newLine ? (
//         <Box sx={{ color: "#fff" }}>
//           <Typography sx={{ fontWeight: "bold" }} key={node.heading}>
//             {node.heading}
//             <FooterTree data={node.children} />
//           </Typography>
//         </Box>
//       ) : (
//         <Typography sx={{ mt: 0.5 }} key={node.heading}>
//           {node.heading}
//         </Typography>
//       )
//     )
//   );
// };

const Footer = () => {
  const { theme, Box, Typography, GradientButton } = useStyle();
  return (
    <Box
      sx={{
        backgroundImage: `url(${metaData.backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",

        py: 5,
        px: { md: 15, xs: 2 },
        gap: { md: 9, xs: 2 },
        textAlign: "start",
      }}
    >
      <Box sx={{ color: "#fff" }}>
        <LogoImg logoImg={metaData.logo} />
        <Typography
          sx={{
            typography: {
              md: theme.typography.heading3,
              xs: theme.typography.font3,
            },
            mt: 3,
          }}
        >
          {metaData.heading}
        </Typography>

        <Typography
          sx={{
            typography: theme.typography.font3,
            color: "#fff",
          }}
        >
          {metaData.address}
        </Typography>
        <Typography sx={{ mt: 1, fontWeight: "bold" }}>Contact Us</Typography>
        <Typography sx={{ mt: 0.5 }}>{metaData.contactMail}</Typography>
      </Box>

      {/* {navigationList.length > 0 ? <FooterTree data={navigationList} /> : null} */}
      <Box sx={{ color: "#fff" }}>
        <Box>
          <Typography sx={{ fontWeight: "bold" }}>Students</Typography>

          <Typography sx={{ mt: 0.5 }}>Institutions</Typography>
          <Typography sx={{ mt: 0.5 }}>Recruiters</Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography sx={{ fontWeight: "bold" }}>Explore</Typography>

          <Typography sx={{ mt: 0.5 }}>Explore Schools & Programs</Typography>
          <Typography sx={{ mt: 0.5 }}>Register</Typography>
        </Box>
      </Box>

      <Box sx={{ color: "#fff" }}>
        <Box>
          <Typography sx={{ fontWeight: "bold" }}>Discover</Typography>

          <Typography sx={{ mt: 0.5 }}>Our Story</Typography>
          <Typography sx={{ mt: 0.5 }}>Careers</Typography>
          <Typography sx={{ mt: 0.5 }}>Knowledge Hub</Typography>
          <Typography sx={{ mt: 0.5 }}>Press</Typography>
          <Typography sx={{ mt: 0.5 }}>Life at ApplyBoard</Typography>
          <Typography sx={{ mt: 0.5 }}>Leadership</Typography>

          <Typography sx={{ mt: 0.5 }}>Contact</Typography>
        </Box>
      </Box>

      <Box sx={{ color: "#fff" }}>
        <Box>
          <Typography sx={{ fontWeight: "bold" }}>Resources</Typography>

          <Typography sx={{ mt: 0.5 }}>UK Resources</Typography>
          <Typography sx={{ mt: 0.5 }}>AU Resources</Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography sx={{ fontWeight: "bold" }}>Legal</Typography>

          <Typography sx={{ mt: 0.5 }}>Privacy & Cookies Policy</Typography>
          <Typography sx={{ mt: 0.5 }}>Terms & Conditions</Typography>
          <Typography sx={{ mt: 0.5 }}>Accessibility</Typography>
          <Typography sx={{ mt: 0.5 }}>Modern Slavery Statement</Typography>
          <Typography sx={{ mt: 0.5 }}>ApplyBoard Fees</Typography>
        </Box>
      </Box>

      <Box>
        <Typography sx={{ fontSize: "small", color: "#fff" }}>
          {metaData.copyRight}
        </Typography>
      </Box>
      <Box />
      <Box />
      <Box display="flex" justifyContent="space-between">
        <GradientButton
          Icon={<InstagramIcon />}
          styles={{
            border: "1px solid #fff",
            background: "linear-gradient(180deg, #BF5AF2 0%, #615CE7 100%)",
          }}
        />
        <GradientButton
          Icon={<LinkedInIcon />}
          styles={{
            border: "1px solid #fff",
            background: "linear-gradient(180deg, #BF5AF2 0%, #615CE7 100%)",
          }}
        />
        <GradientButton
          Icon={<FacebookIcon />}
          styles={{
            border: "1px solid #fff",
            background: "linear-gradient(180deg, #BF5AF2 0%, #615CE7 100%)",
          }}
        />
        <GradientButton
          Icon={<TwitterIcon />}
          styles={{
            border: "1px solid #fff",
            background: "linear-gradient(180deg, #BF5AF2 0%, #615CE7 100%)",
          }}
        />
      </Box>
    </Box>
  );
};

export default Footer;
