import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ColorQueries } from "./src/controllers/color.js";
import { SizeQueries } from "./src/controllers/size.js";
import { CupQueries } from "./src/controllers/cup.js";   
import { ColorRoutes } from "./src/routes/color.js";
import { CupRoutes } from "./src/routes/cup.js";
import { SizeRoutes } from "./src/routes/size.js";
dotenv.config();
const port = process.env.PORT;


const corsOptions = {
  origin: (origin: any, callback: any) => {
    const allowedOrigins = "https://hotel-template-da.vercel.app/";
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    } 
  },
}; 

const server = express();
server.use(cors(corsOptions));

const ColorControllers = new ColorQueries();
const SizeControllers = new SizeQueries();
const CupControllers = new CupQueries();

server.get("/", (req, res) => {
  res.json("Cup API");
});

//Server for Colors Table
server.get(ColorRoutes.getAllColors, (req, res) => {
    ColorControllers.getAllColors(req, res)
});

server.get(ColorRoutes.getColorById, (req, res) => {
    const id = req.params.id;
    ColorControllers.getColorById(req, res, id)
});

//Server for Sizes Table
server.get(SizeRoutes.getAllSizes, (req, res) => {
    SizeControllers.getAllSizes(req, res)
});

server.get(SizeRoutes.getSizeById, (req, res) => {
    const id = req.params.id;
    SizeControllers.getSizeById(req, res, id)
});

//Server for Cups Table
server.get(CupRoutes.getAllCups, (req, res) => {
    CupControllers.getAllCups(req, res)
});

server.get(CupRoutes.getCupById, (req, res) => {
    const id = req.params.id;
    CupControllers.getCupById(req, res, id)
});

server.get(CupRoutes.createCup, (req, res) => {
    const data = req.params.data;
    CupControllers.createCup(req, res, data)
});

server.get(CupRoutes.updateCupById, (req, res) => {
    const data = req.params.data;
    CupControllers.updateCupById(req, res, data)
});

server.get(CupRoutes.deleteCupById, (req, res) => {
    const id = req.params.id;
    CupControllers.deleteCupById(req, res, id)
});

server.get("*", (req, res) => {
  res.status(404).json("Page not found");
});

server.listen(port, () => console.log(`Server is running on port ${port}`))
