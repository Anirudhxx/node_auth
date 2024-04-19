const mongoose = require('mongoose');

// MongoDB URI
const username = 'Anirudh';
const password = 'lovebhatt26';
const dbName = 'noUser'; // Replace 'your_database_name' with your actual database name
const clusterName = 'cluster0'; // Replace 'cluster0' with your actual cluster name
const MONGO_URI = `mongodb+srv://${encodeURIComponent(username)}:${encodeURIComponent(password)}@${clusterName}.cchmqxi.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;

// Connect to the database
const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Mongoose connected to MongoDB Atlas');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDb;
