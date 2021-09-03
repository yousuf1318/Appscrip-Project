const mongoose =require('mongoose');
require("dotenv").config();
mongoose.connect(
    process.env.DB_CONNECTION,
    { 
        keepAlive: true,
        useNewUrlParser: true, 
        useUnifiedTopology: true ,
     
    },
    (err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("database connected successfully");
        }
    }
)