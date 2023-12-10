// models/about.js
import mongoose from "mongoose";

const clientInfoSchema = new mongoose.Schema(
  {
    dateTime: {
      type: String,
    },
    ipAddress: {
      type: String,
    },
    userAgent: {
      type: String,
    },
    platform: {
      type: String,
    },
    screenWidth: {
      type: String,
    },
    screenHeight: {
      type: String,
    },
  },
  { timestamps: true }
);

// Create a model based on the schema
const ClientInfo = mongoose.model("ClientInfo", clientInfoSchema);

export default ClientInfo;
