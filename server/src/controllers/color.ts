import { Request, Response } from "express";
import pgp from "pg-promise";
import dotenv from "dotenv";
dotenv.config();

const connection = {
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
};
const db = pgp()(connection);

export class ColorQueries {
    async getAllColors(req: Request, res: Response) {
        try {
          const allColors = await db.manyOrNone("SELECT * FROM color");
          return res.json(allColors);
        } catch (error) {
          console.error(error);
          return res.status(500).json({ error: "An error occurred while fetching colors." });
        }
      }

      async getColorById(req: Request, res: Response, id: string) {
        try {
          const Color = await db.one(`SELECT * FROM color WHERE id = ${id}`);
          return res.json(Color);
        } catch (error) {
          console.error(error);
          return res.status(500).json({ error: "An error occurred while fetching a color." });
        }
      }
}

