import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    Name: {
        type: String, 
        required: true,
    },
    
    
    email : { type: String, require: true, index:true, unique:true,sparse:true},
    Password: {
        type: String, 
        required: true,
    },

    
    role:{
        type: String,
        enum: ["visitor","admin"],
        default: "visitor"

    },

    createdAt: {
        type: Date, 
        required: false, 
        default:new Date(),
    
    },
   
} );


const UserModel = model('User', UserSchema);
export default UserModel;