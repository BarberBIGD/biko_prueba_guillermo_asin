const API_URL = "https://dulces-petalos.herokuapp.com/api/product";

//casi la misma petición pero ahora esperamos el parámetro id para obtener el producto específico
const obtenerProductosId = async (id) =>  {
    try {
        const respuesta = await fetch(`${API_URL}/${id}`);
        if (!respuesta.ok){
            throw new Error("No se han podido obtener el producto para esa id");
        }
        const datos = await respuesta.json();
        return datos;
        
    } catch (error) {
        console.log("Error", error);
        return [];
    }

}

export { obtenerProductosId };