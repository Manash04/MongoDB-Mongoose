import mangoose from 'mongoose';

const categorySchema = new mangoose.Schema({
  name:{
    type:String,
    required:true, 
  }
},{timestamps:true}

export const Category = mangoose.model("Category",categorySchema);