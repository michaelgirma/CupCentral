import React, { useState } from "react";
import { Cup } from "../NewForm";
import GetAllColors from "@/services/GET/GetAllColors";

interface LidColorProps {
    prevArray: Cup[];
    updateLidColor: (prevCupColor: string, lidColor: string) => void;
    sendLidColor: (LidColor: string) => void;
    setCheckout: () => void;
}

const LidColor: React.FC<LidColorProps> = ({ prevArray, sendLidColor, setCheckout, updateLidColor }) => {

    const [LidColor, setLidColor] = useState('');
    const [showWarning, setShowWarning] = useState(false);
    const [colors, setColors] = useState([]);
    const prevArrCupColor = prevArray[1];
    const prevCupColor = prevArrCupColor.cupColor;

    
    const fetchAllColors = async () => {
        const res = await GetAllColors();
        setColors(res);             
    };

    if (colors.length === 0) {
        fetchAllColors();
    }

    const changeLidColor = (prevCupColor: string, color: string) => {
        setLidColor(color);
        updateLidColor(prevCupColor, color)
    }

    const checkLidColor = () => {
        const LidState = LidColor;
        if (LidState === '') {
            setShowWarning(true);
            setTimeout(() => {
                setShowWarning(false);
            }, 3000);
        } else {
            setShowWarning(false);
            sendLidColor(LidState);
            setCheckout();
        }
    }

    
    return (
        <div>
            <div onClick={() => changeLidColor(prevCupColor, "HexValue...")}></div>
            <div onClick={checkLidColor}></div>
        </div>
    )
}

export default LidColor;