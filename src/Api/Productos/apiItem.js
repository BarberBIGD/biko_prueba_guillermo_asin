import React from "react";

const API_URL = "https://dulces-petalos.herokuapp.com/api/product";


const obtenerProductos = async () =>  {
    try {
        const respuesta = await fetch(API_URL);
        if (!respuesta.ok){
            throw new Error("No se han podido obtener los productos de la API");
        }
        
    } catch (error) {
        console.log("Error", error);
        return [];
    }

}

export { obtenerProductos };