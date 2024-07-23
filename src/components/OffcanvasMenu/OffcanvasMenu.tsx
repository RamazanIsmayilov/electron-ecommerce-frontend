import React, { useState } from 'react'
import { BiConversation } from 'react-icons/bi'
import { CgShoppingBag } from 'react-icons/cg'
import { GoHome } from 'react-icons/go'
import { IoMdBook } from 'react-icons/io'
import { LuContact2 } from 'react-icons/lu'
import { Link } from 'react-router-dom'

const OffcanvasMenu: React.FC = () => {
  const [showMainMenu, setShowMainMenu] = useState(true)
  const [showCategoriesMenu, setShowCategoriesMenu] = useState(false)

  const toggleMainMenu = () => {
    setShowMainMenu(true)
    setShowCategoriesMenu(false)
  }

  const toggleCategoriesMenu = () => {
    setShowMainMenu(false)
    setShowCategoriesMenu(true)
  }

  return (
    <div className='offcanvas-menu bg'>
      <div className="heading">
        <button
          className='text-uppercase border-0 fw-bold'
          onClick={toggleMainMenu}
          style={{
            backgroundColor: showMainMenu ? '#F7F7F8' : '#fff'
          }}
        >Menu
        </button>
        <button
          className='text-uppercase border-0 fw-bold'
          onClick={toggleCategoriesMenu}
          style={{
            backgroundColor: showCategoriesMenu ? '#F7F7F8' : '#fff'
          }}
        >
          Categories
        </button>
      </div>
      <div className="menu">
        <div className={`${showMainMenu ? 'd-block' : 'd-none'}`}>
          <nav>
            <ul>
              <li>
                <Link to='/' className='d-flex align-items-center gap-2 text-dark'>
                  <GoHome />
                  Home
                </Link>
              </li>
              <li>
                <Link to='/about' className='d-flex align-items-center gap-2 text-dark'>
                  <IoMdBook />
                  About
                </Link>
              </li>
              <li>
                <Link to='/contact' className='d-flex align-items-center gap-2 text-dark'>
                  <LuContact2 />
                  Contact
                </Link>
              </li>
              <li>
                <Link to='/shop' className='d-flex align-items-center gap-2 text-dark'>
                  <CgShoppingBag />
                  Shop
                </Link>
              </li>
              <li>
                <Link to='/blog' className='d-flex align-items-center gap-2 text-dark'>
                  <BiConversation />
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={`${showCategoriesMenu ? 'd-block' : 'd-none'}`}>
          <nav>
            <ul>
              <li>Accessories</li>
              <li>Buds</li>
              <li>Laptop</li>
              <li>Mobile</li>
              <li>Monitors</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default OffcanvasMenu
