// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './components/ProductPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        {/* Aquí irán las otras rutas */}
      </Routes>
    </Router>
  );
};

export default App;