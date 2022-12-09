const express=require('express');
const mongoose=require('mongoose');
const PORT=2424;;
const app=express();

//setting app engine

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.json());

app.use(express.urlencoded({extended:false}));

// db connection

const connectionString="mongodb+srv://rutuja:rutuja@cluster0.51b8dw5.mongodb.net/test";
mongoose
  .connect(connectionString)
  .then(res=> console.log("Database connected"))
  .catch(err=> console.log("Error : "+err))
//db end 
const mainRoutes=require('./index');
app.use("/",mainRoutes);
app.listen(PORT,(err)=>{
    if(err) throw err;
    else console.log(`Work On ${PORT}`)
})
