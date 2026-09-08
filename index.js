import express from "express";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const port = 4000;

app.use(express.json());

// routes
app.use("/api", productRoutes);
app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello Backend");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
