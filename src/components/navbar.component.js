import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">MyBlog</Link>
        <div className="collapse navbar-collapse">
          <ul class="nav nav-tabs">
            <li role="presentation">
              <Link to="/create">Create Post</Link>
            </li>
          </ul>
        </div>
      </nav>

      )
  }
}
export default Navbar