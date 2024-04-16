const express = require("express");
const router = express.Router();



router.get("/admindash", (req,res) =>{
    res.render("admindashboard")
})


module.exports = router;