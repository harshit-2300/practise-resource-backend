const sheetSchema = require('../models/Sheets');

const sheetNames= async (req,res)=>{

    console.log("got a sheetNames request");
        let names = await sheetSchema.find({  });
        res.json(names);
        console.log(names)
}

module.exports = {
 sheetNames:sheetNames,
} 