const express = require("express");
const app = express();


//get Api
app.get("/", (req, res) => {
  let Name = req.query.name;

  let promise = new Promise((resolve, reject) => {
    if (Name !== undefined && Name !== "") {
      resolve("Hello " + Name + ", nice to see u here");
    } else {
      reject("Please Specify Your Name in The Url Like (/?name=Your Name)");
    }
  });
  promise
    .then((response) => {
      res.status(200).json({ Success: response });
    })
    .catch((err) => {
      res.status(400).json({ error: ` ${err}` });
    });
});


//Server Port
const Port = 3000;
app.listen(Port, () => {
  console.log("Server Running On Port:", Port);
});
