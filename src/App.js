import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Navbar from "./components/navbar.component.js";
import Home from "./components/home.component.js";
import Create from "./components/create.component.js";
import EditPost from "./components/edit.component.js";

function App() {
  return (


  <Router>  
    <Navbar />
    <br/>
    <Route exact path="/" component={Home} />
    <Route path="/edit/:id" component={EditPost} />
    <Route path="/create" component={Create} />
  </Router>

  );
}

export default App;
