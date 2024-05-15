const express =require('express');
const app = express();
const PORT =9000;
const mongoose = require('mongoose');

let MONGODB_URL="mongodb://localhost:27017/url_shortener"
mongoose.connect(MONGODB_URL)
.then(()=>{
    console.log('Connected to Database');
})
.catch((err)=>{
    console.log(err.message);
})

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
