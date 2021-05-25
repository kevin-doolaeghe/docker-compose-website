import React from "react";

import "./style.css";

const Idea = ({ details }) => (
  <div className="Idea">
    <h2>{details.title} - <h4>{details.firstname} {details.lastname}</h4></h2>
    <p>{details.content}</p>
  </div>
);

export default Idea;