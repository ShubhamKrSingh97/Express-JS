const express = require('express');
const app = express();
//importing custom module
const adminRoutes = require('./routes/admin');  
const shopRoutes = require('./routes/shop');
const contactRoutes=require('./routes/contact');
const successRoutes=require('./routes/success');
const path=require('path');


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));//for sending static files(CSS in this case)

app.use('/admin', adminRoutes); //admin route filtering
app.use('/shop', shopRoutes); //shop route filtering
app.use(contactRoutes);
app.use(successRoutes);
//To handle invalid routes
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'views','error.html'));
})
app.listen(3000);