import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        console.log("🔄 Connecting to MongoDB Atlas...");
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("✅ Successfully connected to MongoDB!");
    } catch (error) {
        console.error("❌ Connection Error:", error.message);
        process.exit(1);
    }
};

export default connectDB;