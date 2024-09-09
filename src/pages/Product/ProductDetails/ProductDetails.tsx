// import React, { useContext } from "react";
// import { Link, useParams } from "react-router-dom";
// import slugify from "react-slugify";
// import { ProductContext } from "../../../context/ProductContext";
// import Spinner from "../../../components/common/Spinner/Spinner";
// import { FaMinus } from "react-icons/fa6";
// import { FaPlus } from "react-icons/fa6";
// import { IoMdHeartEmpty } from "react-icons/io";
// import { SlRefresh } from "react-icons/sl";

// const ProductDetails: React.FC = () => {
//   const { productId } = useParams();
//   const { products } = useContext(ProductContext);
//   const productDetails = products.find((p) => slugify(p.title) === productId);

//   return (
//     <>
//       {products.length === 0 ? (
//         <Spinner />
//       ) : (
//         <div className="product-detail my-5">
//           <div className="containers">
//             <div className="row">
//               <div className="col-12 col-sm-12 col-md-6 col-lg-6">
//                 <div className="left">
//                   <img width={500} src={productDetails?.images[0]} alt="" />
//                 </div>
//               </div>
//               <div className="col-12 col-sm-12 col-md-6 col-lg-6">
//                 <div className="right">
//                   <div className="navigation d-flex align-items-center gap-2">
//                     <Link to="/" className="text-dark text-uppercase">
//                       Home
//                     </Link>
//                     <span></span>
//                     <Link to="/shop" className="text-dark text-uppercase">
//                       Products
//                     </Link>
//                     <span></span>
//                     <p className="fw-bold text-uppercase">
//                       {productDetails?.title}
//                     </p>
//                   </div>
//                   <h4 className="title fw-bold mt-3">
//                     {productDetails?.title}
//                   </h4>
//                   <p
//                     className={`badge bestseller text-uppercase fw-bold mt-3 ${
//                       productDetails?.bestseller ? "d-inline-block" : "d-none"
//                     }`}
//                   >
//                     {productDetails?.bestseller && "bestseller"}
//                   </p>
//                   <p
//                     className={`badge new text-uppercase fw-bold mt-3 ${
//                       productDetails?.new ? "d-inline-block" : "d-none"
//                     }`}
//                   >
//                     {productDetails?.new && "new"}
//                   </p>
//                   <p
//                     className={`badge sale text-uppercase fw-bold mt-3 ${
//                       productDetails?.sale ? "d-inline-block" : "d-none"
//                     }`}
//                   >
//                     {productDetails?.sale && "sale"}
//                   </p>
//                   <p
//                     className={`badge trending text-uppercase fw-bold mt-3 ${
//                       productDetails?.trending ? "d-inline-block" : "d-none"
//                     }`}
//                   >
//                     {productDetails?.trending && "trending"}
//                   </p>
//                   <p className="description mt-3">
//                     Access smart tv apps without your PC or laptop <br />
//                     Unlock a full PC experience with Wireless DeX and see movies
//                     on the big <br /> screen with Tap view <br />
//                     Work seamlessley with Microsoft 365 or use Remote PC to work
//                     on your <br /> school or office PC
//                   </p>
//                   <div className="price d-flex mt-3 gap-3">
//                     <div
//                       className={`old-price text-decoration-line-through ${
//                         productDetails?.oldPrice ? "d-inline-block" : "d-none"
//                       }`}
//                     >
//                       ${productDetails?.oldPrice}
//                     </div>
//                     <div className="new-price fw-bold">
//                       ${productDetails?.newPrice}
//                     </div>
//                   </div>
//                   <p className="stock mt-3 text-uppercase">
//                     Items available: {productDetails?.stock}
//                   </p>
//                   <div className="color fw-bold text-uppercase d-flex align-items-center gap-3 mt-3">
//                     Color:
//                     <div className="color-swatches d-flex gap-2">
//                       {productDetails?.colors?.map((color, index) => (
//                         <button
//                           key={index}
//                           style={{ backgroundColor: color }}
//                           className="color-swatch px-3 py-2 rounded border-0"
//                         ></button>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="storage fw-bold text-uppercase d-flex align-items-center gap-3 mt-3">
//                     Storage:
//                     <div className="storage-options d-flex gap-2">
//                       {Array.isArray(productDetails?.storages) &&
//                         productDetails?.storages.map(
//                           (storage: string, index: number) => (
//                             <button
//                               key={index}
//                               style={{ backgroundColor: "#011962" }}
//                               className="storage-option text-light px-2 py-1 rounded border-0"
//                             >
//                               {storage}
//                             </button>
//                           )
//                         )}
//                     </div>
//                   </div>

//                   <form className="mt-3 rounded">
//                     <div className="top d-flex gap-3">
//                       <div className="counter d-flex align-items-center gap-2 rounded">
//                         <button>
//                           <FaMinus />
//                         </button>
//                         <span>1</span>
//                         <button>
//                           <FaPlus />
//                         </button>
//                       </div>
//                       <div className="add-cart">
//                         <button className="rounded">Add to cart</button>
//                       </div>
//                     </div>
//                     <div className="bottom mt-2 d-flex gap-3">
//                       <button className="add-wishlist rounded">
//                         <IoMdHeartEmpty />
//                       </button>
//                       <button className="compare rounded">
//                         <SlRefresh />
//                       </button>
//                       <button className="buy rounded">Buy Now</button>
//                     </div>
//                   </form>
//                   <div className="sku d-flex gap-2 mt-3">
//                     <span className="text-uppercase fw-bold">Sku:</span>
//                     <p>{productDetails?.sku}</p>
//                   </div>
//                   <div className="categories d-flex gap-2 mt-3">
//                     <span className="text-uppercase fw-bold">Categories:</span>
//                     <p>{productDetails?.categories[0]},</p>
//                     <p>{productDetails?.categories[1]}</p>
//                   </div>
//                   <div className="tag d-flex gap-2 mt-3">
//                     <span className="text-uppercase fw-bold">Tag:</span>
//                     <p>{productDetails?.tag}</p>
//                   </div>
//                   <div className="brand d-flex gap-2 mt-3">
//                     <span className="text-uppercase fw-bold">Brand:</span>
//                     <p>{productDetails?.brand}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ProductDetails;

export{}