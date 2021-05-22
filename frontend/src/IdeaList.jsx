import React, { Component } from "react";

import Idea from "./Idea";
import IdeaForm from "./IdeaForm";

import "./style.css";
import logo from "./logo.svg";

class IdeaList extends Component {
  state = {
    ideas: []
  };

  getIdeas = () => {
    fetch("/api/ideas")
      .then(res => res.json())
      .then(res => this.setState({ideas: res.ideas}))
      .catch(console.error);
  };

  getIdea = (id) => {
    fetch(`/api/ideas/${id}`)
      .then(res => res.json())
      .then(res => console.log(res.ideas))
      .catch(console.error);
  };

  postIdea = (idea) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(idea)
    };

    fetch("/api/ideas", requestOptions)
      .then(response => response.json());
  }

  putIdea = (idea, id) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(idea)
    };

    fetch(`/api/ideas/${id}`, requestOptions)
      .then(response => response.json());
  };

  deleteIdea = (idea, id) => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(idea)
    };

    fetch(`/api/ideas/${id}`, requestOptions)
      .then(response => response.json());
  }

  render() {
    this.getIdeas();
    const title = "Liste des idées";

    return (
      <div className="IdeaListApp">
        <h1>{title}</h1>
        <div className="IdeaList">
          {this.state.ideas.map((idea) => (
            <Idea key={idea.id} details={idea} />
          ))}
        </div>
        <IdeaForm onIdeaAdd={this.postIdea} />
      </div>
    );
  }
}

export default IdeaList;