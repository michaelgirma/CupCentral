import React, { useState } from "react";
import { Cup } from "../../../../services/types";
import { ConvertValues } from "../../../utils/ConvertValues";

interface LidSizeProps {
    sizes: string[];
    prevCup: Cup;
    sendLidSize: (LidSize: number) => void;
    setLidColor: () => void;
}

const LidSize: React.FC<LidSizeProps> = ({ sizes, prevCup, sendLidSize, setLidColor }) => {

    const [lidSize, setLidSize] = useState('');
    const [showWarning, setShowWarning] = useState(false);
    const [selectedSizeId, setSelectedSizeId] = useState<string | null>(null);

    const changeLidSize = (size: string, id: string) => {
        setLidSize(size);
        setSelectedSizeId(id);
        sendLidSize(ConvertValues(size));
    }

    const checkLidSize = () => {
        if (lidSize === '' || ConvertValues(lidSize) !== prevCup.size_id) {
            setShowWarning(true);
            setTimeout(() => {
                setShowWarning(false);
            }, 3000);
        } else {
            setShowWarning(false);
            sendLidSize(ConvertValues(lidSize));
            setLidColor();
        }
    }

    return (
        <div id="LidSize">
            <div id="LidSizeContainer">
                <div id="LidSizeHeaderContainer">
                    <p id="LidSizeHeader">Choose Your Lid Size</p>
                </div>
                <div id="RightLidSizeContainer">
                    {sizes.map((size: any) => (
                        <div id="LidSizeButtonsContainer" key={size.id}>
                            <div id="LidSizeSelectButton" onClick={() => changeLidSize(size.size, size.id)} className={selectedSizeId === size.id ? 'selected' : ''}>
                                <img src={size.image}/>
                            </div>
                        </div>
                    ))}
                </div>
                <div id="LidSizeButton">
                    <button onClick={checkLidSize}>Next</button>
                </div>
                <div id="WarningContainer">
                    {showWarning ? <p>Invalid Entry</p> : null}
                </div>

            </div>

            <style>{`
            #LidSize {
                display: flex;
                position: relative;
                width: 100%;
                height: 50vh;
                justify-content: center;
                align-items: center;
            }
            #LidSizeContainer {
                display: flex;
                position: relative;
                flex-direction: column;
                width: 100%;
                height: 100%;
                align-items: center;
            }
            #LidSizeHeaderContainer {
                display: flex;
                position: relative;
                width: 100%;
                height: 10%;
                justify-content: center;
                align-items: center;
            }
            #LidSizeHeaderContainer p {
                display: flex;
                position: relative;
                color: white;
                font-size: 2rem;
                font-weight: bold;
            }
            #RightLidSizeContainer {
                display: flex;
                position: relative;
                width: 100%;
                height: 80%;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
            }
            #LidSizeButtonsContainer {
                display: flex;
                position: relative;
                width: 80px;
                height: 80px;
            }
            #LidSizeSelectButton {
                display: flex;
                position: relative;
                width: 100%;
                height: 100%;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                border: 1px solid white;
                border-radius: 50%;
            }
            #LidSizeSelectButton img{
                display: flex;
                position: relative;
                width: 100%;
                height: 100%;
                object-fit: contain;
                background-color: white;
                border-radius: 50%;
                gap: 50px;


            }
            #LidSizeSelectButton.selected {
                border: 5px solid blue;
            }
            #LidSizeButton {
                display: flex;
                position: relative;
                width: 25%;
                height: 20%;
                justify-content: center;
                align-items: center;
            }
            #LidSizeButton button{
                display: flex;
                position: relative;
                width: 100px;
                height: 40px;
                justify-content: center;
                align-items: center;
                border-radius: 30px;
                font-size: 1.2rem;
                font-weight: bold;
                transition: 0.5s;
                border-color: white;
            }
            #LidSizeButton button:hover{
                background-color: black;
                color: white; 
            }
            #WarningContainer {
                display: flex;
                position: relative;
                width: 50%;
                height: 20%;
                justify-content: center;
                align-items: center;
            }
            #WarningContainer p {
                display: flex;
                position: relative;
                color: white;
                font-size: 1.5rem;
                font-weight: bold;
            }
            
            `}</style>
        </div>
    )
}

export default LidSize;