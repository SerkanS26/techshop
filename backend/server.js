import express from "express";
import dotenv from "dotenv";
dotenv.config();

//dtabase connection
import connectDB from "./config/db.js";

//middleware
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

//Routes
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const PORT = process.env.PORT || 5000;

//database connection
connectDB();

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

//not found middleware
app.use(notFound);

//error handler middleware
app.use(errorHandler);

app.listen(PORT, console.log(`Server running on port ${PORT}`));
