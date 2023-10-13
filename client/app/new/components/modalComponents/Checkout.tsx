import React from "react";
import CreateCup from "@/services/POST/CreateCup";

interface CheckoutProps {
    finalArray: any;
}

const Checkout: React.FC<CheckoutProps> = ({ finalArray }) => {
    
    const submitFinalArray = (finalArray: any) => {
        CreateCup(finalArray);
        window.location.href = '/'
    }
    
    return (
        <div>
            <div>{finalArray.CupColor}</div>
            <div>{finalArray.CupSize}</div>
            <div onClick={() => submitFinalArray(finalArray)}></div>
        </div>
    )
}

export default Checkout;