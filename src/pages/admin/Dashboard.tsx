import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../../components/layout/DashboardSidebar/DashboardSidebar';
import DashboardHeader from '../../components/layout/DashboardHeader/DashboardHeader';

const Dashboard: React.FC = () => {
  return (
    <div className="d-flex">
      <DashboardSidebar />
      <div className="flex-grow-1">
        <DashboardHeader />
        <div className="container mt-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
