const mongoose=require("mongoose");

// schema(table ka structure)
const SubcategorySchema=new mongoose.Schema({
    name:{
    type:String,
    unique:true,
    minlength:3
    }
})

const Subcategory=new mongoose.model("Subcategory",SubcategorySchema)
module.exports=Subcategory;