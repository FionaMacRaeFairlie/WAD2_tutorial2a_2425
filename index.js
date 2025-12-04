// app.js (ES Modules)

import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import mustacheExpress from "mustache-express";

// Recreate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));

// Serve static files from ./public
app.use(express.static(path.join(__dirname, "./public")));

// Mustache template engine
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");

app.post("/processForm", function (req, res) {
  const userName = req.body.firstName;
  res.render("formResults", {
    title: "Input from form",
    name: userName,
    surname: req.body.surname,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
