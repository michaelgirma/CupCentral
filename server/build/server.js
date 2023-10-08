import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ColorQueries } from "./src/controllers/color.js";
import { SizeQueries } from "./src/controllers/size.js";
import { LidQueries } from "./src/controllers/lid.js";
import { CupQueries } from "./src/controllers/cup.js";
import { ColorRoutes } from "./src/routes/color.js";
import { CupRoutes } from "./src/routes/cup.js";
import { LidRoutes } from "./src/routes/lid.js";
import { SizeRoutes } from "./src/routes/size.js";
dotenv.config();
const port = process.env.NODEPORT;
const corsOptions = {
    origin: (origin, callback) => {
        const allowedOrigins = "https://hotel-template-da.vercel.app/";
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    },
};
const server = express();
server.use(cors(corsOptions));
const ColorControllers = new ColorQueries();
const SizeControllers = new SizeQueries();
const LidControllers = new LidQueries();
const CupControllers = new CupQueries();
server.get("/", (req, res) => {
    res.json("Hotel API");
});
//Server for Colors Table
server.get(ColorRoutes.getAllColors, (req, res) => {
    ColorControllers.getAllColors(req, res);
});
server.get(ColorRoutes.getColorById, (req, res) => {
    const id = req.params.id;
    ColorControllers.getColorById(req, res, id);
});
//Server for Sizes Table
server.get(SizeRoutes.getAllSizes, (req, res) => {
    SizeControllers.getAllSizes(req, res);
});
server.get(SizeRoutes.getSizeById, (req, res) => {
    const id = req.params.id;
    SizeControllers.getSizeById(req, res, id);
});
//Server for Cups Table
server.get(CupRoutes.getAllCups, (req, res) => {
    CupControllers.getAllCups(req, res);
});
server.get(CupRoutes.getCupById, (req, res) => {
    const id = req.params.id;
    CupControllers.getCupById(req, res, id);
});
//Server for Lids Table
server.get(LidRoutes.getAllLids, (req, res) => {
    LidControllers.getAllLids(req, res);
});
server.get(LidRoutes.getLidById, (req, res) => {
    const id = req.params.id;
    LidControllers.getLidById(req, res, id);
});
server.listen(port, () => console.log(`Server is running on port ${port}`));
