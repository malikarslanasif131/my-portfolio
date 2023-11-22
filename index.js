import express from "express";
import colors from "colors";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path"; // Import the 'path' module

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from the 'uploads' directory
// app.use(express.static(path.join(__dirname, "./portfolio-client/build")));
//import route
import contactRoutes from "./routes/contactRoutes.js";
import infoRoutes from "./routes/infoRoutes.js";

//config connect
dotenv.config();
// connectDB();

app.use(cors());
app.use(express.json());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(express.static(path.join(__dirname, "./portfolio-client/build")));
// Define a route for the server

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./portfolio-client/build/index.html"));
});

app.use("/api/contact", contactRoutes);
app.use("/api/saveClientInfo", infoRoutes);

app.get("/api/test", (req, res) => {
  res.send("Hello from the Express server and test middleware!");
});

const port = process.env.PORT || 8080;
// Start the server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`.bgCyan.white);
  });
});
