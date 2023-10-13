import React, { useState } from "react";
import GetAllColors from "@/services/GET/GetAllColors";
import { Cup } from "../NewForm";

interface CupColorProps {
    prevArray: Cup[];
    sendCupColor: (cupColor: string) => void;
    setLidSize: () => void;
}

const CupColor: React.FC<CupColorProps> = ({ prevArray, sendCupColor, setLidSize }) => {

    const [cupColor, setCupColor] = useState('');
    const [showWarning, setShowWarning] = useState(false);
    
    const fetchColors = async () => {
        const allColors = await GetAllColors();
        return allColors;
    }

    const allColors = fetchColors();

    const changeCupColor = (color: string) => {
        setCupColor(color);
    }

    const checkCupColor = () => {
        const cupState = cupColor;
        if (cupState === '') {
            setShowWarning(true);
            setTimeout(() => {
                setShowWarning(false);
            }, 3000);
        } else {
            setShowWarning(false);
            sendCupColor(cupState);
            setLidSize();
        }
    }

    
    return (
        <div>
            {allColors.map((color) => (
                <div id='ColorOption' key={color.id}>

                </div>
            ))}
            <div onClick={() => changeCupColor("HexValue...")}></div>
            <div onClick={checkCupColor}></div>
        </div>
    )
}

export default CupColor;