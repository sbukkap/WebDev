import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var data = {
  firstTime: true
};

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render('index.ejs', data);
});

app.post("/submit", (req, res) => {
  // *************************************below line
  data.firstTime = false;
  // *************************below line onenote note to be added
  data['namelength'] = req.body['fName'].length + req.body['lName'].length
  res.render(__dirname + '/views/index.ejs', data)
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
