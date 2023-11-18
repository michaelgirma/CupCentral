'use client'
import React, { useState } from 'react'
import CupTitle from './modalComponents/CupTitle'
import CupSize from './modalComponents/CupSize'
import CupColor from './modalComponents/CupColor'
import LidSize from './modalComponents/LidSize'
import LidColor from './modalComponents/LidColor'
import Checkout from './modalComponents/Checkout'
import { CupImages } from '../../utils/CupImages'
import { Cup, CupImage } from '../../../services/types'

interface NewFormProps {
    sizes: string[];
    colors: string[];
}

const NewForm: React.FC<NewFormProps> = ({ sizes, colors }) => {
    const [cup, setCup] = useState<Cup>({ title: '', size_id: 0, color_id: 0, lid: [], image: '' });
    const [showCupTitle, setShowCupTitle] = useState(true);
    const [showCupSize, setShowCupSize] = useState(false);
    const [showCupColor, setShowCupColor] = useState(false);
    const [showLidSize, setShowLidSize] = useState(false);
    const [showLidColor, setShowLidColor] = useState(false);
    const [showCheckout, setShowCheckout] = useState(false);
    const [cupImage, setCupImage] = useState<CupImage>({lid: 'Black', cup: 'Black', img: 'CupCentralImages/LidBlackandCupBlack.png'});
    const [cupColor, setCupColor] = useState('Black');
    
    const changeCupImage = (cup: string, lid: string) => {
        const newCupImage = CupImages.find(item => item.lid === lid && item.cup === cup);
        if (newCupImage) {
            setCupImage(newCupImage);
            setCupColor(newCupImage.cup);
        }
    }

    const addCupTitle = (title: string) => {
        const updatedCup: Cup = { ...cup, title: title };
        setCup(updatedCup);
        console.log('The new cup is: ', cup)
    }

    const addCupSize = (cupSize: number) => {
        const updatedCup: Cup = { ...cup, size_id: cupSize };
        setCup(updatedCup);
        console.log('The new cup is: ', cup)
    }
    

    const addCupColor = (cupColor: number) => {
        const updatedCup: Cup = { ...cup, color_id: cupColor };
        setCup(updatedCup);
        console.log('The new cup is: ', cup)

    }

    const addLidSize = (lidSize: number) => {
        const updatedCup: Cup = { ...cup, lid: [...cup.lid, lidSize] };
        setCup(updatedCup);
        console.log('The new cup is: ', cup)
    }

    const addLidColor = (lidColor: number) => {
        const updatedCup: Cup = { ...cup, lid: [...cup.lid, lidColor] };
        setCup(updatedCup);
        console.log('The new cup is: ', cup)
        addCupImage(cupImage.img);
    }

    const addCupImage = (cupImage: string) => {
        const updatedCup: Cup = { ...cup, image: cupImage };
        setCup(updatedCup);
        console.log('The new cup is: ', cup)
    }
    
    const handleShowCupSize = () => {
        setShowCupTitle(false);
        setShowCupSize(true);
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
                    <div id="Modal">
                        {showCupTitle && <CupTitle sendCupTitle={(cupTitle: string) => addCupTitle(cupTitle)} setCupSize={handleShowCupSize} />}
                        {showCupSize && <CupSize sizes={sizes} sendCupSize={(cupSize: number) => addCupSize(cupSize)} setCupColor={handleShowCupColor}  />}
                        {showCupColor && <CupColor colors={colors} prevCup={cup} sendCupColor={(cupColor: number) => addCupColor(cupColor)} setLidSize={handleShowLidSize} updateCupColor={(cupColor: string, lidColor: string) => changeCupImage(cupColor, lidColor)}/>}
                        {showLidSize && <LidSize sizes={sizes} prevCup={cup} sendLidSize={(lidSize: number) => addLidSize(lidSize)} setLidColor={handleShowLidColor} />}
                        {showLidColor && <LidColor colors={colors} prevCup={cup} sendLidColor={(lidColor: number) => addLidColor(lidColor)} setCheckout={handleShowCheckout} updateLidColor={(lidColor: string) => changeCupImage(cupColor, lidColor)}/>}
                        {showCheckout && <Checkout finalCup={cup} />}
                    </div>
                </div>
            </div>
            <style>
                {`
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
                        margin-top: 12vh;
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
                        background-color: white;
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
                        height: 95%;
                        justify-content: center;
                        align-items: center;
                    }
                    #NewCupHeader{
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 39%;
                        justify-content: center;
                        align-items: center;
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
                `}
            </style>
        </div>
    )
}

export default NewForm;