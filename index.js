const express = require("express")
const app = express()
const db = require(".//connection/db")
app.get("/home",(req,res)=>{
    res.send("hello")
    console.log("hello");
})

app.use(express.json())
// require("./router")
app.use('/',require("./router"))
// app.use("/user",require)
PORT = process.env.PORT || 5001

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})