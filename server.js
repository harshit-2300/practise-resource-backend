const express = require('express');
var cors = require('cors')


require('dotenv').config();
require('./config/db');
require('./controllers/signUp');
const {hitCount}=require('./controllers/hitCount');
const {sheetNames}=require('./controllers/sheetNames');
const {Questions}=require('./controllers/Questions'); 
const {signUp}=require('./controllers/signUp');
const {login}=require('./controllers/login');
const {download}=require('./controllers/download');
const {upload}=require('./controllers/upload');

const app=express();

app.use(cors());
app.use(express.json({ extended: false }));


app.get('/',async(req,res)=>res.send("It is working"));
app.get('/sheetNames', async (req, res) =>  sheetNames(req,res));  
app.get('/hitCount', async (req, res) => hitCount(req,res));  


app.post('/Questions', async (req, res) => Questions(req,res));  
app.post('/signUp', async (req, res) => signUp(req,res));
app.post('/login', async (req, res) => login(req,res));
app.post('/download', async (req, res) => download(req,res));
app.post('/upload', async (req, res) => upload(req,res));

const PORT=process.env.PORT||3001;
app.listen(PORT, ()=> console.log(`app is running on port ${PORT}`));



  





