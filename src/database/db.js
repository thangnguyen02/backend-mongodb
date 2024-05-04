import mongoose from "mongoose";
const ConnectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.BASE_URL_MONGO);
    console.log("Connect DB Successfully");
    return connection;
  } catch (error) {
    console.log("Connect DB Fail");
  }
};

export default ConnectDB;
