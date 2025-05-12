//require mongoose

//creation du model
const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    email:{
            type:String,
            required:true,
            unique:true,
        },
    password:{
        type:String,
        required:true,

    },
    phone:{
        type:Number,
       
    },
    isAdmin:{

        type:Boolean,
        default:false,
    }
   
},
{
    timestamps:true,
    }
)
 //instanse
// const User = mongoose.model("user",userSchema);
// module.exports= User;

const User = mongoose.model("user",userSchema);
module.exports=User;