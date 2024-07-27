import React from 'react';
import { brand } from '../../../../data/brand';
import { Checkbox } from 'antd';

const BrandFilter: React.FC = () => {
    return (
        <>
            <h6 className='fw-bold'>Product Brands</h6>
            <div className="filter mt-3">
                {brand.map(item => (
                    <div key={item.id} className='d-flex align-items-center gap-3 mt-2'>
                        <Checkbox />
                        <span>{item.brand}</span>
                    </div>
                ))}
            </div>
        </>
    );
}

export default BrandFilter;
