import mongoose from "mongoose";
const doctorSchema =new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  salary:{
    type:Number,
    required:true,
    min:0
  },
  qualification:{
    type:String,
    required:true
  },
  experienceInYears:{
    type:Number,
    required:true,
    min:0
  },
  worksInHospitals:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Hospital"
    }
  ]
    
},{timestamps:true})
export const Doctor = mongoose.model("Doctor",doctorSchema)