import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { obtenerProductosId } from "../Api/Productos/apiItemId";
import Imagen from "./Imagen";
import Descripcion from "./Descripcion";


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
            <div className="row py-3 justify-content-center text-center">
                <h1>Detalle Planta: {producto.name}</h1>
            </div>
            <div className="row py-3">
                <div className="col-md-4 col-xs-1 offset-md-8">
                
                </div>
            </div>
            <div className="row py-3">
                <Imagen imagenUrl={producto.imgUrl} name={producto.name} />
                <Descripcion 
                name={producto.name} 
                binomialName={producto.binomialName}
                price={producto.price}
                wateringsPerWeek={producto.wateringsPerWeek}
                fertilizerType={producto.fertilizerType}
                heightInCm={producto.heightInCm}                
                />
            </div>
        </div>
    )
}
export default ItemDetalle;