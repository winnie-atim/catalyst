const express = require("express");
const router = express.Router();



router.get("/sitterform", (req,res) =>{
    res.render("sitterform")
})


module.exports = router;