import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI;

console.log("🔍 Checking MONGODB_URI...");

if (!uri) {
    console.error("❌ ERROR: MONGODB_URI is missing in your .env file!");
    console.error("Please add it like this:");
    console.error("MONGODB_URI=mongodb://cse341_db:@ac-brrsyiu-shard-00-00.9jcefxt.mongodb.net:27017,...");
    process.exit(1); // Stop the app if no URI
} else {
    console.log("✅ MONGODB_URI found!");
}

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let dbConnection = null;

export const connectDB = async () => {
    try {
        console.log("🔄 Attempting to connect to MongoDB...");
        await client.connect();
        dbConnection = client.db("cse341");
        console.log("✅ Successfully connected to MongoDB!");
        return dbConnection;
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:");
        console.error(error.message);
        if (error.message.includes("bad auth")) {
            console.error("💡 Hint: Check your username and password in the connection string.");
        }
        throw error;
    }
};

export const getDB = () => {
    if (!dbConnection) {
        throw new Error("Database not connected. Call connectDB() first.");
    }
    return dbConnection;
};