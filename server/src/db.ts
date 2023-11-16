import pgp from "pg-promise";
import dotenv from "dotenv";
dotenv.config();

const connection = {
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
};

export const db = pgp()(connection);