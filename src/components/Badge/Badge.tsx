import React from 'react'

interface BadgeProps{
    icon?: any;
    count?: number
}

const Badge: React.FC<BadgeProps> = ({icon, count}) => {
    return (
        <>
            <button type="button" className="bg-transparent border-0 position-relative">
                {icon}
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                    {count}
                </span>
            </button>
        </>
    )
}

export default Badge