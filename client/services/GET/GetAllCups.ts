import axios from "axios";

export default async function GetAllCups() {
    try {
        const allCups = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/cups`);
        return allCups.data;
    } catch (error) {
        console.error(error);
    }
}