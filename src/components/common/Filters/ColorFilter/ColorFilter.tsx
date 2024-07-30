import React from 'react';
import { color } from '../../../../data/color';

const ColorFilter: React.FC = () => {
    return (
        <>
            <h6 className='fw-bold'>Filter by Color</h6>
            <div className="filter mt-3">
                {color.map(item => (
                    <div key={item.id} className='d-flex align-items-center gap-3 mt-2'>
                        <button key={item.id} className='p-2 border-0 rounded-1' style={{ backgroundColor: item.color.toLowerCase() }}></button>
                        <span>{item.color}</span>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ColorFilter;
