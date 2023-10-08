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
export class SizeQueries {
    getAllSizes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allSizes = yield db.manyOrNone("SELECT * FROM size");
                return res.json(allSizes);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ error: "An error occurred while fetching sizes." });
            }
        });
    }
    getSizeById(req, res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Size = yield db.one(`SELECT * FROM size WHERE id = ${id}`);
                return res.json(Size);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ error: "An error occurred while fetching a size." });
            }
        });
    }
}
