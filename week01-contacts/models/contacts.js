import mongoose from 'mongoose';

// creating the mongoose schema
const contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    favoriteColor: {
        type: String,
        required: true,
        trim: true
    },
    birthday: {
        type: String,
        required: true,
        trim: true
    }
});

export default mongoose.model('Contact', contactSchema);