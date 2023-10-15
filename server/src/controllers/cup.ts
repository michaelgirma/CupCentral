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
    
      createCup(req: Request, res: Response, data: any) {
        const cup: Cup = data;
        db.none("INSERT INTO cup (title, size_id, color_id, lid, image) VALUES ($1, $2, $3, $4, $5)", [cup.title, cup.size_id, cup.color_id, cup.lid, cup.image])
        .then(() => { 
          console.log("Cup added");
        })
        .catch((error) => {
          console.error(error);
        });
      }
      
      updateCupById(req: Request, res: Response, data: any, id: string ) {
        const cup: Cup = data;
        db.none("UPDATE cup SET title = $1, size_id = $2, color_id = $3, lid = $4, image = $5 WHERE id = $6", [cup.title, cup.size_id, cup.color_id, cup.lid, cup.image, id])
        .then(() => { 
          console.log("Cup Updated");
        })
        .catch((error) => {
          console.error(error);
        });
      }

      deleteCupById(req: Request, res: Response, id: string) {
        db.none("DELETE FROM cup WHERE id = $1", [id])
        .then(() => { 
          console.log("Hotel deleted");
        })
        .catch((error) => {
          console.error(error);
        });
      }

  
}