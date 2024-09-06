import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
    console.log(process.env.MONGODB_URI);
  mongoose.set("strictQuery", true);
  // if the db alrady connected then don't connect again
  if (connected) {
    console.log("MongoDB is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI);
      connected = true;
      console.log("mongodb connected");
  } catch (error) {
    console.error("MongoDB connection failed: ", error);
  }
};

export default connectDB;