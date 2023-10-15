import React from "react";

export default function Header() {
    return (
        <div id="Header">
            <div id="HeaderContainer">
                <div id="Title">
                    <p id="TitleText">CupCentral</p>
                </div>
                <div id="MenuButtons">
                    <a href="/new"><button>Create A Cup</button></a>
                </div>
            </div>
        <style>
            {`

                #Header{
                    display: flex;
                    position: relative; 
                    height: 150px;
                    width: 100%;
                    justify-content: center;
                    align-items: center;
                }
                #HeaderContainer{
                    display: flex;
                    position: relative;
                    height: 100%;
                    width: 100%;
                    justify-content: space-between;
                    align-items: center;
                }
                #Title{
                    display: flex;
                    position: relative;
                    height: 100%;
                    width: 100%;
                    justify-content: flex-start;
                    align-items: center;
                    padding-left: 50px;
                }
                #TitleText{
                    display: flex;
                    position: relative;
                    font-size: 5rem;
                    font-weight: bold;
                    color: white;
                }
                #MenuButtons{
                    display: flex;
                    position: relative;
                    height: 100%;
                    width: 100%;
                    justify-content: flex-end;
                    align-items: center;
                    padding-right: 50px;
                }
                #MenuButtons button{
                    display: flex;
                    position: relative;
                    height: 50px;
                    width: 100px;
                    justify-content: center;
                    align-items: center;
                    border-radius: 30px;
                    background-color: white;
                    border: none;
                    cursor: pointer;
                    text-decoration: none;
                }
                #MenuButtons button:hover{
                    transform: scale(1.2); 
                    transition: transform 0.4s ease-in-out;
                    opacity: 0.5;
                }
                #MenuButtons a{
                    text-decoration: none;
                }
            
            `}
        </style>
        </div>
    )
}