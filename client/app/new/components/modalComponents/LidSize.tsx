import React, { useState } from "react";
import { Cup } from "../NewForm";

interface LidSizeProps {
    prevArray: Cup[];
    sendLidSize: (LidSize: string) => void;
    setLidColor: () => void;
}

const LidSize: React.FC<LidSizeProps> = ({ prevArray, sendLidSize, setLidColor }) => {

    const [LidSize, setLidSize] = useState('');
    const [showWarning, setShowWarning] = useState(false);
    const cupSize = prevArray[0];

    const changeLidSize = (color: string) => {
        setLidSize(color);
    }

    const checkLidSize = () => {
        const cupState = LidSize;
        if (cupState === '') {
            setShowWarning(true);
            setTimeout(() => {
                setShowWarning(false);
            }, 3000);
        } else {
            setShowWarning(false);
            sendLidSize(cupState);
            setLidColor();
        }
    }

    
    return (
        <div>
            <div onClick={() => changeLidSize("HexValue...")}></div>
            <div onClick={checkLidSize}></div>
        </div>
    )
}

export default LidSize;