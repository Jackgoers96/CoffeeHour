import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "../App/App.css";
import "./Home.css";

function Home() {
  return (
    <Route>
    <div class="homePage">
      <p>Stuff</p>

      <p>More stuff</p>
    </div>
    </Route>
  );
}

export default Home;
