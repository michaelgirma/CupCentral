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
                    position: relative;
                    width: 100%;
                    height: 50vh;
                    justify-content: center;
                    align-items: center;
                }
                #CupTitleContainer {
                    display: flex;
                    position: relative;
                    flex-direction: column;
                    width: 100%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                    gap: 20px;
                }
                #CupTitleHeaderContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 10%;
                    justify-content: space-around;
                    align-items: center;
                }
                #CupTitleHeader {
                    display: flex;
                    position: relative;
                    font-size: 1.5em;
                    font-weight: bold;
                    color: white;
                }
                #CupTitleButtonContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 10%;
                    justify-content: center;
                    align-items: center;
                }
                #CupTitleButton {
                    display: flex;
                    position: relative;
                    width: 100px;
                    height: 30px;
                    justify-content: center;
                    align-items: center;
                    border-radius: 15px;
                    cursor: pointer;
                    border-color: white;
                    background-color: white;
                    color: black;
                    font-size: 1.5rem;
                    transition: 0.5s;
                }
                #CupTitleButton:hover {
                    background-color: black;
                    color: white;
                }
                #CupTitleWarning {
                    display: flex;
                    position: relative;
                    font-size: 1.5em;
                    font-weight: bold;
                    color: red;
                }
            `}
        </style>
        </div>
    );
};

export default CupTitle;