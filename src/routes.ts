import { Request, Response, Router, request } from "express";
import multer from "multer";
import { Readable } from "stream";
import readLine from "readline";
import { client } from "./database/prisma-client";

interface Product {
  code_bar: string;
  description: string;
  price: number;
  quantity: number;
}

const multerConfig = multer();

const router = Router();

router.post(
  "/products",
  multerConfig.single("file"),
  async (request: Request, response: Response) => {
    const { file } = request;

    const products: Product[] = [];

    const readableFile = new Readable();

    if (!file) throw Error("File is required");

    const { buffer } = file;

    readableFile.push(buffer);
    readableFile.push(null);

    const productsLine = readLine.createInterface({
      input: readableFile,
    });

    for await (let line of productsLine) {
      const productLineSplit = line.split(",");

      products.push({
        code_bar: productLineSplit[0],
        description: productLineSplit[1],
        price: Number(productLineSplit[2]),
        quantity: Number(productLineSplit[3]),
      });
    }

    for await (let { code_bar, description, price, quantity } of products) {
      await client.products.create({
        data: {
          code_bar,
          description,
          price,
          quantity,
        },
      });
    }

    return response.send(products);
  }
);

export { router };
