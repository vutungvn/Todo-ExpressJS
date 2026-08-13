import express from "express";
import dotenv from "dotenv";
import categoryRoutes from "./routes/category.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
console.log("PORT", process.env.PORT);

app.use(express.json());

// Route đăng ký API
app.use("/api/categories", categoryRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
