const questionSchema = require('../models/Questions');

const Questions= async (req,res)=>{

        console.log("got a questions request==",req.body);
        curr=req.body.currentSheet;
        let ques = await questionSchema.find({'Sheet_name':curr});
        res.json(ques);
        // console.log(ques);
}

module.exports = {
 Questions:Questions,
} 