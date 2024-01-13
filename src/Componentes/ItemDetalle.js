import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { obtenerProductos } from "../Api/Productos/apiItem";
import Imagen from "./Imagen";
import Descripcion from "./Descripcion";
import { useNavigate } from 'react-router-dom';


const ItemDetalle = () => {

    const { id } = useParams();
    const [producto, setProducto] = useState([]);
    const navegacion = useNavigate();

    const handleClick = () => { //react ya hace los addEventListerner por su cuenta
        navegacion(-1); 
      };

    useEffect( () => {
        obtenerProductos(id).then(data => setProducto(data)); //actualizo cada vea que cambia la id
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
                    <button onClick={handleClick}>
                        VOLVER ATRÁS
                    </button>
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