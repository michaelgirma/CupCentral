'use client'
import React, { useState, useEffect } from 'react'
import CupSize from './modalComponents/CupSize'
import CupColor from './modalComponents/CupColor'
import LidSize from './modalComponents/LidSize'
import LidColor from './modalComponents/LidColor'
import Checkout from './modalComponents/Checkout'

export interface Cup {
    cupSize: string;
    cupColor: string;
    lidSize: string;
    lidColor: string;
}

export default function NewForm() {
    const [cup, setCup] = useState<Cup[]>([]);
    const [showCupSize, setShowCupSize] = useState(true);
    const [showCupColor, setShowCupColor] = useState(false);
    const [showLidSize, setShowLidSize] = useState(false);
    const [showLidColor, setShowLidColor] = useState(false);
    const [showCheckout, setShowCheckout] = useState(false);
    

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
        <div>
            {showCupSize && <CupSize sendCupSize={(cupSize: string) => addCupSize(cupSize)} setCupColor={handleShowCupColor} /> }
            {showCupColor && <CupColor prevArray={cup} sendCupColor={(cupColor: string) => addCupColor(cupColor)} setLidSize={handleShowLidSize} /> }
            {showLidSize && <LidSize prevArray={cup} sendLidSize={(lidSize: string) => addLidSize(lidSize)} setLidColor={handleShowLidColor} /> }
            {showLidColor && <LidColor prevArray={cup} sendLidColor={(lidColor: string) => addLidColor(lidColor)} setCheckout={handleShowCheckout} /> }
            {showCheckout && <Checkout finalArray={cup} /> }
        </div>
    )
}