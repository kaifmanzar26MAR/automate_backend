const mongoose=require("mongoose");


const userSchema=mongoose.Schema({
    imageurl:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
    product_id:{
        type:String,
        require:true,
    },
    product_manufacture:{
        type:String,
        require:true,
    },
    product_discription:{
        type:String,
        require:true,
    },
    product_quantity:{
        type:Number,
        require:true,
        default:1,
    },
    product_category:{
        type:String,
        default:"No Category"
    },
    barcode:{
        type:Number,
        default:Math.floor(Math.random()*10000)
    }
});


const Product=mongoose.model("Product",userSchema);
module.exports=Product;

