// Dependencies
const express = require('express');
const mongoose =require ("mongoose")
const path =require("path");//for pug


require("dotenv").config



// Instantiations
const app = express();
const port = 5500;


//Configurations
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true, 
});

mongoose.connection
  .once("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", err => {
    console.error(`Connection error: ${err.message}`);
 });

app.set("view ingine","pug")
app.set("views", path.join(_dirname, "views")); //specify the directory where the views are found

//Middleware
 app.use(express.urlencoded({extended:true}))
// Route
// app.get('/', (req, res) => { 
//     res.send('Homepage! Hello world.');
//   });

    app.get('/About', (req, res) => { 
        res.sendFile(__dirname + "/about.html");
    });

    app.get("/login", (req, res) => {
        res.sendFile(__dirname + "/login.html");
    });

    app.post("/login", (req, res) => {
        console.log(req.body)
        res.send("login sucsessful")
    })
  







// Bootstrapping Server
// Always the last line in your code
app.listen(5500, () => console.log(`listening on ${port}`)); 