import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isAdmin } from '../services/authService';

interface ProtectedRouteProps {
  element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const location = useLocation();

  if (isAdmin()) {
    return element; 
  } else {
    return <Navigate to="/home" state={{ from: location }} replace />;
  }
};

export default ProtectedRoute;
