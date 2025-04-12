const mongoose = require('mongoose');
const dotenv = require('dotenv')

//load env configuration
dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true, // keep this
      // Removed useNewUrlParser as it's deprecated
    });

    console.log(`MongoDB Connected: `);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    // Optional: you can skip exit during dev to avoid nodemon crashes
    // process.exit(1);
  }
};

module.exports = connectDB;
