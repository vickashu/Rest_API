const mongoose=require("mongoose");

// schema(table ka structure)
const MaincategorySchema=new mongoose.Schema({
    name:{
    type:String,
    unique:true,
    minlength:3
    }
})

const Maincategory=new mongoose.model("Maincategory",MaincategorySchema)
module.exports=Maincategory;