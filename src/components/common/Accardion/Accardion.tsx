import React from 'react';
import { IoChevronDownOutline } from "react-icons/io5";
import { IoChevronUpOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

interface AccardionProps {
    title: string;
    menuItems: string[];
    index: number;
    isOpen: boolean;
    onToggle: (index: number) => void;
}

const Accardion: React.FC<AccardionProps> = ({ title, menuItems, index, isOpen, onToggle }) => {
    const handleToggle = () => {
        onToggle(index);
    }

    return (
        <div className='accordion'>
            <button
                className='d-flex align-items-center justify-content-between w-100'
                onClick={handleToggle}
                style={{ backgroundColor: isOpen ? '#F7F7F8' : 'transparent' }}
            >
                {title}
                {isOpen ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
            </button>
            <nav className={`${isOpen ? 'd-block' : 'd-none'}`}>
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index} className="item">
                            <Link to='/' className='text-dark'>
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Accardion;
