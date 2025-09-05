const express = require('express');
const morgan = require('morgan');
const router = require('./route/routes');


const app = express();
app.use(morgan());


app.use('/',router);
//to get single product;

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log('the server is running on',PORT);
})