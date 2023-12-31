import React from "react";
import CreateCup from "../../../../services/POST/CreateCup";
import { Cup } from "../../../../services/types";

interface CheckoutProps {
    finalCup: Cup;
}

const Checkout: React.FC<CheckoutProps> = ({ finalCup }) => {
    
    const submitFinalCup = (data: Cup) => {
        CreateCup(data);
        setTimeout(() => {
            window.location.href = '/';
        }, 1000);
    }
    
    return (
        <div id="Checkout">
            <div id="CheckoutContainer">
                <div id="CheckoutHeaderContainer">
                    <p id="CheckoutHeader">Create your Cup!</p>
                    <p id="CheckoutHeaderPrice">$24.99</p>
                </div>
                <div id="CheckoutSubmitContainer">
                    <button onClick={() => submitFinalCup(finalCup)}>Submit</button>
                </div>
            </div>
          <style> 
            {`
                #Checkout {
                    display: flex;
                    position: relative;
                    width: 99%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                }
                #CheckoutContainer {
                    display: flex;
                    position: relative;
                    flex-direction: column;
                    width: 100%;
                    height: 100%;
                    justify-content: space-around;
                    align-items: center;
                }
                #CheckoutHeaderContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                #CheckoutHeader {
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
                #CheckoutHeaderPrice{
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
                #CheckoutSubmitContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%; 
                }
                #CheckoutSubmitContainer button{
                    display: flex;
                    position: relative;
                    width: 100px;
                    height: 100px;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    font-size: 1.2rem;
                    font-weight: bold;
                    border: 1px solid white;
                    transition: 0.5s;
                }
                #CheckoutSubmitContainer button:hover{
                    background-color: black;
                    color: white;
                    opacity: 0.5;
                    cursor: pointer;
                }

            `} 
          </style>
        </div>
    )
}

export default Checkout;