import React from "react";
import { NavLink } from "react-router-dom";

function MyNav({ books }) {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark fixednav">
      <NavLink className="btn navlink brand-size" to="/">
        Taches
      </NavLink>

      <NavLink className="btn navlink" to="/About">
        A propos
      </NavLink>
      <div className="containNumber">
        <span className="numberTask">
          <strong>{books.length} Livres</strong>
        </span>
      </div>
    </nav>
  );
}

export default MyNav;
