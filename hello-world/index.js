// Dependencies
const express = require('express');
// const mongoose =require ("mongoose")
const path =require("path");//for pug


// require("dotenv").config



// Instantiations
const app = express();
const port = 5500;


//Configurations
// mongoose.connect(process.env.DATABASE,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true, 
// });

// mongoose.connection
//   .once("open", () => {
//     console.log("Mongoose connection open");
//   })
//   .on("error", err => {
//     console.error(`Connection error: ${err.message}`);
//  });




 app.engine("pug", require("pug").__express)
app.set("view engine","pug")
app.set("views", path.join(__dirname, "views/pug")); 
app.use(express.static(path.join(__dirname,"public")))

 app.use(express.urlencoded({extended:true}))
// Route
// app.get('/', (req, res) => { 
//     res.send('Homepage! Hello world.');
//   });

    // app.get('/About', (req, res) => { 
    //     res.sendFile(__dirname + "/about.html");
    // });

    // app.get("/login", (req, res) => {
    //     res.sendFile(__dirname + "/login.html");
    // });

    // app.post("/login", (req, res) => {
    //     console.log(req.body)
    //     res.send("login sucsessful")
    // })
  

// routes
const landingRoutes = require("./routes/landingRoutes");
const loginRoutes = require("./routes/loginRoutes");
const babyRoutes = require("./routes/babiesRoutes");
const adminRoutes = require("./routes/adminRoutes");
const admindashRoutes = require("./routes/admindashRoutes");
const sitterformRoutes = require("./routes/sitterformRoutes");
const sittertableRoutes = require("./routes/sittertableRoutes");


// importing routes
app.use("/api", landingRoutes);
app.use("/api", loginRoutes);
app.use("/api", babyRoutes);
app.use("/api", adminRoutes);
app.use("/api", admindashRoutes);
app.use("/api", sitterformRoutes);
app.use("/api", sittertableRoutes);


// Bootstrapping Server
// Always the last line in your code
app.listen(5500, () => console.log(`listening on ${port}`)); 