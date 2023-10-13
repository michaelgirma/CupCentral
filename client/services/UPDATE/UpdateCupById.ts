import axios from "axios";

export default async function UpdateCupById(data: any) {
    const id = data.id;
    const response = await axios.patch(`http://localhost:4000/cups/update/${id}/${data}`);
    console.log(response);
    return response;
}