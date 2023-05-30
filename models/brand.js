const mongoose=require("mongoose");

// schema(table ka structure)
const BrandSchema=new mongoose.Schema({
    name:{
    type:String,
    unique:true,
    minlength:3
    }
})

const Brand=new mongoose.model("Brand",BrandSchema)
module.exports=Brand;