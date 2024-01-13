import React, { useEffect, useState } from 'react';
import { obtenerProductos  } from "../Api/Productos/apiItem";

const Item = () => {

    const [productos, setProductos] = useState([]);

    useEffect( () => {
        obtenerProductos().then(data => setProductos(data));
    }, []);

    console.log(productos);

    return (

            
            productos.map( producto => (
                producto.imgUrl

            )
            )

    )

}

export default Item;