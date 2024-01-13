import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { obtenerProductosId } from "../Api/Productos/apiItemId";


const ItemDetalle = () => {

    const { id } = useParams();
    const [producto, setProducto] = useState([]);

    useEffect( () => {
        obtenerProductosId(id).then(data => setProducto(data)); //actualizo cada vea que cambia la id
    }, [id]);

    if (!producto) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <img src={producto.imgUrl} />
        </div>
    )
}
export default ItemDetalle;