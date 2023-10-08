import { Request, Response } from "express";
import pgp from "pg-promise";
import dotenv from "dotenv";
dotenv.config();

const connection = {
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
};
const db = pgp()(connection);

export class SizeQueries {
    async getAllSizes(req: Request, res: Response) {
        try {
          const allSizes = await db.manyOrNone("SELECT * FROM size");
          return res.json(allSizes);
        } catch (error) {
          console.error(error);
          return res.status(500).json({ error: "An error occurred while fetching sizes." });
        }
      }

      async getSizeById(req: Request, res: Response, id: string) {
        try {
          const Size = await db.one(`SELECT * FROM size WHERE id = ${id}`);
          return res.json(Size);
        } catch (error) {
          console.error(error);
          return res.status(500).json({ error: "An error occurred while fetching a size." });
        }
      }
}