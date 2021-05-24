import React, { Component } from "react";

import "./style.css";

class IdeaForm extends Component {
  state = {
    idea: {
      title: "",
      content: "",
      firstname: "",
      lastname: ""
    }
  };

  handleTitleChange = (event) => {
    this.setState({ idea: { title: event.currentTarget.value } });
  };

  handleContentChange = (event) => {
    this.setState({ idea: { content: event.currentTarget.value } });
  };

  handleFirstnameChange = (event) => {
    this.setState({ idea: { firstname: event.currentTarget.value } });
  };

  handleLastnameChange = (event) => {
    this.setState({ idea: { lastname: event.currentTarget.value } });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const idea = this.state.idea;
    this.props.onIdeaAdd(idea);
    console.log(idea);

    this.setState({
      idea: {
        title: "",
        content: "",
        firstname: "",
        lastname: ""
      }
    });
  };

  render() {
    return (
      <form className="IdeaForm" onSubmit={this.handleSubmit}>
        <label>Titre : </label>
        <input
          className="title"
          value={this.state.idea.title}
          onChange={this.handleTitleChange}
          type="text"
          placeholder="Apprendre React.js"
          required
        />
        <label>Idée : </label>
        <textarea
          className="content"
          value={this.state.idea.content}
          onChange={this.handleContentChange}
          type="text"
          placeholder="..."
          required
        />
        <label>Auteur : </label>
        <input
          className="firstname"
          value={this.state.idea.firstname}
          onChange={this.handleFirstnameChange}
          type="text"
          placeholder="John"
          required
        />
        <input
          className="lastname"
          value={this.state.idea.lastname}
          onChange={this.handleLastnameChange}
          type="text"
          placeholder="Doe"
          required
        />
        <button className="submit_button">Confirmer</button>
      </form>
    );
  }
}

export default IdeaForm;