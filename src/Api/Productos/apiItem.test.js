import React from "react";
import nock from 'nock';
import { obtenerProductos } from "./apiItem.js";

const API_URL = 'https://dulces-petalos.herokuapp.com/api/product';

describe('obtenerProductos', () => {
    beforeEach(() => {
        nock.cleanAll();
    });

    it ('La petición api debe manejar los errores al obtener productos', async () => {
        //simulamos un error con nock para la comprobación
        nock('https://dulces-petalos.herokuapp.com').get('/api/product').reply(500);

        const productos = await obtenerProductos();

        expect(productos).toEqual([]);

    })

    afterAll(() => {
        nock.cleanAll();
    });
})