
import mongoose from "mongoose"

const todoSchema = new mongoose.Schema(
  {
content:{
  type:String,
  required:true
},
    compplete:{
      type:Boolean,
      default:false
    },
    createdBy:{
      type:mongoose.Schema.Types.ObjectId,
      req:"User"
    }
},{timestamps:true})



export const SubTodo = moongoose.model("SubTodo",subTodoSchema)