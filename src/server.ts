import express from "express";
import { productsRouter } from "./app/routes/products";

const app = express();

app.use(productsRouter);

app.listen(3000, () => console.log("Server is running 🚀"));
