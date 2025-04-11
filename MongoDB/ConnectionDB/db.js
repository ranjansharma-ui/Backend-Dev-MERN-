const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb+srv://ranjankumar4278907:OKX8ZpFie9Rs1bsO@mydb.6jx7ew6.mongodb.net/`, {
      useUnifiedTopology: true, // keep this
      // Removed useNewUrlParser as it's deprecated
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    // Optional: you can skip exit during dev to avoid nodemon crashes
    // process.exit(1);
  }
};

module.exports = connectDB;
