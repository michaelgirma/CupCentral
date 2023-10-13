import '../globals.css'


export default function Home(cups: any) {

    console.log(cups)
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
                                <p id="CupName">{cup.name}</p>
                                <p id="CupPrice">{cup.price}</p>
                                <a id="LearnMore" href={`/${cup.id}`}>Learn More</a>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        <style>
            {`
                #Home{
                    border: 1px solid white;
                }
                #LearnMore{
                    color: white;
                }
            `}
        </style>
        </div>
    )
}