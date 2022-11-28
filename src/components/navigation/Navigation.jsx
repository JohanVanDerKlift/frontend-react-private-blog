import React from 'react';
import './Navigation.css'
import { NavLink } from "react-router-dom";

function Navigation(props) {
  return (
    <nav>
      <ul className="navigation">
        <li>
          <NavLink
            className={({isActive}) => isActive ? "active-menu-link" : "default-menu-link"}
            to="/"
          >Home</NavLink>
        </li>
        <li>
          <NavLink
            className={({isActive}) => isActive ? "active-menu-link" : "default-menu-link"}
            to="/blogposts"
          >Blogposts</NavLink>
        </li>
        <li>
          <NavLink
            className={({isActive}) => isActive ? "active-menu-link" : "default-menu-link"}
            to="/login"
          >Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;