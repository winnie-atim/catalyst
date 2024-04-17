const express = require("express");
const router = express.Router();
const Baby = require("../models/babiesModel");



router.get("/babyform", (req,res) =>{
    res.render("babiesform")
})


router.post('/regregister',async(req,res) =>{
    try{
        const register = new Baby(req.body);
        await register.save();
        console.log(req.body);
        res.redirect("/api/babiesform");
        
    }
    catch(error) {
        console.log(error);
        return res.status(400).send({message: "sorry could not find babyform"})
    }
})

module.exports = router;