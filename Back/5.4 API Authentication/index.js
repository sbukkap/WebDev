import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "sbukkap ";
const yourPassword = "Bruh6969";
const yourAPIKey = "c44044b1-6fbd-431d-ad23-1793b4791cff";
const yourBearerToken = "2c16859e-ecfd-4f89-84e6-410d13e476e1";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth",async (req, res) => {
  const response = await axios.get(
    "https://secrets-api.appbrewery.com/random"
    );
  
  const result = response.data;
  // console.log(result);
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  const stringResult = JSON.stringify(result) ; 
  res.render('index.ejs', {content: stringResult}) ; 
});

app.get("/basicAuth",async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  try{
  const response = await axios.get(
    "https://secrets-api.appbrewery.com/all?page=2", 
      {},
      {auth: {
        username: yourUsername,
        password: yourPassword
      }}
    );
  
  const result = response.data;
  const stringResult = JSON.stringify(result) ; 
  res.render('index.ejs', {content: stringResult}) ; 
    }catch(error){
      res.status(404).send(error.message);
    }
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  
});

app.get("/apiKey",async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  try{
    const response = await axios.get(
      "https://secrets-api.appbrewery.com/filter?score=5&apiKey="+yourAPIKey, 
      );
    
    const result = response.data;
    const stringResult = JSON.stringify(result) ; 
    res.render('index.ejs', {content: stringResult}) ; 
      }catch(error){
        res.status(404).send(error.message);
      }
});

app.get("/bearerToken", async(req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
  try{
    const response = await axios.get(
      "https://secrets-api.appbrewery.com/secrets/42", 
        {headers: {
          Authorization: `Bearer ${yourBearerToken}`
        }}
      );
    
    const result = response.data;
    const stringResult = JSON.stringify(result) ; 
    res.render('index.ejs', {content: stringResult}) ; 
      }catch(error){
        res.status(404).send(error.message);
      }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
