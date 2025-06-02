
const express = require('express');

const app = express()
app.use("/",(req,res,next)=>{
    res.send("<h1>main page</h1>");
})


app.use("/add-product",(req,res,next)=>{
    res.send("<h1>Product</h1>");
})







app.listen(3000)
