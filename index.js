const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('hello world');
})
//to get single product;
app.get('/products/:id',(req,res)=>{
    res.send('<h1>single product</h1>')
})

const PORT = process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log('server is running on this port',PORT);
})