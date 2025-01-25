import express from "express";
import dotenv from "dotenv";
import categoryRouter from "./routes/CategoryRoute.js";
import subCategoryRouter from "./routes/SubCategoryRoute.js";
import itemRouter from "./routes/ItemRoute.js";
import connectDb from "./config/db.js";
// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
connectDb();

// Middlewares
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send(
    `<h1>Welcome to Menu Management server</h1>
     <p>Developed by <b>Rohit</b></p>`
  );
});

// API routes
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/subcategories", subCategoryRouter);
app.use("/api/v1/items", itemRouter);

// Start the server
app.listen(PORT, () => {
  console.log("Server running");
});
