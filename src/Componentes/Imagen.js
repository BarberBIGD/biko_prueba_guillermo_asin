import React from "react";

const Imagen = ( {imagenUrl, name}) => {

    return (
        <div className="col-md-6 col-xs-1 d-flex justify-content-center">
            <img src={imagenUrl} alt={name}/>
        </div>
    )
}

export default Imagen; 