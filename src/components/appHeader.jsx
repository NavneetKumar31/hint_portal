import React from "react";
// import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import "./appHeader.scss";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const AppHeader = ({ header, onToggle }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className="my-app-header">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={() => onToggle()}
        >
          <i className="fa fa-bars"></i>
        </IconButton>

        <Typography variant="h6" className={classes.title}>
          <Link to="/" className="navbar-brand">
            HINT
          </Link>
        </Typography>

        <Button color="inherit" onClick={handleClick}>
          Admin
        </Button>
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <StyledMenuItem>
            <ListItemIcon>
              <i className="fa fa-user-circle-o"></i>
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemIcon>
              <i className="fa fa-folder-o"></i>
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemIcon>
              <i className="fa fa-sign-out"></i>
            </ListItemIcon>
            <ListItemText primary="Sign Out" />
          </StyledMenuItem>
        </StyledMenu>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
