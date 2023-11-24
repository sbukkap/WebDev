import express from 'express'; 

const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send("ello client-san :)");
});

app.get("/about", (req,res) => {
    res.send('<h2>Shreekar\'s page</h2>');
});

app.get("/contact", (req,res) => {
    res.send('bruhh');
})

app.listen(port, () => {
    console.log(`All good, working on ${port}`);
})