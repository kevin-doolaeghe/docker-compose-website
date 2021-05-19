const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

module.exports = { app: app, router: express.Router() };
