const express=require("express");
const Maincategory = require("./models/maincategory");
const Subcategory = require("./models/subcategory");
const Brand = require("./models/brand");
require("./db_connect");

const app=express();

// postman se request bhejte time undefined aa rha tha to usko resolve krne ke liye ye niche ke 2 line likhna pdega
  app.use(express.json());
  app.use(express.urlencoded({extended:true})); 


app.get("/",(req,res)=>{
   res.send("hello From server")
});


////----> Maincategory <-----////
// data dalne ke liye post ka use
app.post("/maincategory",async(req,res)=>{
    try{
        //console.log(req.body);
  var maincategory= await new Maincategory(req.body)
  maincategory.save()
  res.send({message:"Done"})
}
catch(error){
    res.send({message:error})
}
})

// data lene ke liye get ka use (if we use find().. then ye pura data dega)

app.get("/maincategory",async(req,res)=>{
    try{
     const data=await Maincategory.find();
     res.send(data);
    }
    catch(error){
        res.send({messgae:error})
    }
})

// for searching (by id)
app.get("/maincategory/:_id",async(req,res)=>{
    try{
        const data=await Maincategory.findOne({_id:req.params._id})
        res.send(data);
    }
    catch(error){
        res.send({message:error})
    }
})

///---> Put (for update)
 
app.put("/maincategory/:_id",async(req,res)=>{
    try{
        var data=await Maincategory.findOne({_id:req.params._id})
        data.name=req.body.name
        var result=await data.save()
        res.send({message:"Done"})
    }
    catch(error){
        res.send({message:error})
    }
})


// for deleting one
app.delete("/maincategory/:_id",async(req,res)=>{
    try{
        const data=await Maincategory.deleteOne({_id:req.params._id})
        res.send({message:"done"});
    }
    catch(error){
        res.send({message:error})
    }
})


/////----> Subcategory <----//////

app.post("/subcategory",async(req,res)=>{
    try{
        console.log(req.body);
  var subcategory= await new Subcategory(req.body)
  subcategory.save()
  res.send({message:"Done"})
}
catch(error){
    res.send({message:error})
}
})

// data lene ke liye get ka use (if we use find().. then ye pura data dega)

app.get("/subcategory",async(req,res)=>{
    try{
     const data=await Subcategory.find();
     res.send(data);
    }
    catch(error){
        res.send({messgae:error})
    }
})

// for searching (by id)
app.get("/subcategory/:_id",async(req,res)=>{
    try{
        const data=await Subcategory.findOne({_id:req.params._id})
        res.send(data);
    }
    catch(error){
        res.send({message:error})
    }
})

// for deleting one
app.delete("/subcategory/:_id",async(req,res)=>{
    try{
        const data=await Subcategory.deleteOne({_id:req.params._id})
        res.send({message:"done"});
    }
    catch(error){
        res.send({message:error})
    }
})



//////------> Brand <------///////


app.post("/brand",async(req,res)=>{
    try{
        console.log(req.body);
  var brand= await new Brand(req.body)
  brand.save()
  res.send({message:"Done"})
}
catch(error){
    res.send({message:error})
}
})

// data lene ke liye get ka use (if we use find().. then ye pura data dega)

app.get("/brand",async(req,res)=>{
    try{
     const data=await Brand.find();
     res.send(data);
    }
    catch(error){
        res.send({messgae:error})
    }
})

// for searching (by id)
app.get("/brand/:_id",async(req,res)=>{
    try{
        const data=await Brand.findOne({_id:req.params._id})
        res.send(data);
    }
    catch(error){
        res.send({message:error})
    }
})

// for deleting one
app.delete("/brand/:_id",async(req,res)=>{
    try{
        const data=await Brand.deleteOne({_id:req.params._id})
        res.send({message:"done"});
    }
    catch(error){
        res.send({message:error})
    }
})



app.listen(8000,()=>{
    console.log("Server is running")
})