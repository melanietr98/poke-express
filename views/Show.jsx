import React from "react";

const myStyle = {
    color: '#191970',
    textAlign:'center',
    fontSize: '20px',
    fontFamily: "monospace",
    fontWeight: 'bold',
    padding: '10px'
    };

export default function Show(props) {
    let name = props.pokemon.name
    let capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
    let imageSrc = props.pokemon.img + '.jpg'

    return (
        <div style={myStyle}>
            <h1>Gotta Catch 'Em All</h1>
            <h2>{capitalizedName}</h2>
            <img src={imageSrc} alt="pokemon img"></img>
            <br /><br />
           <a href="/pokemon"><h2>Back</h2></a>
        </div>
    )
}