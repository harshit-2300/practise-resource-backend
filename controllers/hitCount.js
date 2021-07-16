const HitCount = require('../models/hitCount');


const hitCount= async (req,res)=>{

       console.log("got a count request");
        try{
            const result=await HitCount.findByIdAndUpdate({_id:"60ed81334f2b5a9a1811c00a"},{
                $inc: { Count : 1 }
            },{
                useFindAndModify:false,
            })
            res.json(result.Count);
        }
        catch(err){
            console.log(err);
            res.json(0);
        }

}

module.exports = {
    hitCount:hitCount,

} 