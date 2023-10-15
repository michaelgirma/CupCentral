import React, { useState } from "react";

interface CupTitleProps {
    sendCupTitle: (title: string) => void;
    setCupSize: () => void;
}

const CupTitle: React.FC<CupTitleProps> = ({ sendCupTitle, setCupSize }) => {
    
    const [title, setTitle] = useState('');
    const [showWarning, setShowWarning] = useState(false);

    const updateTitle = (e: any) => {
        setTitle(e.target.value);
        sendCupTitle(e.target.value);
    }

    const handleTitleSubmit = () => {
        if (title === '') {
            setShowWarning(true);
            setTimeout(() => {
                setShowWarning(false);
            }, 3000);
        } else {
            sendCupTitle(title);
            setCupSize();
        }
    }

    return (
        <div id='CupTitle'>
            <div id="CupTitleContainer">
                <div id="CupTitleHeaderContainer">
                    <p id="CupTitleHeader">Set Cup Name</p>
                </div>
                <div id="TitleInputContainer">
                    <input id="TitleInput" placeholder={title} onChange={(e) => updateTitle(e)} />
                </div>
                <div id="CupTitleButtonContainer">
                    <button id="CupTitleButton" onClick={handleTitleSubmit}>Next</button>
                </div>
                <div id="CupTitleWarningContainer">
                    {showWarning && <p id="CupTitleWarning">Please enter a cup name.</p>}
                </div>
            </div>
        <style>
            {`
                #CupTitle {
                    display: flex;
                }
            `}
        </style>
        </div>
    );
};

export default CupTitle;