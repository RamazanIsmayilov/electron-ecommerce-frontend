import React from 'react'
import { Link } from 'react-router-dom'
import { BsDot } from "react-icons/bs";

interface DirectionProps {
    direction: string
    title: string
}

const DirectionHeader: React.FC<DirectionProps> = ({ direction, title }) => {
    return (
        <div className="direction-header d-flex flex-column align-items-center justify-content-center py-5">
            <div className="direction d-flex align-items-center gap-1">
                <Link to='/' className='text-uppercase text-dark'>Home</Link>
                <BsDot className='text-gray' />
                <p className='text-uppercase'>{direction}</p>
            </div>
            <div className="title">
                <h2 className='text-uppercase fw-bold fs-1 mt-2'>{title}</h2>
            </div>
        </div>
    )
}

export default DirectionHeader