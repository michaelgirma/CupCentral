import axios from "axios";

export default async function GetCupById(id: string) {
    const response = await axios.get(`http://localhost:3000/cups/${id}`);
    console.log(response);
    return response;
}