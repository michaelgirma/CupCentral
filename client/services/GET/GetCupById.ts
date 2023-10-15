import axios from "axios";

export default async function GetCupById(id: string) {
    try {
        const cup = await axios.get(`https://cup-central-api.vercel.app/cups/${id}`);
        return cup.data;
    } catch (error) {
        console.error(error);
    }
}