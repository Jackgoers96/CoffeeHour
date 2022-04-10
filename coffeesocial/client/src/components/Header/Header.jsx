import * as React from "react";
import ReactDom from "react-dom";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import LoginIcon from "@mui/icons-material/Login";
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
      <div>
        <Button varient="containted" href="./Home">
          Go Home
        </Button>
        <Badge id="loginBadge" color="primary">
          <LoginIcon />
        </Badge>
      </div>
    </Router>
  );
}
export default Header;
