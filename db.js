const mongoose = require('mongoose');

let MONGODB_URL="mongodb://localhost:27017/url_shortener"


const connectDB=async() =>{
    await mongoose.connect(MONGODB_URL)
    .then(()=>{console.log('Connected to Database'); })
    .catch((err)=>{console.log(err.message);})
}
module.exports={connectDB};