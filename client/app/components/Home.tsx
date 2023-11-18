import React from 'react';
import '../globals.css';
import { Cup } from '../../services/types';

interface HomeProps {
    cups: Cup[];
}

const Home: React.FC<HomeProps> = ({ cups }) => {

    return (
        <div id="Home">
            <div id="HomeContainer">
                <div id="CupCardsContainer">
                    {cups.map((cup: Cup) => (
                        <div id="CupCard" key={cup.id}>
                            <div id="CupImageContainer">
                                <img id="CupImage" src={cup.image} />
                            </div>
                            <div id="CupInfo">
                                <p id="CupName">{cup.title}</p>
                                <a id="LearnMore" href={`/${cup.id}`}>Learn More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>
                {`
                    #Home {
                        display: flex;
                        position: relative;
                        width: 99.5vw;
                        height: 90vh;
                        padding-top: 12vh;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    #HomeContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 100%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    #CupCardsContainer {
                        display: flex;
                        position: relative;
                        flex-direction: row;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        height: 100%;
                    }
                    #CupCard {
                        display: flex;
                        position: relative;
                        width: 500px;
                        height: 400px;
                        flex-direction: row;
                        justify-content: space-around;
                        align-items: center;
                        margin: 10px;
                        border-radius: 20px;
                        border: 1px solid white;
                    }
                    #CupImageContainer {
                        display: flex;
                        position: relative;
                        width: 40%;
                        height: 94%;
                        justify-content: center;
                        align-items: center;
                    }
                    #CupImage {
                        width: 100%;
                        height: 100%;
                    }
                    #CupInfo{
                        display: flex;
                        position: relative;
                        width: 40%;
                        height: 60%;
                        flex-direction: column;
                        justify-content: space-around;
                        align-items: center;
                    }
                    #CupName {
                        font-size: 30px;
                        font-weight: bold;
                        color: white;
                    }   
                    #LearnMore {
                        font-size: 20px;
                        text-decoration: none;
                        color: white;
                        border: 1px solid white;
                        width: 150px;
                        border-radius: 20px;
                        text-align: center;
                        transition: 0.5s;
                    }
                    #LearnMore:hover {
                        background-color: white;
                        color: black;
                    }
                `}
            </style>
        </div>
    );
};

export default Home;