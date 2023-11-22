// routes/about.js
import express from "express";
import { saveClientInfo } from "../controllers/infoController.js";

const router = express.Router();

router.post("/", saveClientInfo);

export default router;
