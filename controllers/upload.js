const questionStatusSchema = require('../models/questionStatus');

const upload= async (req,res)=>{

    console.log("got a upload request");
    try{
        const result=await questionStatusSchema.updateOne({
            user_id:req.body.user_id,
        },
        {
            $set: { questions : req.body.payLoad } 
        },
        {
            
            upsert: true

        })
        
        if(result)
        res.json(true);
    }
    catch(err){
        console.log(err);
        res.status(400).json(false);
    }
}

module.exports = {
 upload:upload,
} 