const userSchema = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;


createUser= async (user)=>{
    
    const hash = await bcrypt.hashSync(user.password, saltRounds);

    try{
        const newUser = new userSchema({
            user_name:user.user_name,
            password:hash,
        });
        const result=await newUser.save();

        // console.log("result for new user",result);
        if(result)
        return true;
        else 
        return false;
    }
    catch(err){
    console.log(err);
    return false
    };
  
    
}


const signUp= async (req,res)=>{

    let existing=await userSchema.find({
        user_name:req.body.user_name,
     });

    // console.log("existing user =",existing);

    if(existing.length>0)
    {
    res.json(false);
    }
    else
    {
    var result=await createUser(req.body);
    console.log("User created status is",result);
    if(result)
    res.json(true);
    else
    res.status(400).json(false);
    }
}


module.exports = {
 signUp:signUp,
} 