'use strict'
const mongoose=require('mongoose'); 

const BookSchema = new mongoose.Schema({
    nameBook: {type:String},
    bookImg: {type:String},
    bookDescription: {type:String},
});

module.exports=BookSchema;