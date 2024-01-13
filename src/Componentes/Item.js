import React, { useEffect, useState } from 'react';
import { obtenerProductos  } from "../Api/Productos/apiItem";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Buscador from './Buscador';



const Item = () => {

    const [productos, setProductos] = useState([]);
    // lo inicio en cero para que este vacío al principio y no cumpla la condición
    // y se muestren todos los productos
    const [busqueda, setBusqueda] = useState('');

    useEffect( () => {
        obtenerProductos().then(data => setProductos(data)); //actualizo cada vea que cambia
    }, []);

    //vamos a dividir productos en arrays de 4

    const dividirDatos = (productos, nGrupos) => {
        const grupos = [];

        for (let i=0; i < productos.length; i += nGrupos){
            grupos.push(productos.slice(i, i + nGrupos)) //Primer caso sería slice(0, 3), segundo (4, 7)
        }

        return grupos;
    }

    //const productosGrupos = dividirDatos(productos, 4);


    const productosFiltrados = productos.filter(producto => 
        producto.name.toLowerCase().includes(busqueda.toLowerCase()) ||
        producto.binomialName.toLowerCase().includes(busqueda.toLowerCase())
    );

    //console.log(productosFiltrados);

    const productosGrupos = dividirDatos(productosFiltrados, 4);

    //console.log(productosGrupos);

    //console.log(productos);

    //evento entrada buscador

    const handleChange = e => {
        setBusqueda(e.target.value);
        //console.log(e.target.value);
      };


    if (!productos) {
        return <div>Cargando...</div>;
    }

    return (
        <Container>
            <Buscador busqueda={busqueda} handleChange={handleChange}/>
            {productosGrupos.map( (productosGrupo, index) => (
                // cada elemento debe tener una clave unica
                <Row key={index} md={4} xs={1} className='py-2'> 
                    {productosGrupo.map( producto => (
                        <Col key={producto.id}>
                            <Link to={`/Productos/${producto.id}`} style={{ textDecoration: 'none' }}>
                            <Card className="h-100">
                            <Card.Img src={producto.imgUrl} style={{ height: '50%', width: '100%', objectFit: 'cover' , objectPosition: 'center'}} />
                                <Card.Body className='d-flex m-2 justify-content-center align-items-start flex-column'>
                                    <Card.Title>Nombre: {producto.name}</Card.Title>
                                    <Card.Text>Científico: {producto.binomialName}</Card.Text>
                                    <Card.Text>Precio: {producto.price} €</Card.Text>
                                </Card.Body>
                            </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>                
            ))}
        </Container>            
    )
}

export default Item;