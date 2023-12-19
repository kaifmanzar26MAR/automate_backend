const express=require("express");
const router=express.Router();

require("../DB/connection");
const Product=require("../Schema/userSchema");


router.get('/',(req,res)=>{
    res.render('index');
})

router.get('/addproduct',(req,res)=>{
    res.render("addproduct");
})