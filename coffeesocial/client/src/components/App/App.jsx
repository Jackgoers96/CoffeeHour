import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  React,

} from "react";
import Home from "../Home/Home";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SignUp from "../SignUp/SignUp";
import Login from "../SignUp/Login";
import "./App.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Redirect exact from="/" to="/Home" />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
