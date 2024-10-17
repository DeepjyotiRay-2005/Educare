const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
});



module.exports = mongoose.model('users',userSchema);