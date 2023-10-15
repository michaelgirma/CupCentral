import axios from "axios";

export default async function GetAllColors() {
    try {
        const allColors = await axios.get('https://cup-central-api.vercel.app/colors');
        return allColors.data;
    } catch (error) {
        console.error(error);
    }
}