import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { render } from "react-dom";

function App() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();

  const [newContent, setNewContent] = useState();

  const [ideas, setIdeas] = useState();
  const [idea, setIdea] = useState();

  const getIdeas = () => {
    useEffect(() => {
      fetch("/api/ideas")
        .then(res => res.json())
        .then(res => setIdeas(res.ideas))
        .catch(console.error);
    }, [setIdeas]);
  };

  const getIdea = (id) => {
    useEffect(() => {
      fetch(`/api/idea/${id}`)
        .then(res => res.json())
        .then(res => setIdea(res.idea))
        .catch(console.error);
    }, [setIdea]);
  };

  const postIdea = () => {
    useEffect(() => {
      const idea = {
        title: "title",
        content: "content",
        firstname: "firstname",
        lastname: "lastname"
      }

      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(idea)
      };

      fetch("/api/ideas", requestOptions)
          .then(response => response.json());
    }, [setIdeas]);
  }

  const putIdea = (id) => {
    useEffect(() => {
      const idea = {
        title: "title",
        content: "content",
        firstname: "firstname",
        lastname: "lastname"
      }

      const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(idea)
      };

      fetch(`/api/ideas/${id}`, requestOptions)
          .then(response => response.json());
    }, [setIdeas]);
  };

  const deleteIdea = (id) => {
    useEffect(() => {
      const idea = {
        title: "title",
        content: "content",
        firstname: "firstname",
        lastname: "lastname"
      }

      const requestOptions = {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(idea)
      };

      fetch(`/api/ideas/${id}`, requestOptions)
          .then(response => response.json())
    }, [setIdeas]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Form">
          <label>Title:</label>
          <input
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
          <label>Content:</label>
          <input
            type="text"
            onChange={(event) => setContent(event.target.value)}
          />
          <label>Firstname:</label>
          <input
            type="text"
            onChange={(event) => setFirstname(event.target.value)}
          />
          <label>Lastname:</label>
          <input
            type="text"
            onChange={(event) => setLastname(event.target.value)}
          />
          <button onClick={postIdea}>Add idea</button>
        </div>
        <div className="Ideas">
          <button onClick={getIdeas}>Show ideas!</button>
          <p>{ideas || "Loading..."}</p>
          
          {ideas.map((val, key) => {
            return (
              <div className="Idea">
                <div>
                  <h3>Title: {val.title}</h3>
                  <h3>Content: {val.content}</h3>
                  <h3>Firstname: {val.firstname}</h3>
                  <h3>Lastname: {val.lastname}</h3>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Content..."
                    onChange={(event) => setNewContent(event.target.value)}
                  />
                  <button onClick={() => putIdea(val.id)}>Update</button>
                  <button onClick={() => deleteIdea(val.id)}>X</button>
                </div>
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;