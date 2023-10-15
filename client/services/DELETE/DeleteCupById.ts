import axios from "axios";

export default async function DeleteCupById(id: string) {
    try {
        await axios.delete(`http://localhost:4000/cups/delete/${id}`);
    } catch (error) {
        console.error(error);
    }
}