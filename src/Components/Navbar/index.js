import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg">
      <ul>
        <li className="nav-item">Clicky Game</li>
        <li className="nav-item">Click a picture to begin the game!</li>
        <li className="nav-item">Score: {props.score}</li>
      </ul>
    </nav>
  );
}

export default Navbar;
