import React, { Component } from "react";

import Idea from "./Idea";
import IdeaForm from "./IdeaForm";

import "./style.css";

class IdeaList extends Component {
  constructor(props) {
    super(props);
    this.state = { ideas: [] };
  }

  getIdeas = () => {
    fetch("/api/ideas")
      .then(res => res.json())
      .then(res => this.setState({ ideas: res }))
      .catch(console.error);
  };

  getIdea = (id) => {
    fetch(`/api/ideas/${id}`)
      .then(res => res.json())
      .then(res => console.log(res))
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
    const empty_list = "La liste est vide.";

    return (
      <div className="IdeaListApp">
        <h1>{title}</h1>
        <div className="IdeaList">
          {
            this.state.ideas && this.state.ideas.length > 0
              ? this.state.ideas.map(idea => <Idea key={idea.id} details={idea} onIdeaDelete={this.deleteIdea} />)
              : empty_list
          }
        </div>
        <IdeaForm onIdeaAdd={this.postIdea} />
      </div>
    );
  }
}

export default IdeaList;
