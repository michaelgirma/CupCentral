import axios from "axios";

export default async function DeleteCupById(id: string) {
    try {
        await axios.delete(`https://cup-central-api.vercel.app/cups/delete/${id}`);
    } catch (error) {
        console.error(error);
    }
}