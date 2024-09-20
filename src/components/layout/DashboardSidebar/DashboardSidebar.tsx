import React from 'react';
import { GoDot } from "react-icons/go";
import { NavLink } from 'react-router-dom';

const DashboardSidebar: React.FC = () => {


  return (
    <div className="dashboard-sidebar text-light">
      <div className="title border-bottom border-secondary text-center py-2">
        <h2 className='fs-3'>Dashboard</h2>
      </div>
      <div className="container">
        <nav className='py-4'>
          <ul className='d-flex flex-column gap-4'>
            <li>
              <NavLink to='/dashboard/products' className='d-flex aligm-items-center gap-2'><GoDot />Products</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/categories' className='d-flex aligm-items-center gap-2'><GoDot />Categories</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/brands' className='d-flex aligm-items-center gap-2'><GoDot />Brands</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/colors' className='d-flex aligm-items-center gap-2'><GoDot />Colors</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DashboardSidebar;
