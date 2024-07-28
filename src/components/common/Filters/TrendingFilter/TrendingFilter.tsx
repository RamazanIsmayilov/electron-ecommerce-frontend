import React from 'react'
import { ReactComponent as TrendingIcon } from "../../../../assets/icons/trending.svg";


const TrendingFilter: React.FC = () => {
    return (
        <button className='text-uppercase d-flex align-items-center rounded-3 gap-2'>
            <TrendingIcon />
            Trending
        </button>
    )
}

export default TrendingFilter