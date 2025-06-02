
const bodyParser = require('body-parser');
const express = require('express');
const app = express()

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded());




app.use(shopRoutes)
app.use(adminRoutes)






app.listen(3000)
