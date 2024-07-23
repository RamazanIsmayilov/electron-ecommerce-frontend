import React from 'react'
import { FaRegNoteSticky } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Dropdown from '../../../common/Dropdown/Dropdown';

const HeaderTop: React.FC = () => {
  return (
    <div className='header-top'>
      <div className="containers d-flex align-items-center justify-content-between py-2">
        <div className="left d-flex align-items-center gap-2">
          <div className="languages">
            <Dropdown
              title="Languages"
              menuItems={['Azerbaijan', 'English', 'Russian']}
            />
          </div>
          <div className="quick-help">
            <Dropdown
              title="Quick Help"
              menuItems={['Contact', 'FAQ', 'Find Us']}
            />
          </div>
        </div>
        <div className="center d-flex align-items-center gap-2 text-light rounded-2 fw-bold">
          <FaRegNoteSticky />
          <span>FREE SHIPPING FOR ALL ORDERS OF $340</span>
        </div>
        <div className="right d-flex align-items-center gap-3">
          <Link to='/'><FaFacebookF className='text-dark' /></Link>
          <Link to='/'><FaInstagram className='text-dark' /></Link>
          <Link to='/'><FaTwitter className='text-dark' /></Link>
          <Link to='/'><FaWhatsapp className='text-dark' /></Link>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop