import React from 'react'
import { ReactComponent as BestsellerIcon } from "../../../../assets/icons/bestseller.svg";

const NewFilter: React.FC = () => {
    return (
        <button className='text-uppercase d-flex align-items-center rounded-3 gap-2'>
            <BestsellerIcon />
            Sale
        </button>
    )
}

export default NewFilter