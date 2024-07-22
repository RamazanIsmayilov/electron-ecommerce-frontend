import React from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { FaRegUser } from "react-icons/fa";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { IoStorefrontOutline } from "react-icons/io5";
import { SlHeart } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import Badge from '../../Badge/Badge';

const MobileNav: React.FC = () => {
    return (
        <div className='mobile-nav'>
            <div className="containers d-flex align-items-center justify-content-between">
                <Link to='/' className="home text-dark">
                    <IoChevronBackCircleOutline className='text-center w-100' />
                    <p className='pt-1'>Home</p>
                </Link>
                <div className="store">
                    <IoStorefrontOutline className='text-center w-100' />
                    <p className='pt-1'>Store</p>
                </div>
                <div className="cart">
                    <Badge icon={<HiOutlineShoppingBag />} count={0} />
                    <p className='pt-1'>Cart</p>
                </div>
                <div className="wishlist">
                    <Badge icon={<SlHeart />} count={0} />
                    <p className='pt-1'>Wishlist</p>
                </div>
                <div className="account">
                    <Link to='/' className='text-dark'>
                        <FaRegUser className='text-center w-100' />
                        <p className='pt-1'>Account</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MobileNav