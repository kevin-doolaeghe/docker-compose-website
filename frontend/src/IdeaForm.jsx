import React, { Component } from "react";

import "./style.css";

class IdeaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      firstname: "",
      lastname: ""
    };
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.currentTarget.value });
  };

  handleContentChange = (event) => {
    this.setState({ content: event.currentTarget.value });
  };

  handleFirstnameChange = (event) => {
    this.setState({ firstname: event.currentTarget.value });
  };

  handleLastnameChange = (event) => {
    this.setState({ lastname: event.currentTarget.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const idea = { ...this.state };
    this.props.onIdeaAdd(idea);

    this.setState({
      title: "",
      content: "",
      firstname: "",
      lastname: ""
    });
  };

  render() {
    return (
      <form className="IdeaForm" onSubmit={this.handleSubmit}>
        <label>Titre : </label>
        <input
          className="title"
          value={this.state.title}
          onChange={this.handleTitleChange}
          type="text"
          placeholder="Apprendre React.js"
          required
        />
        <label>Idée : </label>
        <textarea
          className="content"
          value={this.state.content}
          onChange={this.handleContentChange}
          type="text"
          placeholder="..."
          required
        />
        <label>Auteur : </label>
        <input
          className="firstname"
          value={this.state.firstname}
          onChange={this.handleFirstnameChange}
          type="text"
          placeholder="John"
          required
        />
        <input
          className="lastname"
          value={this.state.lastname}
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