'use client'
import React, {useState} from "react";
import DeleteCupById from "@/services/DELETE/DeleteCupById";
import UpdateCup from "./UpdateCup"


export default function Cup(cup: any) {
    const id = cup.cup.id;

    const [showUpdate, setShowUpdate] = useState(false);

    const deleteCup = () => {
        DeleteCupById(id);
    }

    const showUpdateModal = () => {
        setShowUpdate(true);
    }

    const hideUpdateModal = () => {
        setShowUpdate(false);
    }

    return (
        <div>
            <h1>{cup.cup.name}</h1>
            <img src={cup.cup.image} />
            <p>{cup.cup.description}</p>
            <p>{cup.cup.price}</p>
            <button onClick={deleteCup}>Delete</button>
            <button onClick={showUpdateModal}></button>
            {showUpdate ? <UpdateCup id={id} cup={cup.cup} hideUpdateCup={hideUpdateModal} /> : null}
        </div>
    )
}