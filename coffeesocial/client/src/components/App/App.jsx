import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../Home/Home";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SignUp from "../SignUp/SignUp";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/SignUp" component={SignUp} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
