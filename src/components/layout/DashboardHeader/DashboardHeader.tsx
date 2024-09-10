import React from 'react';

const DashboardHeader: React.FC = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid d-flex align-items-center justify-content-end">
                <form>
                    <input className="form-control shadow-none me-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
            </div>
        </nav>
    );
};

export default DashboardHeader;
