import mongoose from "mongoose"

let schema = new mongoose.Schema({
  email:{ type:String , required:true},
  password: {type:String,required:true},
  photo:{type:String,required:true},
  role:{type:Number,required:true},
  is_online:{type:Boolean,require:true},
  is_verified:{type:Boolean,requiered:true},
  verify_code:{type:String,requiered:true},
},{
  timestamps:true
})

let collection ="users" /* siempre debe ser en plural porque es un conjuto de recursos/datos/docs en lo posible minuscula*/

let User = mongoose.model(schema,collection)
export default User