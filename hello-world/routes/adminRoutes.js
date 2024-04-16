const express = require("express");
const router = express.Router();



router.get("/adminlogin", (req,res) =>{
    res.render("adminlogin")
})


module.exports = router;