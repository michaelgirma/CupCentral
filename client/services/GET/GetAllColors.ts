import axios from "axios";

export default async function GetAllColors() {
    try {
        const allColors = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/colors`);
        return allColors.data;
    } catch (error) {
        console.error(error);
    }
}