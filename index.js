// IMPORT SECTION 
const express = require("express");
const app = express();
const mongoose = require("mongoose");

// DB CONNECTION 
mongoose.connect(
    "mongodb+srv://shop:cvwHaK9plhgL99cQ@cluster0.f16pe.mongodb.net/?retryWrites=true&w=majority"
  );
  mongoose.connection.on("connected", () => {
    console.log("DB connected");
  });
  mongoose.connection.on("error", (err) => {
    console.log("mongodb failed with", err);
  });
// IMPORT ROUTES 
const productRoutes = require("./routes/product");
const categoryRoutes = require("./routes/category");

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES MIDDLEWARE
app.use("/products", productRoutes);
app.use("/category", categoryRoutes);

// SERVER LISTENING 
const port = 8000;
app.listen(port, () => console.log(`SERVER LISTENING ON PORT ${port}`));