import React from 'react';
import { size } from '../../../../data/size';
import { Checkbox } from 'antd';

const ConnectivityFilter: React.FC = () => {
    return (
        <>
            <h6 className='fw-bold'>Filter by Connectivity</h6>
            <div className="filter mt-3">
                {size.map(item => (
                    <div key={item.id} className='d-flex align-items-center gap-3 mt-2'>
                        <Checkbox />
                        <span>{item.size}</span>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ConnectivityFilter;
