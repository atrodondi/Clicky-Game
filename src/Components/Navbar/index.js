import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg">
      <ul>
        <li className="nav-item">Clicky Game</li>
        <li className="nav-item">{props.title}</li>
        <li className="nav-item">
          Score: {props.score} || Top Score: {props.topScore}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
