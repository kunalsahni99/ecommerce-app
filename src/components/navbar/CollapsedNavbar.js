import React from "react";
import { Link } from "react-router-dom";

import "./CollapsedNavbar.scss";
const CollapsedNavbar = ({ showNavbar, height }) => {
  return (
    <div
      id="overlay"
      style={{ height, overflow: height === "0%" ? "hidden" : "visible" }}
    >
      <span className="closebtn" onClick={() => showNavbar(false)}>
        &times;
      </span>

      <div className="overlay-content" onClick={() => showNavbar(false)}>
        <Link to="/">HOME</Link>
        <Link to="/shop/Party Themes">Party Themes</Link>
        <Link to="/shop/Professional">Professions</Link>
        <Link to="/shop/Superheroes">Superheroes</Link>
        <Link to="/shop/Indian Dancers">Indian Dancers</Link>
      </div>
    </div>
  );
};

export default CollapsedNavbar;
