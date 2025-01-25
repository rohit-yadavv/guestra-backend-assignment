import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`DB connected, HOST: ${connection.connection.host}`);
  } catch (error) {
    console.log("DB Connection FAILED", error);
    process.exit(1);
  }
};

export default connectDb;
