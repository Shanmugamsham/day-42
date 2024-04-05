const mongoose=require("mongoose")
const shortid=require("shortid")

const singin=new mongoose.Schema({
    email:{ type: String, required: true, unique: true },
    firstname:{type:String, required: true},
    lastname:{type:String, required: true},
    password:{type: String, require: true, unique: true}
},{timestamps:true})


const shortingurl=new mongoose.Schema({
    full:{type:String,require:true},
    short:{type:String,require:true,default:shortid.generate},
    
})










const signinmoderl=mongoose.model("signindata",singin)
const shorturl=mongoose.model("url",shortingurl)









module.exports={
signinmoderl:signinmoderl,
shorturl:shorturl}