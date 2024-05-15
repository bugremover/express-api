const mongoose=require("mongoose");

const URLSchema=new mongoose.Schema({
    "fullurl":{type:String,required:true,},
    "shorturl":{type:String,required:true,unique:true},
    "clicks":{type:Number,default:0},
    
},
{"timestamps":true}
);

const URL=mongoose.model("urls",URLSchema);
module.exports=URL;