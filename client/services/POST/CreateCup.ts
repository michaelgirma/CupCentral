import axios from "axios";
import { Cup } from "../types";

export default async function CreateCup(data: Cup) {
    try {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/cups/create`, data);
    } catch (error) {
        console.log(error);
    }
}