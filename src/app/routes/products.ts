import { Router } from "express";
import multer from "multer";

import { create } from "../useCases/products/create";

const productsRouter = Router();
const multerConfig = multer();

productsRouter.post("/products", multerConfig.single("file"), create);

export { productsRouter };
