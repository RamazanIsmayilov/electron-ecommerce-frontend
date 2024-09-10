import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DashboardSidebar: React.FC = () => {
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);

  const toggleProductMenu = () => {
    setIsProductMenuOpen(!isProductMenuOpen);
  };

  return (
    <div className="d-flex flex-column vh-100 bg-dark text-white p-3" style={{ width: '250px' }}>
      <h4>Dashboard</h4>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <button
            onClick={toggleProductMenu}
            className="nav-link text-white btn btn-link text-left"
            style={{ width: '100%' }}
          >
            Products {isProductMenuOpen ? "▲" : "▼"}
          </button>

          {isProductMenuOpen && (
            <ul className="nav flex-column ms-3">
              <li className="nav-item">
                <Link to="/admin/products/all" className="nav-link text-white">All Products</Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/products/categories" className="nav-link text-white">Categories</Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/products/brands" className="nav-link text-white">Brands</Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/products/sizes" className="nav-link text-white">Sizes</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
