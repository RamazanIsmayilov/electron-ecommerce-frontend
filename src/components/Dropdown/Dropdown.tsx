import React, { useState } from 'react';
import { VscChevronDown } from "react-icons/vsc";

interface DropdownProps {
    title: string;
    menuItems: string[];    
}

const Dropdown: React.FC<DropdownProps> = ({ title, menuItems }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className="dropdown">
            <button className="d-flex align-items-center gap-2 bg-transparent border-0"
                onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
                {title}
                <VscChevronDown />
            </button>
            <ul className="menu d-flex flex-column gap-2 p-3 bg-light mt-2">
                {menuItems.map((item, index) => (
                    <li key={index} className="item">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown;
