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
        <form className="form-inline mr-auto">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
        </form>
      </nav>

      )
  }
}
export default Navbar