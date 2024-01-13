import React from "react";

const Descripcion = ( {name, binomialName, price, wateringsPerWeek, fertilizerType, heightInCm }) => {

    return (
        <div className="col-md-6 col-xs-1 d-flex flex-column justify-content-center">
            <h3>Nombre: {name}</h3>
            <ul>
                <li>
                    <p>Nombre Científico: {binomialName}</p>
                </li>
                <li>
                    <p>Precio: {price} €</p>
                </li>
                <li>
                    <p>Riegos por semana: {wateringsPerWeek}</p>
                </li>
                <li>
                    <p>Tipo de Festilizante: {fertilizerType}</p>
                </li>
                <li>
                    <p>Altura de la Planta: {heightInCm}</p>
                </li>
            </ul>
        </div>
        
    )
}

export default Descripcion; 