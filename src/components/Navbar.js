import React, { useContext } from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  Menu,
  MenuItem
} from "@material-ui/core";
import UseAnimations from "react-useanimations";
import { LoginContext } from "../contexts/LoginContext";
export default props => {
  const randomUrl = `https://avatars.dicebear.com/v2/human/${Math.random()}.svg?options%5Bmood%5D%5B%5D=happy`;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { handleLogout } = useContext(LoginContext);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const { firstName, lastname } = JSON.parse(localStorage.getItem("info"));
  return (
    <Box display="flex" alignItems="center">
      <Box p={2} flexGrow={1} display="flex" style={{ marginLeft: 10 }}>
        <img
          src="https://svgur.com/i/Gq4.svg"
          style={{ height: 35, marginRight: 15 }}
          alt="logo Creative Resume"
        />
        <Typography
          variant="h6"
          noWrap
          style={{ color: "black", fontWeight: "bold" }}
        >
          Creative <u>Resume</u>
        </Typography>
      </Box>
      <Box
        p={2}
        display={{
          xs: "none",
          md: "block",
          lg: "block",
          xl: "block",
          sm: "none"
        }}
        style={{ marginRight: 10, display: "flex" }}
        alignItems="center"
      >
        <Button onClick={handleClick}>
          <Avatar src={randomUrl} style={{ marginRight: 15 }} />
          <Typography
            style={{ color: "black", fontSize: 13, fontWeight: "bold" }}
          >
            {firstName} {lastname}
          </Typography>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          style={{ padding: 25 }}
        >
          <MenuItem onClick={handleLogout}>
            Sign out
            <UseAnimations animationKey="lock" style={{ marginLeft: 8 }} />
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};
