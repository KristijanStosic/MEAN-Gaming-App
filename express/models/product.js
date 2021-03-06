const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Mongodb schema for user collection 
const productSchema = new Schema({
    title:String,
    price:Number,
    stock:Number,
    url:String,
    brand:String,
    category:String,
    feature:String,
    description:String,
    soldBy:String
})

module.exports = mongoose.model('product', productSchema)