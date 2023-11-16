import axios from "axios";
import { Cup } from "../types";

export default async function UpdateCupById(data: Cup) {
    try {
        await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/cups/update/${data.id}`, data);
    } catch (error) {
        console.error(error);
    }
}