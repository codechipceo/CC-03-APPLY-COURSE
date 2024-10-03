import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Box, Button, Typography } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "./routes";
import { useTools } from "@/hooks/useTools";
import { logout } from "@/slices/adminSlice";

const CreateIcon = ({ MyIcon }) => {
  return MyIcon ? <MyIcon sx={{ color: "black" }} /> : null;
};

CreateIcon.propTypes = {
  MyIcon: PropTypes.elementType.isRequired,
};

export const Sidebar = () => {
  const [open, setOpen] = useState(-1);
  const navigate = useNavigate();

  const handleOpen = (index) => {
    setOpen(open === index ? -1 : index);
  };

  const { dispatch } = useTools();

  return (
    <List sx={{ borderRight: "2px solid grey", pr: 3, minHeight: "100vh" }}>
      <Typography textAlign={"center"} fontWeight={"bold"}>
        STUDYDIPLOMA
      </Typography>
      <Typography textAlign={"center"} fontWeight={"bold"}>
        DASHBOARD
      </Typography>
      {routes.map((route, mainIndex) => {
        const { path, name, icon, subMenu } = route;

        return (
          <div key={mainIndex}>
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(89, 86, 233, 0.1)",
                  color: "rgba(89, 86, 233, 1)",
                },
              }}
              onClick={() => {
                if (path) {
                  navigate(path);
                } else {
                  handleOpen(mainIndex);
                }
              }}
            >
              <ListItemIcon>
                <CreateIcon MyIcon={icon} />
              </ListItemIcon>
              <ListItemText primary={name} />
              {subMenu ? (
                open === mainIndex ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )
              ) : null}
            </ListItemButton>
            {subMenu && (
              <Collapse in={open === mainIndex} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                  {subMenu.map((subRoute, index) => {
                    const { path, name, icon } = subRoute;
                    return (
                      <ListItemButton
                        key={index}
                        sx={{ pl: 4 }}
                        onClick={() => {
                          navigate(path);
                        }}
                      >
                        <ListItemIcon>
                          <CreateIcon MyIcon={icon} />
                        </ListItemIcon>
                        <ListItemText primary={name} />
                      </ListItemButton>
                    );
                  })}
                </List>
              </Collapse>
            )}
          </div>
        );
      })}

      <Box m={"5px"}>
        <Button
          fullWidth
          variant='contained'
          disableElevation
          onClick={() => {
            dispatch(logout());
          }}
        >
          {" "}
          Log Out
        </Button>
      </Box>
    </List>
  );
};
