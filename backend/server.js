import express from "express";
import cookieParser from "cookie-parser";

//dotenv
import dotenv from "dotenv";
dotenv.config();

//dtabase connection
import connectDB from "./config/db.js";

//middleware
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// Routes
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const PORT = process.env.PORT || 5000;

//database connection
connectDB();

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cookie parser middleware
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is running...");
});

//Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);

//not found middleware
app.use(notFound);

//error handler middleware
app.use(errorHandler);

app.listen(PORT, console.log(`Server running on port ${PORT}`));
