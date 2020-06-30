import React from "react";
import { NavLink } from "react-router-dom";

import "./navbar.scss";
import {
  Button,
  ListItemText,
  MenuItem,
  withStyles,
  Menu,
} from "@material-ui/core";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const Navbar = ({ tabs }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="navbar my-navbar navbar-expand-lg navbar-light bg-light">
      <Button variant="contained" color="primary" onClick={handleClick}>
        CW
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemText primary="DHS Workspace" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="HINT Workspace" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="My Workspace" />
        </StyledMenuItem>
      </StyledMenu>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {tabs.map((tab) => (
            <li key={tab._id} className="nav-item">
              <NavLink className="nav-link" to={tab.path}>
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
