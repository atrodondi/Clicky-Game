import React from "react";
import "./style.css";

function ApostleCard(props) {
  return (
    <div className="container">
      <div className="img-container">
        <img
          id={props.id}
          onClick={props.onclick}
          alt={props.name}
          src={props.image}
        />
      </div>
    </div>
  );
}

export default ApostleCard;
