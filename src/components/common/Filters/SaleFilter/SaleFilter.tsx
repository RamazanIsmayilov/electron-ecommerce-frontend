import React from 'react'
import { ReactComponent as SaleIcon } from "../../../../assets/icons/sale.svg";

const SaleFilter: React.FC = () => {
    return (
        <button className='text-uppercase d-flex align-items-center rounded-3 gap-2'>
            <SaleIcon />
            New
        </button>
    )
}

export default SaleFilter