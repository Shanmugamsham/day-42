const router=require("express").Router()
const moderls=require("./database")
const generatetoke=require("./utilis/index")


router.get("/", async (req,res)=>{
    try {
        const shorturl= await moderls.shorturl.find()
        await res.status(200).json({shorturl})


    } catch (error) {
        res.status(400).json({message:"try again"})
    }
})
router.post("/signin", async(req,res,next)=>{
    try {
        const {email}=req.body
        const user= await moderls.signinmoderl.findOne({email})
        if(!user){
                     new_user = new  moderls.signinmoderl(req.body);
                    await new_user.save()
                     return res.status(200).json({messege:"your registration is confirmd"})
         
        }

        else{
          return res.status(404).json({messege:"user mail already taken"})

        }


    } catch (error) {
        res.json({
            success:false,
            messege:"enter valued data"
        })
     
    }
    
  })



  router.post("/login",async(req,res)=>{

    const {email}=req.body
    console.log(email);
        const user= await moderls.signinmoderl.findOne({email})
        if(!user){
            return res.status(404).send("messege: we can't find your id ")

        }
        const token=generatetoke(user)
         res.cookie(token)
        res.send("YOUR PAGE LOGIN")
         
  })

  router.post("/shorturl",(req,res,body)=>{
    try {
        moderls.shorturl.create({full:req.body.url})
        res.redirect("/")

    } catch (error) {
        res.status(400).send("messege: eror")
    }
})    





  module.exports=router