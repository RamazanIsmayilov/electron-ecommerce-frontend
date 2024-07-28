import React from 'react';

const Spinner: React.FC = () => {
    return (
        <div className="spinner-overlay d-flex align-items-center justify-content-center">
            <div className="spinner"></div>
        </div>
    );
};

export default Spinner;
