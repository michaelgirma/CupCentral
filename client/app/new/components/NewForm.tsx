'use client'
import React, { useState, useEffect } from 'react'
import CupSize from './modalComponents/CupSize'
import CupColor from './modalComponents/CupColor'
import LidSize from './modalComponents/LidSize'
import LidColor from './modalComponents/LidColor'
import Checkout from './modalComponents/Checkout'
import {CupImages} from './modalComponents/CupImages'

export interface Cup {
    cupSize: string;
    cupColor: string;
    lidSize: string;
    lidColor: string;
}

export interface CupImage {
    lid: string;
    cup: string;
    img: string;
}

export default function NewForm() {
    const [cup, setCup] = useState<Cup[]>([]);
    const [showCupSize, setShowCupSize] = useState(true);
    const [showCupColor, setShowCupColor] = useState(false);
    const [showLidSize, setShowLidSize] = useState(false);
    const [showLidColor, setShowLidColor] = useState(false);
    const [showCheckout, setShowCheckout] = useState(false);
    const [cupImage, setCupImage] = useState<CupImage>({lid: 'Black', cup: 'Black', img: 'CupCentralImages/LidBlackandCupBlack.png'});
    const [cupColor, setCupColor] = useState('Black');
    
    const changeCupImage = (cup: string, lid: string) => {
        const newCupImage = CupImages.find(item => item.lid === lid && item.cup === cup);
        if(newCupImage){
            setCupImage(newCupImage);
            setCupColor(newCupImage.cup);
        }

    }

    const addCupSize = (cupSize: string) => {
        const newCup: Cup = { cupSize: cupSize, cupColor: '', lidSize: '', lidColor: '' };
        setCup([...cup, newCup]);
    }

    const addCupColor = (cupColor: string) => {
        const updatedCup = cup.map(item => ({ ...item, cupColor: cupColor }));
        setCup(updatedCup);
    }

    const addLidSize = (lidSize: string) => {
        const updatedCup = cup.map(item => ({ ...item, lidSize: lidSize }));
        setCup(updatedCup);
    }

    const addLidColor = (lidColor: string) => {
        const updatedCup = cup.map(item => ({ ...item, lidColor: lidColor }));
        setCup(updatedCup);
    }

    const handleShowCupColor = () => {
        setShowCupSize(false);
        setShowCupColor(true);
    }

    const handleShowLidSize = () => {
        setShowCupColor(false);
        setShowLidSize(true);
    }

    const handleShowLidColor = () => {
        setShowLidSize(false);
        setShowLidColor(true);
    }

    const handleShowCheckout = () => {
        setShowLidColor(false);
        setShowCheckout(true);
    }
    
    return (
        <div id="NewCup">
            <div id="NewCupContainer">
                <div id="LeftContainer">
                    <img src={cupImage.img} />
                </div>
                <div id="RightContainer">
                    <div id="NewCupHeader">
                        <h1>Create Your Cup</h1>
                    </div>
                    <div id="Modal">
                        {showCupSize && <CupSize sendCupSize={(cupSize: string) => addCupSize(cupSize)} setCupColor={handleShowCupColor}  />}
                        {showCupColor && <CupColor prevArray={cup} sendCupColor={(cupColor: string) => addCupColor(cupColor)} setLidSize={handleShowLidSize} updateCupColor={(cupColor: string, lidColor: string) => changeCupImage(cupColor, lidColor)}/>}
                        {showLidSize && <LidSize prevArray={cup} sendLidSize={(lidSize: string) => addLidSize(lidSize)} setLidColor={handleShowLidColor} />}
                        {showLidColor && <LidColor prevArray={cup} sendLidColor={(lidColor: string) => addLidColor(lidColor)} setCheckout={handleShowCheckout} updateLidColor={(prevCupColor: string, lidColor: string) => changeCupImage(cupColor, lidColor)}/>}
                        {showCheckout && <Checkout finalArray={cup} />}
                    </div>
                </div>
            </div>
            <style>{`
                #NewCup{
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100vh;
                    justify-content: center;
                    align-items: center;

                }
                #NewCupContainer{
                    display: flex;
                    position: relative;
                    width: 80%;
                    height: 80%;
                    justify-content: space-between;
                    border: 1px solid white;
                    border-radius: 30px;
                }
                #LeftContainer{
                    display: flex;
                    position: relative;
                    width: 49%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid white;
                    border-top-left-radius: 30px;
                    border-bottom-left-radius: 30px;
                }
                #LeftContainer img{
                    display: flex;
                    position: relative;
                    width: 80%;
                    height: 80%;
                    object-fit: contain;
                    justify-content: center;
                    align-items: center;
                }
                #RightContainer{
                    display: flex;
                    position: relative;
                    flex-direction: column;
                    width: 51%;
                    height: 85%;
                    justify-content: space-between;
                    align-items: center;
=                }
                #NewCupHeader{
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 39%;
                    justify-content: center;
                    align-items: flex-start;
                }
                #NewCupHeader h1{
                    color: white;
                    font-size: 3.5rem;
                }
                #Modal{
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 59%;
                    justify-content: center;
                    align-items: center;
                    border-radius: 30px;
                }
                    
                
            `}</style>
        </div>
    )
}