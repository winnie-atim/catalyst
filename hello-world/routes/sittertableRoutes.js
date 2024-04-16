const express = require("express");
const router = express.Router();



router.get("/sittertable", (req,res) =>{
    res.render("sittertable")
})


module.exports = router;