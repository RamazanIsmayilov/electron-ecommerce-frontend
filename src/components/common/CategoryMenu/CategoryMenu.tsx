import React from 'react'
import { FaBars } from "react-icons/fa";
import { VscChevronDown } from "react-icons/vsc";
import { MdChevronRight } from "react-icons/md";
import { Link } from 'react-router-dom';
import { menuItem } from '../../../data/category-menu';

const CategoryMenu: React.FC = () => {
    return (
        <div className='category-menu'>
            <button className='d-flex align-items-center justify-content-between gap-5 border-0 p-3'>
                <div className='d-flex align-items-center justify-content-between gap-3'>
                    <FaBars />
                    CATEGORIES
                </div>
                <VscChevronDown />
            </button>
            <ul className='menu bg-light'>
                {menuItem.map(item => (
                    <li key={item.id} className='list'>
                        <Link to='/' className='d-flex align-items-center justify-content-between gap-3'>
                            <div className='d-flex align-items-center justify-content-between gap-2'>
                                <img className='rounded-1 p-1' width={30} height={30} src={item.image} alt={item.title} />
                                <span>{item.title}</span>
                            </div>
                            {item.subItems && (
                                <MdChevronRight />
                            )}
                        </Link>
                        {item.subItems && (
                            <ul className='submenu bg-light'>
                                {item.subItems.map(subItem => (
                                    <li key={subItem.id} className='list'>
                                        <Link to='/' className='d-flex align-items-center gap-3'>
                                            <img className='rounded-1 p-1' width={30} height={30} src={subItem.image} alt={subItem.title} />
                                            <span>{subItem.title}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CategoryMenu