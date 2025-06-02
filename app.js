
const bodyParser = require('body-parser');
const express = require('express');
const app = express()
const path = require("path")

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded());




app.use(shopRoutes)
app.use("/admin",adminRoutes)

app.use((req,res,next)=>{    //catch all 
    res.status(404).sendFile(path.join(__dirname,'views','not-found.html'))

})




app.listen(3000)
