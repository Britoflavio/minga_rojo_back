import {Schema,Types,model} from "mongoose";

let schema = new Schema({
  author_id:{
    type:Types.ObjectId,
    ref: "authros",
    requiered:true,
  },
  company_id:{
    type:Types.ObjectId,
    ref:"companies"
  },
  title:{type:String,requiered:true},
  cover_photo:{type:String,requiered:true},
  description:{type:String,requiered:true},
  category_id:{
    type:Types.ObjectId
  }
},{
  timestamps:true
})
let collection= "mangas"
let Manga = model(collection,schema)
export default Manga