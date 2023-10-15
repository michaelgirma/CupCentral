var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import pgp from "pg-promise";
import dotenv from "dotenv";
dotenv.config();
const connection = {
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
};
const db = pgp()(connection);
export class CupQueries {
    getAllCups(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allCups = yield db.manyOrNone("SELECT * FROM cup");
                return res.json(allCups);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ error: "An error occurred while fetching Cups." });
            }
        });
    }
    getCupById(req, res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Cup = yield db.one(`SELECT * FROM cup WHERE id = ${id}`);
                return res.json(Cup);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ error: "An error occurred while fetching a Cup." });
            }
        });
    }
    createCup(req, res, data) {
        const cup = data;
        db.none("INSERT INTO cup (title, size_id, color_id, lid, image) VALUES ($1, $2, $3, $4, $5)", [cup.title, cup.size_id, cup.color_id, cup.lid, cup.image])
            .then(() => {
            console.log("Cup added");
        })
            .catch((error) => {
            console.error(error);
        });
    }
    updateCupById(req, res, data, id) {
        const cup = data;
        db.none("UPDATE cup SET title = $1, size_id = $2, color_id = $3, lid = $4 WHERE id = $5", [cup.title, cup.size_id, cup.color_id, cup.lid, id])
            .then(() => {
            console.log("Cup Updated");
        })
            .catch((error) => {
            console.error(error);
        });
    }
    deleteCupById(req, res, id) {
        db.none("DELETE FROM cup WHERE id = $1", [id])
            .then(() => {
            console.log("Hotel deleted");
        })
            .catch((error) => {
            console.error(error);
        });
    }
}
