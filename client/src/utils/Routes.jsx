import React from 'react';
import { Route, Routes } from  'react-router-dom';
import Home from '../components/Home';
import Register from '../components/Register';
import TableProducts from '../components/Table';

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/TableProducts" element={<TableProducts />} />
    </Routes>
  )
}

export default MyRoutes;