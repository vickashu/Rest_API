const mongoose=require("mongoose");

// db connectivity
mongoose.connect("mongodb://127.0.0.1:27017/myshop")
.then(()=>console.log("Database is connected"))
.catch((error)=>console.log(error));
