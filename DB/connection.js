const mongoose =require('mongoose');
require('dotenv').config();
const link=process.env.LINK;
mongoose.connect(link,{
    useUnifiedTopology:true,useNewUrlParser: true
}).then(()=>{
    console.log("database connected..")
}).catch((e)=>{
    console.log("error in database "+e);
})