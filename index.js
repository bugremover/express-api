const express =require('express');
const app = express();
const PORT =10000;
const {connectDB}=require('./db');
connectDB();

const URL=require('./models/urlmodel');
app.get('/',(req,res)=>{
    res.send('Welcome to Oxynes');
});
app.get('/about',(req, res)=>{
    res.send('<h2>About Page 101</h2>');
});
app.get('/contact',(req, res)=>{
    res.json({
        name:'Oxynes',
        email:'XXXXXXXXXXXXXXXX',
        number: "91 9392301126"
    });
});
app.get('/help',(req, res)=>{
    res.send('Help Page');
});
app.get('/home',(req, res)=>{
    res.send('Home Page');
});
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
