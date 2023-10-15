import axios from "axios";
import { Cup } from "../types";

export default async function UpdateCupById(data: Cup) {
    try {
        await axios.put(`https://cup-central-api.vercel.app/cups/update/${data.id}`, data);
    } catch (error) {
        console.error(error);
    }
}