const express = require('express');
const app = express();
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Jay:Shunanum7_@cluster0.ehurc.mongodb.net/store?retryWrites=true&w=majority')
    .then(() =>console.log('DBConnection, successful!'))
    .catch((err)=>{console.log(err)});

app.listen(5000, () =>{
    console.log('backend server is running')
})