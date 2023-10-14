import React, {useState} from "react";
import UpdateCupById from "@/services/UPDATE/UpdateCupById";
import GetCupById from "@/services/GET/GetCupById";

interface UpdateCupProps {
    id: any;
    cup: any;
    hideUpdateCup: () => void;
}

const UpdateCup: React.FC<UpdateCupProps> = ({ id, cup, hideUpdateCup }) => {

    const [updatedCup, setUpdatedCup] = useState(cup);
    const [warning, setWarning] = useState(false);
    const [cupSize, setCupSize] = useState(cup.size_id);
    const [cupColor, setCupColor] = useState(cup.color_id);
    const [lidSize, setLidSize] = useState(cup.lid[0]);
    const [lidColor, setLidColor] = useState(cup.lid[1]);

    const changeCupSize = (e: any) => {
        setCupSize(e)
    }

    const changeCupColor = (e: any) => {
        setCupColor(e)
    }

    const changeLidSize = (e: any) => {
        setLidSize(e)
    }

    const changeLidColor = (e: any) => {
        setLidColor(e)
    }

    const handleFormSubmit = (cupSize: any, cupColor: any, lidSize: any, lidColor: any) => {
        const updatedCupArray = [cupSize, cupColor, lidSize, lidColor]
        if (cupSize == lidSize) {
            setWarning(true)
            setTimeout(() => {
                setWarning(false)
            },3000) 
            return 
        }
        setUpdatedCup(updatedCupArray)
        UpdateCupById(updatedCup)
    }

    return (
        <div>
            <button onClick={hideUpdateCup}>X</button>
            <button onClick={() => changeCupSize("Small")}> Small</button>
            <button onClick={() => handleFormSubmit(cupSize, cupColor, lidSize, lidColor)}></button>
        </div>
    )
}

export default UpdateCup