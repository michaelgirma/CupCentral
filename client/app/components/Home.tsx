import '../globals.css'


export default function Home(cups: any) {

    return ( 
        <div id="Home">
            <div id="HomeContainer">
                <div id="CupCardsContainer">
                    {cups.cups.map((cup:any) => (
                        <div id="CupCard" key={cup.id}>
                            <div id="CupImageContainer">
                                <img src={cup.image} alt="Cup Image" id="CupImage"/>
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
                #Home{
                    display: flex;
                    position: relative;
                    width: 99%;
                    height: 180vh;
                }
                #HomeContainer{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                }
                #CupCardsContainer{
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                    overflow-y: scroll;
                }
                #CupCard{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    width: 250px;
                    height: 700px;
                    margin: 10px;
                    border: 1px solid white;
                }
                #CupImageContainer{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 80%;
                }
                #CupImage{
                    width: 100%;
                    height: 100%;
                }
                #CupInfo{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 15%;
                }
                #CupName{
                    font-size: 20px;
                    font-weight: bold;
                    color: white;
                }
                #CupPrice{
                    font-size: 15px;
                    color: white;
                }
                #LearnMore{
                    font-size: 15px;
                    color: white;
                }
               
            `}
        </style>
        </div>
    )
}