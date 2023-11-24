import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var attr1 = '';
var attr2 = '';

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req,res) => {

    if (req.body['day'] == 0 || req.body['day'] == 6){
        attr1 = 'weekend';
        attr2 = 'YAY ^_^'; 
    }
    else {
        attr1 = 'week day';
        attr2 = 'GANBARUZOUUU!';
    }    

    res.render(__dirname + '/views/index.ejs', 
    {dayval: attr1, msg: attr2}
    );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
