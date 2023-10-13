import React, { useState } from "react";

interface CupSizeProps {
    sendCupSize: (cupSize: string) => void;
    setCupColor: () => void;
}

const CupSize: React.FC<CupSizeProps> = ({ sendCupSize, setCupColor }) => {

    const [cupSize, setCupSize] = useState('');
    const [showWarning, setShowWarning] = useState(false);

    const changeCupSize = (size: string) => {
        setCupSize(size);
    }

    const checkCupSize = () => {
        const cupState = cupSize;
        if (cupState === '') {
            setShowWarning(true);
            setTimeout(() => {
                setShowWarning(false);
            }, 3000);
        } else {
            sendCupSize(cupState);
            setCupColor();
        }
    }

    
    return (
        <div>
            <div onClick={() => changeCupSize("Small")}></div>
            <div onClick={() => changeCupSize("Medium")}></div>
            <div onClick={() => changeCupSize("Large")}></div>
            <div onClick={checkCupSize}></div>
        </div>
    )
}

export default CupSize;