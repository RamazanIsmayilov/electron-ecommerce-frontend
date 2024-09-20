import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { isAdmin } from '../services/authService';
import Dashboard from '../pages/admin/Dashboard';
import Products from '../pages/admin/Products/Products';
import Categories from '../pages/admin/Categories/Categories';
import Brands from '../pages/admin/Brands/Brands';
import Colors from '../pages/admin/Colors/Colors';

const PrivateRoute: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin()) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="products" element={<Products />} />
        <Route path="categories" element={<Categories />} />
        <Route path="brands" element={<Brands />} />
        <Route path="colors" element={<Colors />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoute;
