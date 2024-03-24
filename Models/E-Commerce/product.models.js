import mangoose from 'mongoose';

const productSchema = new mangoose.Schema({
name:{
  type:String,
  required:true,
},
  description:{
    type:String,
    required:true,
  },
  price:{
    type:number,
    required:true,
    min:0
  },
  productImage:{
    type:String
  },
  stock:{
    default:0,
    type:number
  },
  category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Category ",
    required:true
  },
  owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
},{timestamps:true})

export const Product = mangoose.model("Product", productSchema) 