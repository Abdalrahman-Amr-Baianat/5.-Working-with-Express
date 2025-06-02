
const bodyParser = require('body-parser');
const express = require('express');
const app = express()

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded());




app.use(shopRoutes)
app.use("/admin",adminRoutes)

app.use((req,res,next)=>{    //catch all 
    res.status(404).send("<h1>PAGE NOT FOUND 404")

})




app.listen(3000)
