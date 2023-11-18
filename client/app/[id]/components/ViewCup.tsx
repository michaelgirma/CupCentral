'use client';
import React, { useState } from "react";
import "../../globals.css";
import DeleteCupById from "../../../services/DELETE/DeleteCupById";
import UpdateCup from "./UpdateCup";
import { Cup } from "../../../services/types";

interface ViewCupProps {
    cup: Cup;
    colors: string[];
    sizes: string[];
}

const ViewCup: React.FC<ViewCupProps> = ({ cup, colors, sizes }) => {

    const [showUpdate, setShowUpdate] = useState(false);

    const deleteCup = () => {
        DeleteCupById(cup.id);
        setTimeout(() => {
            window.location.href = '/';
        }, 2000);
    }

    const showUpdateModal = () => {
        setShowUpdate(true);
    }

    const hideUpdateModal = () => {
        setShowUpdate(false);
    }

    return (
        <div id="SpecificCup">
            <div id="SpecificCupContainer">
                <div id="SpecificCupImageContainer">
                    <img id= "SpecifiedCupImage" src={cup.image} />
                </div>
                <div id="SpecificCupTextContainer">
                    <div id="SpecificCupDescriptionContainer">
                        <h1>{cup.title}</h1>
                    </div>
                    <div id="SpecificCupButtonContainer">
                        <a href="/"><button>Home</button></a>
                        <button onClick={showUpdateModal}>Update</button>
                        <button onClick={deleteCup}>Delete</button>
                        {showUpdate ? <UpdateCup id={cup.id} cup={cup} colors={colors} sizes={sizes} hideUpdateCup={hideUpdateModal} /> : null}
                    </div>
                </div>
            </div>

            <style>
                {`
                #SpecificCup {
                    display: flex;
                    position: relative;
                    width: 95%;
                    height: 100vh;
                }
                #SpecificCupContainer {
                    display: flex;
                    position: relative;
                    flex-direction: row;
                    width: 100%;
                    height: 100%;
                    justify-content: space-around;
                    align-items: center;
                    margin-top: 10px;
                }
                #SpecificCupImageContainer {
                    display: flex;
                    position: relative;
                    width: 50%;
                    height: 95%;
                    justify-content: center;
                    align-items: center;
                }
                #SpecifiedCupImage {
                    display: flex;
                    position: relative;
                    width: 80%;
                    height: 80%;
                    object-fit: contain;
                    justify-content: center;
                    align-items: center;
                }
                #SpecificCupTextContainer {
                    display: flex;
                    position: relative;
                    flex-direction: column;
                    width: 50%;
                    height: 65%;
                    justify-content: center;
                    align-items: center;
                }
                #SpecificCupDescriptionContainer {
                    display: flex;
                    position: relative;
                    width: 80%;
                    height: 40%;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid white;
                    transition: 0.5s;
                }
                #SpecificCupDescriptionContainer:hover {
                    border-color: grey;
                }
                #SpecificCupDescriptionContainer h1 {
                    font-size: 2rem;
                    font-weight: bold;
                    color: white;
                }
                #SpecificCupButtonContainer {
                    display: flex;
                    position: relative;
                    flex-direction: row;
                    width: 100%;
                    height: 60%;
                    justify-content: space-around;
                    align-items: center;
                }
                #SpecificCupButtonContainer button {
                    display: flex;
                    position: relative;
                    width: 170px;
                    height: 70px;
                    justify-content: center;
                    align-items: center;
                    border-radius: 30px;
                    cursor: pointer;
                    border: 1px solid white;
                    background-color: white;
                    color: black;
                    font-size: 1.5rem;
                    transition: 0.5s;
                }
                #SpecificCupButtonContainer button:hover {
                    opacity: 0.5;
                    background-color: black;
                    color: white;
                }
                #SpecificCupButtonContainer a {
                    text-decoration: none;
                }
                
                @media (max-width: 1100px) {
                    #SpecificCup {
                        height: 200vh;
                    }
                    #SpecificCupContainer {
                        flex-direction: column;
                        margin-top: 100px;
                    }
                    #SpecificCupTextContainer {
                        height: 80%;
                        border: 1px solid green;
                    }
                    #SpecificCupButtonContainer {
                        flex-direction: column;
                    }
                }
                `}
            </style>
        </div>
    )
}

export default ViewCup;