import React from 'react';
import '../styles/App.css';
import Login from "./login";
import Register from "./register";
import {Route, BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <Route
        exact path="/"
        render={() => <Login />}
      />
      <Route
        exact path="/register"
        render={() => <Register />}
      />
    </Router>
  );
}

export default App;
