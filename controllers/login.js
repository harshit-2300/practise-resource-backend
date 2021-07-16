const userSchema = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;


const login= async (req,res)=>{

    let existing=await userSchema.findOne({
        user_name:req.body.user_name,
     });

    console.log("existing user login =",existing);

    if(existing)
        res.json(await bcrypt.compareSync(req.body.password,existing.password)); // true ohr false checks the has
    else
        res.json(false); 
    

}


module.exports = {
 login:login,
} 