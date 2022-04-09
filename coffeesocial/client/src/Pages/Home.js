import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Home() {
  return (
    <Router>
      <Switch>
        <p>This is the top of the page where some stuff happens or whatever.</p>
        <ul>
          <li>
            <Route path="/">Home</Route>
            </li>
        </ul>
      </Switch>
        <p>Stuff</p>
      <div>
          <p>More stuff</p>
      </div>
    </Router>
  );
}

export default Home;
