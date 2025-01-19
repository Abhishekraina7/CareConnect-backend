import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import adminRoutes from "./routes/adminRoutes.js";
import nurseRoutes from "./routes/nurseRoutes.js";
import patientRoutes from "./routes/patientRoutes.js";
import requestRoutes from "./routes/requestRoutes.js";
import connectDB from "./services/db.js";

dotenv.config(); 

const app = express();


connectDB();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
  origin: "http://localhost:8081",
  credentials: true,
}));


app.use("/api/nurses", nurseRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/requests', requestRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
