// routes/about.js
import express from "express";
import { downContact } from "../controllers/downloadController.js";

const router = express.Router();

router.post("/", downContact);

export default router;
