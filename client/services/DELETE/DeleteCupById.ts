import axios from "axios";

export default async function DeleteCupById(id: string) {
    const response = await axios.get(`http://localhost:4000/cups/delete/${id}`);
    console.log(response);
    return response;
}