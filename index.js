import express from "express";
import connectDB from "./config/db.js";
import "dotenv/config";
import productRoutes from "./routes/productRoutes.js";

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

// product routes
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Backend is running" });
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
};

startServer();
