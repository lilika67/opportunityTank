import  JobModel  from '../models/job.model.js';
import mongoose from 'mongoose';
import Application from '../models/jobInfo.model.js';
import multer from 'multer';

export  const addJob = async (req, res, next) => {
  try {
    const { title, company,description, location,salary } = req.body;


    let existJob = await JobModel.findOne({ title: title, company: company });

    if (existJob) {
      res.status(409).json({message:"This blog already exists and it can't be added twice"})
    } else {
      
      const addedJob = await JobModel.create({
        title: title,
        location: location,
        description: description,
        company: company,
        salary:salary
        
      });

      res.status(201).json({
        message: "Your Job was added successfully!",
        job: addedJob
      });
    }

  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};



export const viewJob = async (req, res, next) => {
  try{
    var alljobs = await JobModel.find({});
    res.status(200).json({
      alljobs
    });
  } catch (error) {
    console.log(error)
    res.status(500).send(error);
  }
}
  export const updateJob = async (req, res, next) => {
    try {
      
      const job = await JobModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  
      if (!job) {
        return res.status(404).json({ message: "job not found" });
      }
  
      res.status(200).json({
        message: "Job details was updated successfully",
        blog
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "An error occurred while updating the blog" });
    }
   
};
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads"); // Destination folder for storing uploaded files
  },
  filename: (req, file, callback) => {
    const filename = `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`;
    callback(null, filename); 
  }
});
// Multer upload configuration
const upload = multer({ storage: storage });


// Controller function to handle job application
export const applyJob = async (req, res) => {
  const { jobTitle, applicantName, applicantEmail } = req.body;

  

  try {
    let resume = req.file ? req.file.filename : "";
    let coverLetter = req.file ? req.file.filename : "";
    const application = new Application({
      jobTitle,
      applicantName,
      applicantEmail,
      resume,
      coverLetter,
    });

    await application.save();
    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};