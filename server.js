const express = require('express')
const Product=require("./Schema/userSchema")
require('./DB/connection')
const cors=require('cors');
const app = express()
const PORT=process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(express.static("./public"))
app.use(express.json());
// app.use(require("./Router/auth"))
app.use(cors());


app.get('/', function (req, res) {
  res.render("index");
})

app.get('/addproduct',(req,res)=>{
    res.render("addproduct");
})

app.get('/getproducts/:productId',async (req,res)=>{
    const productId=req.params.productId;
    console.log("get producsts enter "+productId);
    if(productId==="all"){
        res.status(201).json(Product);
    }else{
        try {
            console.log(await Product.findOne({_id:productId}));
            const rootproduct=await Product.findOne({_id:productId});
            if(!rootproduct){
                throw new Error("Product not found");
            }
            res.status(201).send(rootproduct);

        } catch (error) {
            console.log("error in finding root product "+error)
        }
    }
    
})

app.post('/add',async (req,res)=>{
    console.log("hi add enter");
    console.log(req.body);
    const {imageurl,name,product_id,product_manufacture,product_discription,product_quantity,product_category}=req.body;
    
    try {
        const product=new Product({imageurl,name,product_id,product_manufacture,product_discription,product_quantity,product_category,barcode:Math.floor(Math.random()*(10000000000-100000+1)+100000)});
        console.log(product);
        await product.save();
        console.log("data save");
        
        res.status(201).json({product:product});
        
        
    } catch (error) {
        console.log("in adding product from server "+error);
    }
    
})


app.listen(PORT,()=>{
    console.log("server start....");
    console.log(PORT)
})