import { Request, Response } from "express";
import pgp from "pg-promise";
import dotenv from "dotenv";
dotenv.config();

const connection = {
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
};
const db = pgp()(connection);

export class LidQueries {
    async getAllLids(req: Request, res: Response) {
        try {
          const allLids = await db.manyOrNone("SELECT * FROM lid");
          return res.json(allLids);
        } catch (error) {
          console.error(error);
          return res.status(500).json({ error: "An error occurred while fetching lids." });
        }
      }

      async getLidById(req: Request, res: Response, id: string) {
        try {
          const Lid = await db.one(`SELECT * FROM lid WHERE id = ${id}`);
          return res.json(Lid);
        } catch (error) {
          console.error(error);
          return res.status(500).json({ error: "An error occurred while fetching a lid." });
        }
      }
}