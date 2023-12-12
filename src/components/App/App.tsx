import React from 'react';
import Header from '../../components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductsView from '../../views/ProductsView';
import NotFoundView from '../../views/NotFoundView';

import GeneralsHomeView from '../../views/GeneralsHomeView';
import GeneralsNewView from '../../views/GeneralsNewView';
import GeneralsStateView from '../../views/GeneralsStateView';

import ImportsFirstView from '../../views/ImportsFirstView';

function App() {
  return (
    <div>
    <Header title="MyGSE" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GeneralsHomeView />} />
          <Route path="*" element={<NotFoundView />} />
          <Route path="/home" element={<GeneralsHomeView />} />
          <Route path="/generals-new" element={<GeneralsNewView />} />
          <Route path="/generals-state" element={<GeneralsStateView />} />

          <Route path="/products" element={<ProductsView />} />
          <Route path="/imports_first" element={<ImportsFirstView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
