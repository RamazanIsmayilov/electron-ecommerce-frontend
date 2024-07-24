import React from 'react'
import { Link } from 'react-router-dom'
import { RiFacebookBoxLine } from "react-icons/ri";
import { TfiTwitter } from "react-icons/tfi";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import BottomFooter from './BottomFooter/BottomFooter';

const Footer: React.FC = () => {
  return (
    <>
      <div className='footer text-light mt-5 py-5'>
        <div className="containers">
          <div className="row g-4">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="left">
                <h2 className='fw-bold'>Don't compromise on quality</h2>
                <div className="social-media mt-5">
                  <h4 className='fw-bold'>Social Media</h4>
                  <div className="d-flex gap-3">
                    <Link to='/' className='text-light mt-3 d-block fs-5'><RiFacebookBoxLine /></Link>
                    <Link to='/' className='text-light mt-3 d-block fs-5'><TfiTwitter /></Link>
                    <Link to='/' className='text-light mt-3 d-block fs-5'><FaPinterestP /></Link>
                    <Link to='/' className='text-light mt-3 d-block fs-5'><FaInstagram /></Link>
                    <Link to='/' className='text-light mt-3 d-block fs-5'><FaWhatsapp /></Link>
                    <Link to='/' className='text-light mt-3 d-block fs-5'><PiTelegramLogoDuotone /></Link>
                  </div>
                </div>
                <div className="download-apps d-flex align-items-center gap-3 mt-4">
                  <span className='text-uppercase fw-bold'>Download Apps</span>
                  <Link to='/'><img width={30} src="https://ninetheme.com/themes/electron2/wp-content/uploads/2023/08/app-store-100x100.png" alt="" /></Link>
                  <Link to='/'><img width={30} src="https://ninetheme.com/themes/electron2/wp-content/uploads/2023/08/google-play-100x100.png" alt="" /></Link>
                </div>
                <div className="subscribe mt-4">
                  <h4 className='fw-bold'>Subscribe to the newsletter</h4>
                  <div className="input-group mt-3">
                    <input type="email" className="form-control py-2" placeholder="Your E-mail" />
                    <button className="input-group-text">Submit</button>
                  </div>
                  <span className='mt-2 d-block'>Sign up to get the latest on new Products, Design news and more</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-8 col-lg-8">
              <div className="right">
                <div className="row row-cols-2 row-cols-sm-2 row-cols-md-5 g-4">
                  <div className="col mb-3">
                    <h5>About Electron</h5>
                    <ul className="nav flex-column mt-4">
                      <li className="nav-item mb-2"><Link to="/" className="nav-link p-0">Eelectron Inside</Link></li>
                      <li className="nav-item mb-2"><Link to="/" className="nav-link p-0">About Us</Link></li>
                      <li className="nav-item mb-2"><Link to="/" className="nav-link p-0">Company</Link></li>
                      <li className="nav-item mb-2"><Link to="/" className="nav-link p-0">Carrers</Link></li>
                      <li className="nav-item mb-2"><Link to="/" className="nav-link p-0">Brands</Link></li>
                    </ul>
                  </div>
                  <div className="col mb-3">
                    <h5>Brands</h5>
                    <ul className="nav flex-column mt-4">
                      <li className="nav-item mb-2"><Link to="/" className="nav-link p-0">Samsung</Link></li>
                      <li className="nav-item mb-2"><Link to="/" className="nav-link p-0">Apple</Link></li>
                      <li className="nav-item mb-2"><Link to="/" className="nav-link p-0">LG</Link></li>
                      <li className="nav-item mb-2"><Link to="/" className="nav-link p-0">Bosch</Link></li>
                      <li className="nav-item mb-2"><Link to="/" className="nav-link p-0">Beko</Link></li>
                    </ul>
                  </div>
                  <div className="col mb-3">
                    <h5>Bestseller</h5>
                    <ul className="nav flex-column mt-4">
                      <li className="nav-item mb-2"><Link to="/" className="nav-link p-0">Iphone 14 Pro Max</Link></li>
                      <li className="nav-item mb-2"><Link to="/" className="nav-link p-0">Iphone 13 Pro Max</Link></li>
                      <li className="nav-item mb-2"><Link to="/" className="nav-link p-0">Samsung Note 21 Ultra</Link></li>
                      <li className="nav-item mb-2"><Link to="/" className="nav-link p-0">Xiomi Vacuum Cleenar</Link></li>
                      <li className="nav-item mb-2"><Link to="/" className="nav-link p-0">Xiomi Vacuum Cleenar</Link></li>
                    </ul>
                  </div>
                  <div className="col mb-3">
                    <h5>Smart Phones</h5>
                    <ul className="nav flex-column mt-4">
                      <li className="nav-item mb-2"><Link to="/" className="nav-link p-0">Galaxy A54</Link></li>
                      <li className="nav-item mb-2"><Link to="/" className="nav-link p-0">Galaxy S23</Link></li>
                      <li className="nav-item mb-2"><Link to="/" className="nav-link p-0">Galaxy Z Fold4</Link></li>
                      <li className="nav-item mb-2"><Link to="/" className="nav-link p-0">Iphone SE</Link></li>
                      <li className="nav-item mb-2"><Link to="/" className="nav-link p-0">Iphone 14 Pro</Link></li>
                    </ul>
                  </div>
                  <div className="col mb-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomFooter />
    </>
  )
}

export default Footer