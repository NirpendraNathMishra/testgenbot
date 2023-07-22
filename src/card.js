import React from "react";
import "./card.css"

const Cards = (props) => {
    return (
        <div id="Carddiv">
            <img src={`https://robohash.org/${props.id}?200*200`} alt="robo"></img>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}




export default Cards;