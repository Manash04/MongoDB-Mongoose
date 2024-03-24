import mongoose from "mongoose"

const subTodoSchema = new mongoose.Schema(
  {
    content:{
      type:string,
      required:true
    },
    completed:{
      type:Boolean,
      default:false
    },
    createdBy:{
      type:mongoose.Schema.Types.ObjectId,
      req:"User"
    },
    subTodos:[
      {
        type:mongoose.Schema.Types.ObjectId,
        req:"SubTodo"
      }
    ]
  },{timeStamps:true})

export const Todo = mongoose.model("Todo", todoSchema)


