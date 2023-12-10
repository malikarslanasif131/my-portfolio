// models/about.js
import mongoose from "mongoose";

const downloadSchema = new mongoose.Schema(
  {
    click: {
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

const Download = mongoose.model("Download", downloadSchema);

export default Download;
