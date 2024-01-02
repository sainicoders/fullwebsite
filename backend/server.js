const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const express=require('express');
const jwt=require('jsonwebtoken');
const port=3001;
const cors=require('cors');
const app=express();

app.use(cors());
app.use(bodyParser.json());

//conection of mongodb 

mongoose.connect('mongodb://127.0.0.1:27017/OnlineShopping').then(()=>{
    console.log('database is connected');
    app.listen(port,()=>{
        console.log(`server is running on port ${port}`);
    });
})
.catch((error)=>{
    console.error('dataase connection feild!',error);
});

app.use(bodyParser.json());


//create model of Signup

const User= mongoose.model('User',{
    name:String,
    email:String,
    password:String,
    Key:String
});

//create model of product
const product = mongoose.model('product', {
    name: String,
    price: Number,
    category: String,
    description: String
});
//prduct api
app.post('/product',async(req,res)=>{
    const{name,price,category,description}=req.body;
    try{
        const products= new product({name,price,category,description});
        await products.save();
        res.json({message:"product successfully"});

    }
    catch(error){
        console.error(error)
         res.status(400).json({message:"Error during Post data on product"})
    }

})

//get product api
app.get("/product/data",async(req,res)=>{
    try{
        const products=await product.find();
        res.json({products});
    }
    catch(error){
        console.error('error during fetch data',error);
        res.status(500).json({message:'innterwal  error'});

    }
});

// middleware for authentcation 
const authenticateToken= (req,res,next)=>{
    const token =req.header('Authorization');
    if(!token) return res.status(401).json({message:'Access is Denied No token provided.'});

    jwt.verify(token.split('')[1],'your_secret_key',(err,)=>{
        if(err) return res.status(403).json({message:'Invalid Token'})
        req.user=user;
    next();

    });
};

//Signup post API

app.post('/Signup', async(req,res)=>
{
const{name,email,password,Key}=req.body;
try{
const users=new User ({name,email,password,Key});
await users.save();
res.json({ Key:users.key,message:"Signup successFull "});
}
catch (error){
console.error(error);
res.status(500).json({messagge:"Error during Post data on signup"});
}
})


// Login api 
app.post('/login',async (req,res)=>{
    const {email,password}=req.body;
    try{
const user=await User.findOne({email});
if(!user || user.password!==password){
return res.status(401).json({Messge:"Invalid credential "})
    } 

 else{

// Gentare JWT Token 

     const token=jwt.sign({userId:User._id,email:User.email},'your sectre_key',{expiresIn:'1h'});
     return res.status(201).json({Message:"Login Succesfull",token});

    }
}
    catch (error){
    console.error(error);
    res.status(500).json({Message:"Error during login"});
    }
});

// Protect Route Examplle 
app.get('/protected-route',authenticateToken,(req,res)=>{
    res.json({Message:"This is Protected Rpute ",user:req.user});
});