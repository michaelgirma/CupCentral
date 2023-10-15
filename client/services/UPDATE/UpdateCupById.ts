import axios from "axios";
import { Cup } from "../types";

export default async function UpdateCupById(data: Cup) {
    try {
        await axios.put(`http://localhost:4000/cups/update/${data.id}`, data);
    } catch (error) {
        console.error(error);
    }
}