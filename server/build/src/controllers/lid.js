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
export class LidQueries {
    getAllLids(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allLids = yield db.manyOrNone("SELECT * FROM lid");
                return res.json(allLids);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ error: "An error occurred while fetching lids." });
            }
        });
    }
    getLidById(req, res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Lid = yield db.one(`SELECT * FROM lid WHERE id = ${id}`);
                return res.json(Lid);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ error: "An error occurred while fetching a lid." });
            }
        });
    }
}
