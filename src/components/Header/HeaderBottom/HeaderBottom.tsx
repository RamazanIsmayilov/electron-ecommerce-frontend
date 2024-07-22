import React from 'react'
import CategoryMenu from '../../CategoryMenu/CategoryMenu'
import { Link, NavLink } from 'react-router-dom'
import { GoHome } from "react-icons/go";
import { IoMdBook } from "react-icons/io";
import { LuContact2 } from "react-icons/lu";
import { CgShoppingBag } from "react-icons/cg";
import { BiConversation } from "react-icons/bi";

const HeaderBottom: React.FC = () => {
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
      </div>
    </div>
  )
}

export default HeaderBottom