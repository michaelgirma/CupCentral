import axios from "axios";

export default async function GetAllColors() {
    try {
        const allColors = await axios.get('http://localhost:4000/colors');
        return allColors.data;
    } catch (error) {
        console.error(error);
    }
}