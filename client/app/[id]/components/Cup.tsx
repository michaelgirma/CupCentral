import React from "react";


export default function Cup(cup: any) {
    return (
        <div>
            <h1>{cup.cup.name}</h1>
            <img src={cup.cup.image} />
            <p>{cup.cup.description}</p>
            <p>{cup.cup.price}</p>
        </div>
    )
}