import {Schema,model,Types} from "mongoose"

let schema= new Schema({
  name:{type:String,requiered:true},
  last_name:{type:String,requiered:false},
  city:{type:String,requiered:true},
  country:{type:String,requiered:true},
  date:{type:Date} ,/* si no declaro requiered es flase */
  photo:{type:String,requiered:true},
  active:{type:Boolean,requiered:true},
  user_id:{type: Types.ObjectId, ref:"users",requiered:true} /* referenciar */
},{
  timestamps: true
})

let collection = "authors"

let Author =model(collection,schema)
export default Author