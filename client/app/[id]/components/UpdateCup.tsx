import React, { useState } from "react";
import UpdateCupById from "../../../services/UPDATE/UpdateCupById";
import { ConvertValues } from "../../utils/ConvertValues";
import { Cup } from "../../../services/types";

interface UpdateCupProps {
    id: string;
    cup: Cup;
    colors: string[];
    sizes: string[];
    hideUpdateCup: () => void;
}

const UpdateCup: React.FC<UpdateCupProps> = ({ id, cup, hideUpdateCup, colors, sizes }) => {

    const [showWarning, setShowWarning] = useState(false);
    const [title, setTitle] = useState(cup.title);
    const [cupSize, setCupSize] = useState(ConvertValues(cup.size_id));
    const [cupColor, setCupColor] = useState(ConvertValues(cup.color_id));
    const [lidSize, setLidSize] = useState(ConvertValues(cup.lid[0]));
    const [lidColor, setLidColor] = useState(ConvertValues(cup.lid[1]));
    const [selectedCupSizeId, setSelectedCupSizeId] = useState<string | null>(null);
    const [selectedLidSizeId, setSelectedLidSizeId] = useState<string | null>(null);
    const [selectedCupColorId, setSelectedCupColorId] = useState<string | null>(null);
    const [selectedLidColorId, setSelectedLidColorId] = useState<string | null>(null);
    
    const changeTitle = (e: any) => {
        setTitle(e.target.value)
        console.log(title)
    }

    const changeCupSize = (value: string, id: string) => {
        setSelectedCupSizeId(id)
        setCupSize(value)
    }

    const changeCupColor = (value: string, id: string) => {
        setSelectedCupColorId(id)
        setCupColor(value)
    }

    const changeLidSize = (value: string, id: string) => {
        setSelectedLidSizeId(id)
        setLidSize(value)
    }

    const changeLidColor = (value: string, id: string) => {
        setSelectedLidColorId(id)
        setLidColor(value)
    }

    const handleFormSubmit = (title: string, cupSize: string, cupColor: string, lidSize: string, lidColor: string, image: string) => {
        const img = ConvertValues(image)
        console.log(img)
        const newCup: Cup = {id: id, title: title, size_id: ConvertValues(cupSize), color_id: ConvertValues(cupColor), lid: [ConvertValues(lidSize), ConvertValues(lidColor)], image: img }
        console.log(newCup.image)
        if (cupSize !== lidSize) {
            setShowWarning(true)
            setTimeout(() => {
                setShowWarning(false)
            }, 3000) 
            return 
        }
        UpdateCupById(newCup);
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    }

    return (
        <div id='UpdateCup'>
            <div id="HideUpdateCupContainer" onClick={hideUpdateCup}>
                <div id="HideUpdateCup" onClick={hideUpdateCup}>X</div>
            </div>
            <div id="UpdateCupContainer">
                <div id="ChangeTitleContainer">
                    <input type="text" value={title} onChange={(e) => changeTitle(e)} />
                </div>
                <div id="UpdateCupOptionsContainer">
                    <div id="ChangeCupSizeContainer">
                        <div id="ChangeCupSizeHeader">Change Cup Size</div>
                        <div id="ChangeLidColorOptionsContainer">
                            {sizes.map((size: any) => (
                                <div id="ChangeCupSizeButtonContainer" key={size.id}>
                                    <div id='ChangeCupSizeButton' onClick={() => changeCupSize(size.size, size.id)} className={selectedCupSizeId === size.id ? 'selected' : ''}>
                                        <img id='ChangeCupSizeImage' src={size.image} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div id="ChangeCupColorContainer">
                        <div id="ChangeCupColorHeader">Change Cup Color</div>
                        <div id="ChangeCupColorOptionsContainer">
                            {colors.map((color: any) => (
                                <div id="ChangeCupColorButtonContainer" key={color.id}>
                                    <div id='ChangeCupColorButton' onClick={() => changeCupColor(color.color, color.id)} className={selectedCupColorId === color.id ? 'selected' : ''}>
                                        <div id='ChangeCupColorImage' style={{backgroundColor: color.color}} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div id="ChangeLidSizeContainer">
                        <div id="ChangeLidSizeHeader">Change Lid Size</div>
                        <div id="ChangeLidSizeOptionsContainer">
                            {sizes.map((size: any) => (
                                <div id="ChangeLidSizeButtonContainer" key={size.id}>
                                    <div id='ChangeLidSizeButton' onClick={() => changeLidSize(size.size, size.id)} className={selectedLidSizeId === size.id ? 'selected' : ''}>
                                        <img id='ChangeLidSizeImage' src={size.image} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div id="ChangeLidColorContainer">
                        <div id="ChangeLidColorHeader">Change Lid Color</div>
                        <div id="ChangeLidColorOptionsContainer">
                            {colors.map((color: any) => (
                                <div id="ChangeLidColorButtonContainer" key={color.id}>
                                    <div id='ChangeLidColorButton' onClick={() => changeLidColor(color.color, color.id)} className={selectedLidColorId === color.id ? 'selected' : ''}>
                                        <div id='ChangeCupColorImage' style={{backgroundColor: color.color}} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div id="UpdateCupButtonContainer">
                    <div id="UpdateCupButton" onClick={() => handleFormSubmit(title, cupSize, cupColor, lidSize, lidColor, `CupCentralImages/Lid${lidColor}andCup${cupColor}.png`)}>Update Cup</div>
                </div>
                <div id="ShowWarningContainer">
                    {showWarning ? <div id="ShowWarning">Cup and Lid sizes must match!</div> : null}
                </div>
            </div>
        <style>
            {`
                #UpdateCup {
                    display: flex;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 99.5vw;
                    height: 100vh;
                    justify-content: center;
                    align-items: center;
                    background-color: rgba(0,0,0,0.5);
                    z-index: 2;
                }
                #HideUpdateCupContainer {
                    display: flex;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 99.5vw;
                    height: 100vh;
                    background-color: rgba(0,0,0,0.5);
                    z-index: 3;
                    cursor: pointer;
                }
                #HideUpdateCup {
                    display: flex;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100px;
                    height: 100px;
                    color: white;
                    z-index: 3;
                    cursor: pointer;
                }
                #UpdateCupContainer {
                    display: flex;
                    position: relative;
                    width: 75%;
                    height: 75%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background-color: white;
                    border-radius: 25px;
                    z-index: 4;
                }
                #ChangeTitleContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 10%;
                    justify-content: center;
                    align-items: center;
                }
                #ChangeTitleContainer input {
                    width: 70%;
                    height: 50%;
                }
                #UpdateCupOptionsContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 70%;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
                }
                #ChangeCupSizeOptionsContainer, #ChangeCupColorOptionsContainer, #ChangeLidSizeOptionsContainer, #ChangeLidColorOptionsContainer {
                    display: flex;
                    position: relative;
                    width: 50%;
                    height: 50%;
                    flex-direction: row;    
                    justify-content: center;
                    align-items: center;
                }
                #ChangeCupSizeContainer, #ChangeCupColorContainer, #ChangeLidSizeContainer, #ChangeLidColorContainer {
                    display: flex;
                    position: relative;
                    width: 50%;
                    height: 50%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                #ChangeCupSizeHeader, #ChangeCupColorHeader, #ChangeLidSizeHeader, #ChangeLidColorHeader {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 20%;
                    justify-content: center;
                    align-items: center;
                }
                #ChangeCupSizeButtonContainer, #ChangeCupColorButtonContainer, #ChangeLidSizeButtonContainer, #ChangeLidColorButtonContainer {
                    display: flex;
                    position: relative;
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                    margin: 10px;
                }
                #ChangeCupSizeButton, #ChangeCupColorButton, #ChangeLidSizeButton, #ChangeLidColorButton {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    cursor: pointer;
                }  
                #ChangeCupSizeButton.selected, #ChangeCupColorButton.selected, #ChangeLidSizeButton.selected, #ChangeLidColorButton.selected {
                    border: 5px solid red;
                } 
                #ChangeCupSizeImage, #ChangeCupColorImage, #ChangeLidSizeImage, #ChangeLidColorImage {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
                #UpdateCupButtonContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 10%;
                    justify-content: center;
                    align-items: center;
                }
                #UpdateCupButton {
                    display: flex;
                    position: relative;
                    width: 350px;
                    height: 70px;
                    justify-content: center;
                    align-items: center;
                    border-radius: 25px;
                    border: 1px solid black;
                    cursor: pointer;
                }
                #ShowWarningContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 10%;
                    justify-content: center;
                    align-items: center;
                }
                #ShowWarning {
                    font-family: InterBold;
                    color: red;
                }
            `}
        </style>
        </div>
    )
}

export default UpdateCup