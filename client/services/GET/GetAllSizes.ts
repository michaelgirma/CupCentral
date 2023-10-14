import axios from "axios";

export default async function GetAllSizes() {
    try {
        const allSizes = await axios.get('http://localhost:4000/sizes');
        return allSizes.data;
    }
    catch(error) {
        console.error(error);
    }
}