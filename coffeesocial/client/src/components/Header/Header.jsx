import * as React from "react";
import ReactDom from "react-dom";
import Button from "@mui/material/Button";
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
        <Button varient="containted" href="./SignUp">
          Sign Up with us!
        </Button>
      </div>
    </Router>
  );
}
export default Header;
