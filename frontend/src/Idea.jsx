import React from "react";

import "./style.css";

const Idea = ({ details }) => (
  <div className="Idea">
    <h2>{details.title}</h2>
    <p>{details.content}</p>
    <h4>{details.firstname} {details.lastname}</h4>
  </div>
);

export default Idea;