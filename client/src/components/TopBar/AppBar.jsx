import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

import { screens } from "@/constants/TopbarMenu";
import LogoImg from "./LogoImg";
import useStyle from "@/hooks/useStyle";
// swipper
// counter up

function ResponsiveAppBar({ logoImg }) {
  const { theme, Box, Typography, MyImg, GradientButton } = useStyle();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: theme.palette.bg3,
        borderRadius: { xs: "20px", md: "20px" },
        boxShadow: 0,
        border: "#ccc solid 1px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: { md: "space-between" },
          }}
        >
          <Typography
            variant="h6"
            noWrap
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to="/">
              <MyImg img={logoImg} />
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {screens.map((page, i) => (
                <MenuItem
                  component={Link}
                  onClick={handleCloseNavMenu}
                  variant="span"
                  to={page.link}
                  key={page.text + i}
                >
                  <Typography textAlign="center">{page.text}</Typography>
                </MenuItem>
              ))}
              <GradientButton buttonText="Get Started" styles={{ mx: 2 }} />
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#ccc",
              textDecoration: "none",
            }}
          >
            <Link to="/">
              <LogoImg logoImg={logoImg} />
            </Link>
          </Typography>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            {screens.map((page, i) => (
              <Button
                component={Link}
                to={page.link}
                key={page.text + i}
                variant="span"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                }}
              >
                {page.text}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <GradientButton buttonText="Get Started" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
