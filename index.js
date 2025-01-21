const express = require("express");
const path = require("path");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./public")));

const mustache = require("mustache-express");
app.engine("mustache", mustache());
app.set("view engine", "mustache");

app.get("/serverForm2",function (req, res) {
  res.render("form", 
    {
      title:'Input from form',
      name: "",
      surname:""
    });
  });

app.post("/processForm", function (req, res) {
  let userName = req.body.firstName;
  res.render("formResults", {
    title:'Input from form',
    name: userName,
    surname:req.body.surname
  });
});


app.post("/processForm2", function (req, res) {
 let userName= req.body.firstName
 console.log(userName)
  res.render("form", {
    title:'Input from form',
    name: req.body.firstName,
    surname:req.body.surname
  });
});


app.listen(3000, () => {
  console.log("Server listening on port: 3000");
});
