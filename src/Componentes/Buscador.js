import React from "react";
import { Form } from 'react-bootstrap';

const Buscador = ( {busqueda, handleChange} ) => {
    return (
        <div className="row py-3">
            <div className="col-md-6 col-xs-1 offset-md-6">
            <Form id="buscador" name="buscador" className="mb-3">
                <Form.Control
                type="text"
                placeholder="Buscar productos..."
                value={busqueda}
                onChange={handleChange}
                />
            </Form>
            </div>
        </div>
    )
}

export default Buscador;