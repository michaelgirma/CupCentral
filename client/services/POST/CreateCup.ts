import axios from "axios";
import { Cup } from "../types";

export default async function CreateCup(data: Cup) {
    try {
        await axios.post(`https://cup-central-api-michaelgirma.vercel.app/cups/create`, data);
    } catch (error) {
        console.log(error);
    }
}