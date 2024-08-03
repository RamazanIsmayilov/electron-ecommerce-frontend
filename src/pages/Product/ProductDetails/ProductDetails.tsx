import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import slugify from 'react-slugify';
import { ProductContext } from '../../../context/ProductContext'
import Spinner from '../../../components/common/Spinner/Spinner';
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { SlRefresh } from "react-icons/sl";

const ProductDetails: React.FC = () => {
  const { productId } = useParams()
  const { products } = useContext(ProductContext)
  const productDetails = products.filter(p => slugify(p.title) === productId)

  return (
    <>
      {products.length === 0 ? <Spinner /> :
        <div className="product-detail my-5">
          <div className="containers">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="left">
                  <img width={500} src={productDetails[0]?.images[0]} alt="" />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="right">
                  <div className="navigation d-flex align-items-center gap-2">
                    <Link to='/' className='text-dark text-uppercase'>Home</Link>
                    <span></span>
                    <Link to='/shop' className='text-dark text-uppercase'>Products</Link>
                    <span></span>
                    <p className='fw-bold text-uppercase'>{productDetails[0]?.title}</p>
                  </div>
                  <h4 className='title fw-bold mt-3'>{productDetails[0]?.title}</h4>
                  <p className={`badge bestseller text-uppercase fw-bold mt-3 ${productDetails[0].bestseller ? 'd-inline-block' : 'd-none'}`}>{productDetails[0].bestseller && "bestseller"}</p>
                  <p className={`badge new text-uppercase fw-bold mt-3 ${productDetails[0].new ? 'd-inline-block' : 'd-none'}`}>{productDetails[0].new && "new"}</p>
                  <p className={`badge sale text-uppercase fw-bold mt-3 ${productDetails[0].sale ? 'd-inline-block' : 'd-none'}`}>{productDetails[0].sale && "sale"}</p>
                  <p className={`badge trending text-uppercase fw-bold mt-3 ${productDetails[0].trending ? 'd-inline-block' : 'd-none'}`}>{productDetails[0].trending && "trending"}</p>
                  <p className='description mt-3'>Access smart tv apps without your PC or laptop <br />
                    Unlock a full PC experience with Wireless DeX and see movies on the big <br /> screen with Tap view <br />
                    Work seamlessley with Microsoft 365 or use Remote PC to work on your <br /> school or office PC
                  </p>
                  <div className="price d-flex mt-3 gap-3">
                    <div className={`old-price text-decoration-line-through ${productDetails[0].oldPrice ? 'd-inline-block' : 'd-none'}`}>${productDetails[0].oldPrice}</div>
                    <div className="new-price fw-bold">${productDetails[0].newPrice}</div>
                  </div>
                  <p className='stock mt-2 text-uppercase'>Items available: {productDetails[0].stock}</p>
                  <form className='mt-3 rounded'>
                    <div className="top d-flex gap-3">
                      <div className="counter d-flex align-items-center gap-2 rounded">
                        <button><FaMinus /></button>
                        <span>1</span>
                        <button><FaPlus /></button>
                      </div>
                      <div className="add-cart">
                        <button className='rounded'>Add to cart</button>
                      </div>
                    </div>
                    <div className="bottom mt-2 d-flex gap-3">
                      <button className='add-wishlist rounded'><IoMdHeartEmpty /></button>
                      <button className='compare rounded'><SlRefresh /></button>
                      <button className='buy rounded'>Buy Now</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default ProductDetails