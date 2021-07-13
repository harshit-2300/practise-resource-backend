const express = require('express');
const app=express();
var cors = require('cors')

const mongoose = require('mongoose');
const uri = process.env.DATABASE_URL;
mongoose.connect(uri, {  useNewUrlParser: true,  useUnifiedTopology: true})
.then(() => {  console.log("MongoDB Connected…")})
.catch(err => console.log(err))

app.use(cors());

app.use(express.json({ extended: false }));
 


const Sheets = require('./models/Sheets');

const Questions = require('./models/Questions');

const HitCount = require('./models/HitCount');

    Sheets.find(function (err, sheets) {
        if (err) return console.error(err);
        console.log(sheets);
    })

    app.get('/',async(req,res)=>{
        res.send("It is working");
    })

    app.get('/sheetNames', async (req, res) => {
        console.log("got a sheetNames request");
        let names = await Sheets.find({  });
        res.json(names);
        console.log(names);
        
    });  

    app.get('/hitCount', async (req, res) => {
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
    });  
  
 
    app.post('/Questions', async (req, res) => {
        console.log("got a questions request==",req.body);
        curr=req.body.currentSheet;
        let ques = await Questions.find({'Sheet_name':curr});
        res.json(ques);
        console.log(ques);
        
    });  



app.listen(process.env.PORT||3001, ()=> {
    console.log(`app is running on port ${process.env.PORT}`)
})


  





