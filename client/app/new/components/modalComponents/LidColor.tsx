import React, { useState } from "react";
import { Cup } from "../NewForm";

interface LidColorProps {
    prevArray: Cup[];
    sendLidColor: (LidColor: string) => void;
    setCheckout: () => void;
}

const LidColor: React.FC<LidColorProps> = ({ prevArray, sendLidColor, setCheckout }) => {

    const [LidColor, setLidColor] = useState('');
    const [showWarning, setShowWarning] = useState(false);

    const changeLidColor = (color: string) => {
        setLidColor(color);
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
            <div onClick={() => changeLidColor("HexValue...")}></div>
            <div onClick={checkLidColor}></div>
        </div>
    )
}

export default LidColor;