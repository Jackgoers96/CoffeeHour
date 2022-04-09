import coffee from './images/coffee.png';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Pages/Home";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <p>This is the top of the page where some stuff happens or whatever.</p>
        <br/>

        <ul>
          <li>
            <Route path="/Home"><Home />
            </Route>
            </li>
        </ul>
      </Switch>
    <div className="App">
      <header className="App-header">
        <img src={coffee} className="App-logo" alt="logo" />
        <p>
          Welcome to my Future Webpage! Sit down, grab a coffee and browse a new way to social. Don't mind the mess while we get it together.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <Switch>
      <div>
        <p>Bullshit goes here</p>
      </div>
      </Switch>
    </Router>
  );
}

export default App;
