import React from 'react';
import { category } from '../../../../data/category';
import { Checkbox } from 'antd';

const CategoryFilter: React.FC = () => {
    return (
        <>
            <h6 className='fw-bold'>Product Categories</h6>
            <div className="filter mt-3">
                {category.map(item => (
                    <div key={item.id} className='d-flex align-items-center gap-3 mt-2'>
                        <Checkbox />
                        <span>{item.category}</span>
                    </div>
                ))}
            </div>
        </>
    );
}

export default CategoryFilter;
