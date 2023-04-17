const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
    res.send(`<html><h1>Add Product</h1><form action='/product' method="POST"><input type='text' name='title'></input><input type='text' name='size'></input><button type='submit'>Add</button></form></html>`);
})

app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req,res,next)=>{
    res.send(`<h1>Welcome to Express Js</h1>`);
   });

app.listen(3000);