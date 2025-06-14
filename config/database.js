const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file
// Ensure that the .env file is in the root directory of your project
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ExpressData'; // Default to local MongoDB if MONGO_URI is not set
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit the process with failure
    }
};
module.exports = connectDB;