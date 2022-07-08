import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import React from "react";
import Home from "../Home/Home";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SignUp from "../SignUp/SignUp";
import Login from "../SignUp/Login";
import "./App.css";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

function App() {
  const client = new ApolloClient({
    request: (operation) => {
      const token = localStorage.getItem("id_token");

      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : "",
        },
      });
    },
    uri: "/graphql",
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Header />

          <Routes>
            <Route path="*" element={<Navigate to="/Home" replace />} />
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/SignUp" element={<SignUp />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
