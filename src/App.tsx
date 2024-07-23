import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import BlogList from './pages/Blog/BlogList/BlogList'
import BlogDetails from './pages/Blog/BlogDetails/BlogDetails'
import ProductList from './pages/Product/ProductList/ProductList'
import ProductDetails from './pages/Product/ProductDetails/ProductDetails'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import Wishlist from './pages/Wishlist/Wishlist'
import AddToCart from './pages/AddToCart/AddToCart'
import Faq from './pages/Faq/Faq'
import NotFound from './pages/NotFound/NotFound'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'


const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='*' element={<NotFound />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/faq' element={<Faq />}></Route>
          <Route path='/blog' element={<BlogList />}></Route>
          <Route path='/blogdetails' element={<BlogDetails />}></Route>
          <Route path='/shop' element={<ProductList />}></Route>
          <Route path='/productdetails' element={<ProductDetails />}></Route>
          <Route path='/wishlist' element={<Wishlist />}></Route>
          <Route path='/addtocart' element={<AddToCart />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/forgotpassword' element={<ForgotPassword />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App