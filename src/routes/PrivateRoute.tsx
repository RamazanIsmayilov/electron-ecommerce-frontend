import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { isAdmin } from '../services/authService';
import Dashboard from '../components/admin/Dashboard';
import Products from '../components/admin/Products/Products';

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
      </Route>
    </Routes>
  );
};

export default PrivateRoute;
