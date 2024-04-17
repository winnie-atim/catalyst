// Dependencies
const express = require('express');
const path =require("path");
const dotenv =  require('dotenv').config();


const connectDb = require('./config/dbConfig');
connectDb();


// Instantiations
const app = express();
const port = 5500;


// importing models
const babyform = require('./models/babiesModel');


 app.engine("pug", require("pug").__express)
app.set("view engine","pug")
app.set("views", path.join(__dirname, "views/pug")); 
app.use(express.static(path.join(__dirname,"public")))

 app.use(express.urlencoded({extended:true}))

  

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