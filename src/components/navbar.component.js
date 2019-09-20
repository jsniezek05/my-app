import React from 'react';
import {Link} from 'react-router-dom'


class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">MyBlog</Link>
        <Link to="/create">
          <button type="button" className="btn btn-default navbar-btn">New Post</button>
        </Link>
      </nav>

      )
  }
}
export default Navbar