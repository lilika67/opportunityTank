import { Schema, model } from 'mongoose';

const jobSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  company: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  salary: {
    type: String,
    required: true
  },
  publishedDate: {
    type: Date,
    required: false,
    default: new Date(),
  },
  
  description: {
    type: String,
    required: true,
    trim: true,
  },
  
  // image: {
  //   type: String,
  //   default: "default.png",
  //   trim: true
  // },
 
});

const JobModel = model('job', jobSchema);

export default  JobModel;
