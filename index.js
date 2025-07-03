const express=require('express');
const app=express();
const mongoose=require('mongoose');
const path=require('path');
const router=require('./Routes/route');
app.use(express.urlencoded({extended:false}));
const port=8000
mongoose.connect('mongodb+srv://soumyaseeree:kadali90@cluster0.mg0xti8.mongodb.net/order_master?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('MongoDb Connected Successfully');
}).catch(err=>console.log(err))
app.set('view engine','ejs');
app.set('views',path.resolve('./Views'));
app.use('/',router);
app.listen(port,()=>{
    console.log(`Server is running on the port ${port}`);
})
