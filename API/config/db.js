const mongoose = require('mongoose');


// "mongodb+srv://husseinshaban1322:NENOo332003@cluster0.mongodb.net/TaskManagement?retryWrites=true&w=majority"
const url = "mongodb+srv://husseinshaban1322:NENOo332003@cluster0.wqs8erb.mongodb.net/TaskManagement?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async () => {
    try {
        await mongoose.connect(url)
        .then(console.log('MongoDB Connected'))
    } catch (err) {
        console.error('Database connection error:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
