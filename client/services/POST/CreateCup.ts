import axios from "axios";

export default async function CreateCup(data: any) {
    const response = await axios.post(`http://localhost:4000/cups/create/${data}`);
    console.log(response);
    return response;
}