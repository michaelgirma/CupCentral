import React, { useState } from "react";
import GetAllSizes from "@/services/GET/GetAllSizes";

interface CupSizeProps {
    sendCupSize: (cupSize: string) => void;
    setCupColor: () => void;
}

const CupSize: React.FC<CupSizeProps> = ({ sendCupSize, setCupColor }) => {

    const [cupSize, setCupSize] = useState('');
    const [showWarning, setShowWarning] = useState(false);
    const [sizes, setSizes] = useState([]);
    const [selectedSizeId, setSelectedSizeId] = useState<string | null>(null);

    
    const fetchAllSizes = async () => {
        const res = await GetAllSizes();
        setSizes(res);             
    };

    if (sizes.length === 0) {
        fetchAllSizes();
    }


    const changeCupSize = (size: string, id: string) => {
        setCupSize(size);
        setSelectedSizeId(id);
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
        <div id="CupSize">
            <div id="CupSizeContainer">
                <div id="RightCupSizeContainer">
                    {sizes.map((size: any) => (
                        <div id="Size" key={size.id}>
                            <div id="SizeSelectButton" onClick={() => changeCupSize(size.size, size.id)} className={selectedSizeId === size.id ? 'selected' : ''}>
                                <img src={size.image}/>
                            </div>
                        </div>
                    ))}
                    <div id="BottomCupSizeContainer">
                        <button onClick={checkCupSize}>Next</button>
                    </div>  
                </div>
            </div>
            <style>{`
             #CupSize {
                display: flex; 
                position: relative;
                width: 100%;
                height: 100%;
             }
             #CupSizeContainer {
                display: flex;
                position: relative;
                flex-direction: column;
                width: 100%;
                height: 100%;
                justify-content: space-around;
                align-items: center;
            }
            #RightCupSizeContainer {
                display: flex;
                position: relative;
                flex-direction: column;
                width: 50%;
                height: 80%;
                justify-content: space-around;
                align-items: center;
                gap: 40px;
            }
            #Size{
                display: flex;
                position: relative;
                width: 20%;
                height: 100%;
                justify-content: center;
                align-items: center;
                gap: 30px;
            }
            #SizeSelectButton{
                display: flex;
                position: relative;
                width: 100%;
                height: 100%;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }
            #SizeSelectButton img{
                display: flex;
                position: relative;
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
            #SizeSelectButton img:hover{ 
                opacity: 0.5;
            }
            #SizeSelectButton.selected {
                border: 5px solid blue; 
            }
            #BottomCupSizeContainer {
                display: flex;
                position: relative;
                width: 100%;
                height: 20%;
                justify-content: center;
                align-items: center;
            }
            #BottomCupSizeContainer button{
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
            #BottomCupSizeContainer button:hover{
                transform: scale(1.2); 
                transition: transform 0.4s ease-in-out;
                opacity: 0.5;
                cursor: pointer;
            }
            `}</style>
        </div>
    )
}

export default CupSize;