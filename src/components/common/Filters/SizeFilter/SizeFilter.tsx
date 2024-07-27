import React from 'react';
import { connectivity } from '../../../../data/connectivity';
import { Checkbox } from 'antd';

const SizeFilter: React.FC = () => {
    return (
        <>
            <h6 className='fw-bold'>Filter by Size</h6>
            <div className="filter mt-3">
                {connectivity.map(item => (
                    <div key={item.id} className='d-flex align-items-center gap-3 mt-2'>
                        <Checkbox />
                        <span>{item.connectivity}</span>
                    </div>
                ))}
            </div>
        </>
    );
}

export default SizeFilter;
