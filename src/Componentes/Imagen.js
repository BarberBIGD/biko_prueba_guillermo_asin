import React from "react";

const Imagen = ( {imagenUrl, name}) => {

    return (
        <img src={imagenUrl} alt={name}/>
    )
}

export default Imagen; 