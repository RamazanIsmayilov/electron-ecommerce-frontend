import React from 'react'

const PriceFilter: React.FC = () => {
    return (
        <>
            <h6 className='fw-bold'>Filter by price</h6>
            <input type="range" className="form-range mt-3" id="min-range" />
            <div className="bottom d-flex align-items-center justify-content-between mt-2">
                <button className='text-uppercase text-white border-0 rounded-1'>Filter</button>
                <span className='fw-bold'>Price: $10</span>
            </div>
        </>
    )
}

export default PriceFilter