import axios from "axios";
import { Cup } from "../types";

export default async function CreateCup(data: Cup) {
    try {
        await axios.post(`http://localhost:4000/cups/create`, data);
    } catch (error) {
        console.log(error);
    }
}