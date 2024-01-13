const API_URL = "https://dulces-petalos.herokuapp.com/api/product";

let respuesta;

const obtenerProductos = async (id) =>  {
    //console.log(id);
        try {
        if ( id === '' || id === undefined ){
             respuesta = await fetch(API_URL);
        } else {
             respuesta = await fetch(`${API_URL}/${id}`);
        }
        if (!respuesta.ok){
            throw new Error("No se han podido obtener los productos de la API");
        }
        const datos = await respuesta.json();
        return datos;
        
    } catch (error) {
        console.log("Error", error);
        return [];
    }

}

export { obtenerProductos };