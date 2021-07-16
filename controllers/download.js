const questionStatusSchema = require('../models/questionStatus');

const download= async (req,res)=>{

    console.log("got a download request");
    try{
        const result= await questionStatusSchema.findOne({'user_id':req.body.user_id});
        res.json(result.questions);
        console.log(result);
    }
    catch(err){
        console.log(err);
        res.status(400).json([]);
    }
}

module.exports = {
 download:download,
} 