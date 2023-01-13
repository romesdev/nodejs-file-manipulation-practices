import { Request, Response } from "express";

import { Readable } from "stream";
import readLine from "readline";
import { client } from "../../../database/prisma-client";
import { ProductBody } from "../../dtos/products/create-product-body";
import { ValidationError, validate } from "class-validator";

export async function create(request: Request, response: Response) {
  const { file } = request;

  const products: ProductBody[] = [];
  const errors: ValidationError[][] = [];

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

    const product = new ProductBody();

    product.code_bar = productLineSplit[0];
    product.description = productLineSplit[1];
    product.price = Number(productLineSplit[2]);
    product.quantity = Number(productLineSplit[3]);

    const productError = await validate(product);

    if (productError.length > 0) {
      errors.push(productError);
    } else {
      products.push(product);
    }
  }

  if (errors.length > 0) return response.status(400).send(errors);

  try {
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
  } catch (error) {
    return response.sendStatus(500);
  }
}
