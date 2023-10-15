import axios from "axios";

export default async function GetCupById(id: string) {
    try {
        const cup = await axios.get(`http://localhost:4000/cups/${id}`);
        return cup.data;
    } catch (error) {
        console.error(error);
    }
}