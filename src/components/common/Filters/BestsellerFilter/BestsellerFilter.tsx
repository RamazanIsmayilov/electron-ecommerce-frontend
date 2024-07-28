import React from 'react'
import { ReactComponent as BestsellerIcon } from "../../../../assets/icons/bestseller.svg";

const BestsellerFilter: React.FC = () => {
    return (
        <button className='text-uppercase d-flex align-items-center rounded-3 gap-2'>
            <BestsellerIcon />
            Best sellers
        </button>
    )
}

export default BestsellerFilter