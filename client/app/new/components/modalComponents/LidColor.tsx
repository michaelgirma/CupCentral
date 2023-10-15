import React, { useState } from "react";
import { Cup } from "../../../../services/types";
import GetAllColors from "@/services/GET/GetAllColors";
import { ConvertValues } from "../../../utils/ConvertValues";

interface LidColorProps {
    prevCup: Cup;
    updateLidColor: (lidColor: string) => void;
    sendLidColor: (lidColor: number) => void;
    setCheckout: () => void;
}

const LidColor: React.FC<LidColorProps> = ({ prevCup, sendLidColor, setCheckout, updateLidColor }) => {

    const [lidColor, setLidColor] = useState('');
    const [showWarning, setShowWarning] = useState(false);
    const [colors, setColors] = useState([]);
    const [selectedColorId, setSelectedColorId] = useState<string | null>(null);
    const [prevCupColor, setPrevCupColor] = useState('');

    
    const fetchAllColors = async () => {
        const res = await GetAllColors();
        setColors(res);             
    };

    if (colors.length === 0) {
        fetchAllColors();
    }

    const changeLidColor = (cupColor: string, color: string, id: string) => {
        setLidColor(color);
        setSelectedColorId(id);
        setPrevCupColor(ConvertValues(cupColor));
        updateLidColor(color);
        sendLidColor(ConvertValues(color));
    }

    const checkLidColor = () => {
        if (lidColor === '') {
            setShowWarning(true);
            setTimeout(() => {
                setShowWarning(false);
            }, 3000);
        } else {
            setShowWarning(false);
            sendLidColor(ConvertValues(lidColor));
            setCheckout();
        }
    }

    
    return (
        <div id="LidColor">
             <div id="LidColorContainer">
                <div id="LidColorHeaderContainer">
                    <p id="LidColorHeader">Choose Your Lid Color</p>
                </div>
                <div id="RightLidColorContainer">
                    {colors.map((color: any) => (
                        <div id="LidColorButtonsContainer" key={color.id} className={selectedColorId === color.id ? 'selected' : ''} onClick={() => changeLidColor(prevCupColor, color.color, color.id)}>
                            <div id="LidColorSelectButton" onClick={() => changeLidColor(prevCupColor, color.color, color.id)} style={{backgroundColor: color.color}} >
                            </div>
                        </div>
                    ))}
                </div>
                <div id="LidSizeButton">
                    <button onClick={checkLidColor}>Next</button>
                </div>
                <div id="WarningContainer">
                    {showWarning ? <p>Invalid Entry</p> : null}
                </div>
            </div>

            <style>{`
            #LidColor {
                display: flex;
                position: relative;
                width: 99%;
                height: 100%;
                justify-content: center;
                align-items: center;
            }
            #LidColorContainer {
                display: flex;
                position: relative;
                flex-direction: column;
                width: 100%;
                height: 100%;
                justify-content: space-around;
                align-items: center;
            }
            #LidColorHeaderContainer {
                display: flex;
                position: relative;
                width: 100%;
                height: 100%;
                justify-content: center;
                align-items: center;
            }
            #LidColorHeader {
                display: flex;
                position: relative;
                width: 100%;
                height: 100%;
                justify-content: center;
                align-items: center;
                font-size: 1.5rem;
                font-weight: bold;
                color: white;
            }
            #RightLidColorContainer {
                display: flex;
                position: relative;
                flex-direction: row;
                width: 100%;
                height: 100%;
                justify-content: space-around;
                align-items: center;
            }
            #LidColorButtonsContainer {
                display: flex;
                position: relative;
                width: 100px;
                height: 100px;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                cursor: pointer;
                border: 1px solid white;
            }
            #LidColorButtonsContainer.selected {
                border: 5px solid blue; 
            }
            #LidColorSelectButton {
                display: flex;
                position: relative;
                width: 100%;
                height: 100%;
                justify-content: center;
                align-items: center;
                border-radius: 50%; 
            }
            #LidSizeButton {
                display: flex;
                position: relative;
                width: 100%;
                height: 100%;
                justify-content: center;
                align-items: center;
                border-radius: 50%; 
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
            }
            #LidSizeButton button:hover{
                transform: scale(1.2); 
                transition: transform 0.4s ease-in-out;
                opacity: 0.5;
                cursor: pointer;
            }

            
            `}</style>
        </div>
    )
}

export default LidColor;