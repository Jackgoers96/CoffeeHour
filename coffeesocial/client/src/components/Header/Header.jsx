import * as React from "react";
import ReactDom from "react-dom";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";
import SignUp from "../SignUp/SignUp";
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
      <div class="headerDiv">
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
        </div>
      </div>
    </Router>
  );
}
export default Header;
