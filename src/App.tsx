import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import rutas from './utils/ListaRutas';
import Menu from './utils/Menu';

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className='container'>
          <Routes>
            {rutas.map(ruta => <Route key={ruta.path} path={ruta.path} element={<ruta.componente />} />)}

            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
