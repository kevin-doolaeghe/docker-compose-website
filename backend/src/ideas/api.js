const database = require("../database");

module.exports.getIdeas = (_, res) => {
  database.query("SELECT * FROM ideas", (err, ideas) => {
    if (err) console.log(err);
    else res.send(ideas);
  });
};

module.exports.getIdea = (req, res) => {
  const id = req.params.id;
  database.query("SELECT * FROM ideas WHERE id = ?", id, (err, idea) => {
    if (err) console.log(err);
    else res.send(idea);
  });
};

module.exports.postIdea = (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;

  database.query(
    "INSERT INTO ideas (title, content, firstname, lastname) VALUES (?,?,?,?)",
    [title, content, firstname, lastname],
    (err, res) => {
      if (err) console.log(err);
      else res.send(res);
    }
  );
};

module.exports.putIdea = (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;

  const id = req.params.id;

  database.query(
    "UPDATE ideas SET title = ?, content = ?, firstname = ?, lastname = ? WHERE id = ?",
    [title, content, firstname, lastname, id],
    (err, res) => {
      if (err) console.log(err);
      else res.send(res);
    }
  );
};

module.exports.deleteIdea = (req, res) => {
  const id = req.params.id;

  database.query("DELETE FROM employees WHERE id = ?", id, (err, res) => {
    if (err) console.log(err);
    else res.send(res);
  });
};
