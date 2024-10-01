import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { getOrderProductsByDate, getOrdersByDate } from "./lib/helpers";
import * as yup from "yup";
import { dateQuerySchema } from "./lib/validation";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/api/orders", async (req: Request, res: Response) => {
  try {
    const validatedQuery = await dateQuerySchema.validate(req.query);
    const orders = getOrdersByDate(validatedQuery.date as string);

    return res.status(200).json({ orders });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: "An unexpected error occurred" });
  }
});

app.get("/api/products", async (req: Request, res: Response) => {
  try {
    const validatedQuery = await dateQuerySchema.validate(req.query);
    const products = getOrderProductsByDate(validatedQuery.date as string);

    return res.status(200).json({ products });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: "An unexpected error occurred" });
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
