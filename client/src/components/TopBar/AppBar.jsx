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
import { useNavigate } from "react-router-dom";
import newLogo from "@/assets/img/newlogo.png";
import { useState } from "react";


const SubMenu = () => {
  const [anchorElServices, setAnchorElServices] = useState(null);
  const handleOpenServicesMenu = (event) => {
    setAnchorElServices(event.currentTarget);
  };
  const handleCloseServicesMenu = () => {
    setAnchorElServices(null);
  };


  return (
    <>
      <div>
        {/* Button to trigger submenu */}
        <Button
          aria-controls='services-menu'
          aria-haspopup='true'
          onClick={handleOpenServicesMenu} // Open submenu on click
          sx={{
            my: 2,
            color: "black",
            backgroundColor: "#FFC600",
          }}
        >
          Discover
        </Button>

        {/* Submenu */}
        <Menu
          id='services-menu'
          anchorEl={anchorElServices}
          open={Boolean(anchorElServices)} // Open submenu if anchorEl is set
          onClose={handleCloseServicesMenu} // Close on menu item click or clicking outside
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }} // Positioning
          transformOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <MenuItem onClick={handleCloseServicesMenu}>
            <Link to='/women'>For Women</Link>
          </MenuItem>
          <MenuItem onClick={handleCloseServicesMenu}>
            <Link to='/about-us'>About Us</Link>
          </MenuItem>
          <MenuItem onClick={handleCloseServicesMenu}>
            <Link to='/contact-us'>Contact Us</Link>
          </MenuItem>
        </Menu>
      </div>
    </>
  );
}

function ResponsiveAppBar({ logoImg  }) {
  const { theme, Box, Typography, MyImg, GradientButton } = useStyle();



  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const navigate = useNavigate();
  return (
    <AppBar
      sx={{
        background: theme.palette.bg3,
        boxShadow: 0,
        position:'relative', top:0
      }}
    >

        <Toolbar
          disableGutters
          sx={{
            justifyContent: { md: "space-between" },
          }}
      >
        <Container sx={{display:'flex' , justifyContent:'space-between', alignItems:'center' , maxWidth:'1600px'}}>

          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
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
            <Link to={"/"}>
              <LogoImg logoImg={newLogo} />
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='black'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
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
              {/* FOR MOBILE */}
              {screens.map((page, i) => (
                <Link to={page.link} key={page.text + i}>
                  <MenuItem onClick={handleCloseNavMenu} variant='span'>
                    <Typography textAlign='center'>{page.text}</Typography>
                  </MenuItem>
                </Link>
              ))}
              <SubMenu />
              {/* <GradientButton buttonText='Get Started' /> */}
            </Menu>
          </Box>

          <Typography
            variant='h5'
            noWrap
            component='a'
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
            <Link to={"/"}>
              <LogoImg logoImg={logoImg} />
            </Link>
          </Typography>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            {/* FOR DESKTOP */}
            {screens.map((page, i) => (
              <Link to={page.link} key={page.text + i}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "#333333",
                    "&:hover": {
                      color: "#FFC600",
                      backgroundColor:'transparent'
                    },
                    display: "block",
                  }}
                >
                  {page.text}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {<SubMenu />}
            {/* <GradientButton
              buttonText='Get Started'
              handleClick={() => navigate("/students")}
            /> */}
          </Box>
        </Container>
        </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
