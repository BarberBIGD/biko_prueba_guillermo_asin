import logo from './Recursos/logo.svg';
import Item from './Componentes/Item';
import ItemDetalle from './Componentes/ItemDetalle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {
  return (
    //vamos a implantar react-router-dom, está decisión se tomo a la hora de enfocar la prueba
    //es la manera mas apropiada para poder hacer SPA y manejarnos con el detalle de los items
    <Router>
      <Container>
        <Routes>
          {/* establecemos el elemento raiz de la ruta */}
          <Route path="/" element={<Item />} /> 
          {/* establecemos el elemento detalle */}
          <Route path="/item/:id" element={<ItemDetalle />} /> 
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
