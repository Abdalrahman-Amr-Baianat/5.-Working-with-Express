
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
    res.status(404).render('404' ,{pageTitle :"Page Not Found"})

})

//res.render('add-product' ,{pageTitle: 'Add product' ,path: '/admin/add-product'})


app.listen(3000)
