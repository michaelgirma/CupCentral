import { Request, Response } from "express";
import pgp from "pg-promise";
import {Cup} from "../models/cup";
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
    
      async createCup(req: Request, res: Response, data: any) {
        try {
          const input = data;
          if (input.size_id != input.lid[0]) {
            return res.status(400).json({ error: "Lid and Cup size do not match." });
          }
          const cup: Cup = input;
          const insertCup = await db.one(`INSERT INTO cup (title, size_id, color_id, lid) VALUES ($1, $2, $3, $4) RETURNING *`, [cup.title, cup.size_id, cup.color_id, cup.lid]);
          return res.json(insertCup);
        } catch(error) {
          console.error(error);
          return res.status(500).json({ error: "An error occurred while creating a Cup." });
        }
      }
      
      async updateCupById(req: Request, res: Response, data: any ) {
        try {
          const input = data;
          const id = input.id;
          const cup: Cup = input;
          const updateCup = await db.one(`UPDATE cup SET title = $1, size_id = $2, color_id = $3, lid = $4 WHERE id = ${id} RETURNING *`, [cup.title, cup.size_id, cup.color_id, cup.lid]);
          return res.json(updateCup);
        } catch(error) {
          console.error(error);
          return res.status(500).json({ error: "An error occurred while updating a Cup." });
        }
      }

      async deleteCupById(req: Request, res: Response, id: string) {
        try {
          const deleteCup = await db.one(`DELETE FROM cup WHERE id = ${id} RETURNING *`);
          return res.json(deleteCup);          
        } catch(error) {
          console.error(error);
          return res.status(500).json({ error: "An error occurred while deleting a Cup." });
        }
      }
}