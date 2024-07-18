import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';

const applicationSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true
  },
  applicantName: {
    type: String,
    required: true
  },
  applicantEmail: {
    type: String,
    required: true
  },
  resume: {
    type: String,
    required: true
  },
  coverLetter: {
    type: String,
    required: true
  },
  appliedAt: {
    type: Date,
    default: Date.now
  }
});

const jobInfoModel = model('application',applicationSchema );

export default jobInfoModel;
