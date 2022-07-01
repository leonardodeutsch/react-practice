import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">React Practice</Link>
      <ul>
        <li>
          <Link to="/movieland">MovieLand</Link>
        </li>
        <li>
          <Link to="/todolist">ToDo List</Link>
        </li>
      </ul>
    </nav>
  );
}
 
export default NavBar;