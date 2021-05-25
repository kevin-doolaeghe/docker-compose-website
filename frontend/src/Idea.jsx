import React from "react";

import "./style.css";

const Idea = ({ details, onDeleteIdea }) => (
  <div className="Idea">
    <button onClick={() => onDeleteIdea(details.id)}>X</button><h2><b>{details.title}</b></h2>
    <h4>{details.firstname} {details.lastname} - {details.date_t}</h4>
    <p>{details.content}</p>
  </div>
);

export default Idea;