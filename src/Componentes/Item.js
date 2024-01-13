import React, { useEffect, useState } from 'react';
import { obtenerProductos  } from "../Api/Productos/apiItem";

const Item = () => {

    const [productos, setProductos] = useState([]);

    useEffect( () => {
        obtenerProductos().then(data => setProductos(data)); //actualizo cada vea que cambia
    }, []);

    //vamos a dividir productos en arrays de 4

    const dividirDatos = (productos, nGrupos) => {
        const grupos = [];

        for (let i=0; i < productos.length; i+= nGrupos){
            grupos.push(productos.slice(i, i + nGrupos)) //Primer caso sería slice(0, 3), segundo (4, 7)
        }

        return grupos;
    }

    const productosGrupos = dividirDatos(productos, 4);


    //console.log(productos);

    return (

            productosGrupos.map(productosGrupo => (
                productosGrupo.map( producto => (
                    <img src={producto.imgUrl} />
                ))
            ))
    )

}

export default Item;