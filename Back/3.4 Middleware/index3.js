import express from "express";

const app = express();
const port = 3000;

function aMiddlewareFunction(req, res, next) {
  console.log('Now Logging...');
  console.log(req.method);
  console.log(req.url) ; 
  console.log('Complete :)');
  next() ; 
}

app.use(aMiddlewareFunction);
// this is similar to how we used morgan in index2.js, but here the middleware function is custom , there we are importing and using..


// lines 6 - 12 can also be written as
// app.use((req, res, next) => {
//   console.log(req.method);
//   console.log(req.url) ; 
//   next() ; 
// }
// );

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
