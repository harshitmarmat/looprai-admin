const mongoose = require("mongoose");

const connectDb = async () => {
  
  const res = await mongoose.connect(
    process.env.DATABASE_URL
  );
};

module.exports = { connectDb };
