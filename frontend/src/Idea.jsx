import React from "react";

import "./style.css";

const Idea = ({ details, onIdeaDelete }) => (
  <div className="Idea">
    <h2><b>{details.title}</b></h2>
    <h4>{details.firstname} {details.lastname} - {details.date_t}</h4>
    <p>{details.content}</p>
    <button onClick={() => onIdeaDelete(details.id)}>Supprimer l'idée</button>
  </div>
);

export default Idea;