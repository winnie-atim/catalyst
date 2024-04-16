const express = require("express");
const router = express.Router();



router.get("/babyform", (req,res) =>{
    res.render("babiesform")
})


module.exports = router;