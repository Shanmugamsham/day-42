const jwt=require("jsonwebtoken")
const generatetoken=(user)=>jwt.sign({id:user._id},process.env.secretkey,{expiresIn: "5m"})
module.exports=generatetoken