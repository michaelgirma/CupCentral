import React, { useState } from "react";
import { Cup } from "../NewForm";
import GetAllColors from "@/services/GET/GetAllColors";


interface CupColorProps {
    prevArray: Cup[];
    updateCupColor: (cupColor: string, lidColor: string) => void;
    sendCupColor: (cupColor: string) => void;
    setLidSize: () => void;
}

const CupColor: React.FC<CupColorProps> = ({ prevArray, sendCupColor, setLidSize, updateCupColor }) => {

    const [cupColor, setCupColor] = useState('');
    const [showWarning, setShowWarning] = useState(false);
    const [colors, setColors] = useState([]);
    const [selectedColorId, setSelectedColorId] = useState<string | null>(null);


    const fetchAllColors = async () => {
        const res = await GetAllColors();
        setColors(res);             
    };

    if (colors.length === 0) {
        fetchAllColors();
    }

    const changeCupColor = (color: string, id: string) => {
        setCupColor(color);
        setSelectedColorId(id);
        updateCupColor(color, "Black");
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
        <div id="CupColor">
            <div id="CupColorContainer">
                <div id="RightCupColorContainer">
                    {colors.map((color: any) => (
                        <div id='ColorOption' key={color.id} className={selectedColorId === color.id ? 'selected' : ''} onClick={() => changeCupColor(color.color, color.id)}>
                            <div id="ColorSelectButton" onClick={() => changeCupColor(color.color, color.id)} style={{backgroundColor: color.color}}>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div onClick={checkCupColor}></div>

            <style>{`
                #CupColor {
                    display: flex;
                    position: relative;
                    width: 99%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                }
                #CupColorContainer {
                    display: flex;
                    position: relative;
                    flex-direction: column;
                    width: 100%;
                    height: 100%;
                    justify-content: space-around;
                    align-items: center;
                }
                #RightCupColorContainer {
                    display: flex;
                    position: relative;
                    flex-direction: row;
                    width: 100%;
                    height: 100%;
                    justify-content: space-around;
                    align-items: center;
                }
                #ColorOption {
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
                #ColorOption.selected {
                    border: 5px solid blue; 
                }
                #ColorSelectButton {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%; 
                }
                
            `}</style>
        </div>
    )
}

export default CupColor;