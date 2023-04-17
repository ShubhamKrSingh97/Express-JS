const express = require('express');
const app = express();
//importing custom module
const adminRoutes = require('./routes/admin');  
const shopRoutes = require('./routes/shop');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes); //admin route filtering
app.use('/shop', shopRoutes); //shop route filtering

//To handle invalid routes
app.use((req, res, next) => {
    res.status(404).send(`<h2>Page Not Found</h2>`);
})
app.listen(3000);