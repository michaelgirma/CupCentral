import axios from "axios";

export default async function GetAllSizes() {
    try {
        const allSizes = await axios.get('https://cup-central-api.vercel.app/sizes');
        return allSizes.data;
    } catch (error) {
        console.error(error);
    }
}