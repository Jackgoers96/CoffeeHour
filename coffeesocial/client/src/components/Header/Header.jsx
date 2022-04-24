import * as React from "react";
import ReactDom from "react-dom";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";
import {AppBar} from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import {IconButton, Typography} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import SignUp from "../SignUp/SignUp";
import LogoutIcon from '@mui/icons-material/Logout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <Router>
      <AppBar position="static">
  <Toolbar variant="dense">
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" color="inherit" component="div">
      Photos
    </Typography>
  </Toolbar>
</AppBar>
      {/* <div class="headerDiv">
        <div>
          <Button varient="containted" href="./Home">
            <Badge id="HomeBadge" color="primary">
              <HomeIcon />
            </Badge>
          </Button>
        </div>
        <div>
          <Button varient="contained" href="./SignUp">
            <Badge id="loginBadge" color="primary">
              <LoginIcon />
            </Badge>
          </Button>
          <Button varient="contained" href="./SignOut">
            <Badge id="LogoutIcon" color="primary">
              <LogoutIcon />
            </Badge>
          </Button>
        </div>
      </div> */}
    </Router>
  );
}
export default Header;
