import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GoHome } from "react-icons/go";
import { IoMdBook } from "react-icons/io";
import { LuContact2 } from "react-icons/lu";
import { CgShoppingBag } from "react-icons/cg";
import { BiConversation } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from '../../../../assets/images/Header/logo.png'
import { HiOutlineShoppingBag, HiOutlineUserCircle } from 'react-icons/hi2';
import { SlHeart, SlRefresh } from 'react-icons/sl';
import OffcanvasMenu from '../../../common/OffcanvasMenu/OffcanvasMenu';
import CategoryMenu from '../../../common/CategoryMenu/CategoryMenu';
import Badge from '../../../common/Badge/Badge';

const HeaderBottom: React.FC = () => {

  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };
  return (
    <div className='header-bottom'>
      <div className="containers d-flex align-items-center justify-content-between">
        <div className="left d-flex align-items-center gap-4">
          <div className="category-menu"><CategoryMenu /></div>
          <div className="main-menu">
            <nav>
              <ul className='d-flex align-items-center gap-4'>
                <li>
                  <NavLink to='/' className='d-flex align-items-center gap-1'>
                    <GoHome />
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/about' className='d-flex align-items-center gap-1'>
                    <IoMdBook />
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/contact' className='d-flex align-items-center gap-1'>
                    <LuContact2 />
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/shop' className='d-flex align-items-center gap-1'>
                    <CgShoppingBag />
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/blog' className='d-flex align-items-center gap-1'>
                    <BiConversation />
                    Blog
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="right d-flex align-items-center gap-4">
          <Link to='/shop' className='text-uppercase fw-bold'>Flash Deals</Link>
          <Link to='/shop' className='text-uppercase fw-bold'>New Arrivals</Link>
          <Link to='/shop' className='text-uppercase fw-bold'>Super Sale!</Link>
          <Link to='/shop' className='text-uppercase fw-bold'>Outlet</Link>
        </div>
        <div className="mobile align-items-center justify-content-between w-100">
          <div className='d-flex align-items-center gap-3'>
            <button onClick={toggleOffcanvas} className='bg-transparent border-0 fs-4'><GiHamburgerMenu /></button>
            <img width={110} src={Logo} alt="logo" />
          </div>
          <div className="d-flex gap-3">
            <div className="cart">
              <Badge icon={<HiOutlineShoppingBag className='fs-4' />} count={0} />
            </div>
            <div className="compare">
              <Badge icon={<SlRefresh className='fs-4' />} count={0} />
            </div>
            <div className="wishlist">
              <Badge icon={<SlHeart className='fs-4' />} count={0} />
            </div>
            <div className="account">
              <button className='bg-transparent border-0 pe-0'><HiOutlineUserCircle className='fs-3' /></button>
            </div>
          </div>
        </div>
      </div>
      {isOffcanvasOpen && <OffcanvasMenu onClose={toggleOffcanvas} />}
    </div>
  )
}

export default HeaderBottom
