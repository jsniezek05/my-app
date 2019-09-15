import React from 'react';
import './App.css';


import {Navbar, Nav, NavItem, MenuItem, NavDropDown} from "react-bootstrap";



function App() {
  return (

    <div className="App">

      <ul class="nav nav-tabs">
        <li role="presentation" class="active"><a href="/">MyBlog</a></li>
        <li role="presentation"><a href="/create">Create Post</a></li>
      </ul>

      <div class="panel panel-default">
        <div class="panel-body">
          <h2>Title</h2>
          <p>Date & Time</p>
        </div>
        <div class="panel-footer">
          <h4>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </h4>
        </div>
      </div>

    </div>
  );
}

export default App;
