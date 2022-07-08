import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import RedditIcon from "@mui/icons-material/Reddit";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.css";
import { Container } from "@mui/material";
function Footer() {
  return (
    <Container>
      <div>
        <div id="footerDiv">
          <div className="footerIcons">
            <Button
              varient="containted"
              target="_blank"
              href="https://facebook.com"
              color="primary"
              className="socials"
            >
              <Badge>
                <FacebookIcon />
              </Badge>
            </Button>
          </div>
          <div className="footerIcons">
            <Button
              varient="contained"
              target="_blank"
              href="https://instagram.com"
              color="primary"
              className="socials"
            >
              <Badge>
                <InstagramIcon />
              </Badge>
            </Button>
          </div>
          <div className="footerIcons">
            <Button
              varient="containted"
              target="_blank"
              href="https://reddit.com"
              color="primary"
              className="socials"
            >
              <Badge>
                <RedditIcon />
              </Badge>
            </Button>
          </div>
          <div className="footerIcons">
            <Button
              varient="contained"
              target="_blank"
              href="https://twitter.com"
              color="primary"
              className="socials"
            >
              <Badge>
                <TwitterIcon />
              </Badge>
            </Button>
          </div>
          <div className="footerIcons">
            <Button
              varient="contained"
              target="_blank"
              href="https://linkedin.com"
              color="primary"
              className="socials"
            >
              <Badge>
                <LinkedInIcon />
              </Badge>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Footer;
