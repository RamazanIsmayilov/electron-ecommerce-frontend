import React from 'react'
import Logo from '../../assets/images/Header/logo.png'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'
import { ImWhatsapp } from "react-icons/im";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FiRefreshCcw } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import Badge from '../Badge/Badge';

const Header: React.FC = () => {
  return (
    <div className='header py-4'>
      <div className="container">
        <div className="row  align-items-center">
          <div className="col-12 col-sm-12 col-md-2 col-lg-2">
            <div className="logo">
              <Link to='/'>
                <img width={110} src={Logo} alt="logo" />
              </Link>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-5">
            <div className="search">
              <Search />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-5">
            <div className="right d-flex gap-3">
              <div className="phone">
                <Link to='tel:2809003434' className='d-flex align-items-center gap-3'>
                  <div className="icon">
                    <ImWhatsapp className='wp-icon fs-3 text-success' />
                  </div>
                  <div className="content d-flex flex-column gap-1">
                    <span className='text-uppercase fw-bold'>Call anytime</span>
                    <span className='text-dark fw-bold'>280 900 3434</span>
                  </div>
                </Link>
              </div>
              <div className="cart">
                <Badge icon={<HiOutlineShoppingBag className='fs-4' />} count={0} />
              </div>
              <div className="compare">
                <Badge icon={<FiRefreshCcw className='fs-4' />} count={0} />
              </div>
              <div className="wishlist">
                <Badge icon={<FaRegHeart className='fs-4' />} count={0} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header