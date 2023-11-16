import axios from "axios";

export default async function DeleteCupById(id: string) {
    try {
        await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/cups/delete/${id}`);
    } catch (error) {
        console.error(error);
    }
}