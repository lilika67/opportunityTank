import { Schema, model } from "mongoose";

const testmonialSchema = new Schema({
  testimony:{
    type: String,
    required: true,
  },
  Date: {
    type: Date, 
    required: false, 
    default:new Date(),

},
})

let testmonialModel = model('testimony',testmonialSchema)

export default testmonialModel;