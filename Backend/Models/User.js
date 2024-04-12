const {Schema, model} = require('../connection');
const userSchema = new Schema({
    fName:String,
    lName:String,
    email:String,
    phone:String,
    course:String,
    semester:String,
    password:String,
    cpassword:String
        
})