import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandname = '';

app.use(bodyParser.urlencoded({extended: true}));

function fullName(req, res, next){
  bandname = req.body.street + req.body.pet ;
  next(); 
}

app.use(fullName);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req,res) => {
  console.log("POST called");

  res.send(`<h1>Your Band Name is:</h1> <b> ${bandname} </b>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
