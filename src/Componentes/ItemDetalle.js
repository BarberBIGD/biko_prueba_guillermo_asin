import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { obtenerProductosId } from "../Api/Productos/apiItemId";
import Imagen from "./Imagen";


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
            <div className="row">
                <div className="col-md-4 col-xs-1 offset-md-8">
                
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-xs-1 d-flex justify-content-center">
                    <Imagen imagenUrl={producto.imgUrl} name={producto.name} />
                </div>
                <div className="col-md-6 col-xs-1 d-flex justify-content-center">
                    
                </div>
            </div>
        </div>
    )
}
export default ItemDetalle;