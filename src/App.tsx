import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import BlogList from './pages/Blog/BlogList/BlogList';
import BlogDetails from './pages/Blog/BlogDetails/BlogDetails';
// import ProductList from './pages/Product/ProductList/ProductList';
// import ProductDetails from './pages/Product/ProductDetails/ProductDetails';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Wishlist from './pages/Wishlist/Wishlist';
import Faq from './pages/Faq/Faq';
import NotFound from './pages/NotFound/NotFound';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Cart from './pages/Cart/Cart';
import ProtectedRoute from './routes/ProtectedRoute';
import Dashboard from './pages/Dashboard/Dashboard';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/blog' element={<BlogList />} />
          <Route path='/blogdetails' element={<BlogDetails />} />
          {/* <Route path='/shop' element={<ProductList />} /> */}
          {/* <Route path='/shop/:productId' element={<ProductDetails />} /> */}
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/cart' element={<Cart />} /> 
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/dashboard' element={<ProtectedRoute element={<Dashboard />} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
