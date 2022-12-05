import React from 'react';
import './Navigation.css'
import { NavLink } from "react-router-dom";

function Navigation({isAuthenticated, toggleIsAuthenticated}) {
  return (
    <nav>
      <ul className="navigation">
        <li>

            <NavLink
              className={({isActive}) => isActive ? "active-menu-link" : "default-menu-link"}
              to="/"
            >Home</NavLink>

        </li>
        {isAuthenticated &&
          <li>
            <NavLink
              className={({isActive}) => isActive ? "active-menu-link" : "default-menu-link"}
              to="/blogposts"
            >Blogposts</NavLink>
          </li>
        }
        {!isAuthenticated ?
          <li>
            <NavLink
              className={({isActive}) => isActive ? "active-menu-link" : "default-menu-link"}
              to="/login"
            >Login</NavLink>
          </li> :
          <li>
            <NavLink
              className="default-menu-link"
              to="/"
              onClick={toggleIsAuthenticated}
            >Logout</NavLink>
          </li>
        }
      </ul>
    </nav>
  );
}

export default Navigation;