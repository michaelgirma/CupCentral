import { Request, Response } from "express";
import pgp from "pg-promise";
import dotenv from "dotenv";
dotenv.config();

const connection = {
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
};
const db = pgp()(connection);

export class CupQueries {
    async getAllCups(req: Request, res: Response) {
        try {
          const allCups = await db.manyOrNone("SELECT * FROM cup");
          return res.json(allCups);
        } catch (error) {
          console.error(error);
          return res.status(500).json({ error: "An error occurred while fetching Cups." });
        }
      }

      async getCupById(req: Request, res: Response, id: string) {
        try {
          const Cup = await db.one(`SELECT * FROM cup WHERE id = ${id}`);
          return res.json(Cup);
        } catch (error) {
          console.error(error);
          return res.status(500).json({ error: "An error occurred while fetching a Cup." });
        }
      }
}