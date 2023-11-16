import axios from "axios";

export default async function GetAllSizes() {
    try {
        const allSizes = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/sizes`);
        return allSizes.data;
    } catch (error) {
        console.error(error);
    }
}