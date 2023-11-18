import axios from "axios";

export default async function GetAllCups() {
    try {
        const allCups = await axios.get('https://cup-central-api.vercel.app/cups');
        return allCups.data;
    } catch (error) {
        console.error(error);
    }
}