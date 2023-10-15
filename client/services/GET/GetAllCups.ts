import axios from "axios";

export default async function GetAllCups() {
    try {
        const allCups = await axios.get('http://localhost:4000/cups');
        return allCups.data;
    } catch (error) {
        console.error(error);
    }
}