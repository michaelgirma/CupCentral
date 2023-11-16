import axios from "axios";

export default async function GetCupById(id: string) {
    try {
        const cup = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/cups/${id}`);
        return cup.data;
    } catch (error) {
        console.error(error);
    }
}