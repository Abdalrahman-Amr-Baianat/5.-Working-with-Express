
const bodyParser = require('body-parser');
const express = require('express');
const app = express()
app.set("view engine" ,"pug"); // Defualt templating engine
app.set('views' , 'views');
const path = require("path")

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const { engine } = require('express-handlebars');

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname,'public'))) // To public Css file



app.use(shopRoutes)
app.use("/admin", adminData.routes)

app.use((req,res,next)=>{    //catch all 
    res.status(404).render('404')

})




app.listen(3000)
