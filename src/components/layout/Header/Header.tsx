import React, { useContext } from "react";
import Logo from "../../../assets/images/Header/logo.png";
import { Link } from "react-router-dom";
import { ImWhatsapp } from "react-icons/im";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { SlRefresh } from "react-icons/sl";
import { SlHeart } from "react-icons/sl";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { Popover } from "antd";
import { ReactComponent as BellIcon } from "../../../assets/icons/bell.svg";
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import MobileNav from "./MobileNav/MobileNav";
import Badge from "../../common/Badge/Badge";
import Search from "../../common/Search/Search";
import { CartContext } from "../../../context/CartContext";
import { WishlistContext } from "../../../context/WishlistContext";

const content = (
  <div>
    <p>
      Shocking Campaign! 5% discount on the <br /> phones, last 20 stocks!
    </p>
    <p className="mt-2">
      Shocking Campaign! 5% discount on the <br /> phones, last 12 stocks!
    </p>
  </div>
);

const Header: React.FC = () => {
  const { totalQuantity } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  return (
    <>
      <HeaderTop />
      <header>
        <div className="containers d-flex align-items-center justify-content-between py-4">
          <div className="logo">
            <Link to="/">
              <img width={110} src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="search">
            <Search />
          </div>
          <div className="right d-flex gap-3">
            <div className="phone">
              <Link
                to="tel:2809003434"
                className="d-flex align-items-center gap-3"
              >
                <div className="icon">
                  <ImWhatsapp className="wp-icon fs-3 text-success" />
                </div>
                <div className="content d-flex flex-column gap-1">
                  <span className="text-uppercase fw-bold">Call anytime</span>
                  <span className="text-dark fw-bold">280 900 3434</span>
                </div>
              </Link>
            </div>
            <div className="cart">
              <Link to="/cart">
                <Badge
                  icon={<HiOutlineShoppingBag className="fs-4" />}
                  count={totalQuantity()}
                />
              </Link>
            </div>
            <div className="compare">
              <Badge icon={<SlRefresh className="fs-4" />} count={0} />
            </div>
            <div className="wishlist">
              <Link to='/wishlist'>
                <Badge
                  icon={<SlHeart className="fs-4" />}
                  count={wishlist.length}
                />
              </Link>
            </div>
            <div className="account">
              <button className="bg-transparent border-0 pe-0">
                <HiOutlineUserCircle className="fs-3" />
              </button>
            </div>
            <div className="notification">
              <Popover placement="bottomRight" content={content}>
                <button className="bg-transparent border-0 p-0">
                  <BellIcon />
                </button>
              </Popover>
            </div>
          </div>
        </div>
      </header>
      <HeaderBottom />
      <MobileNav />
    </>
  );
};

export default Header;
