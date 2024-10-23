import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClothingCards from "./Components/Home Page/ClothingCards"
import Header from "./Components/Home Page/Header"
import HeroSection from "./Components/Home Page/HeroSection"
import Products from "./Components/Home Page/Products"

import ProductDescription from "./Components/Product Description Page/ProductDescription";
import ProductLink from './Components/Home Page/ProductLink';
import Footer from './Components/Home Page/Footer';
import ProductPage from './Components/Product Page/ProductPage';
 
import CartPage from './Components/Cart/CartPage';
import { CartProvider } from './Components/Hooks/CartContext'; 
import Wishlist from './Components/Cart/WishList';
import { WishlistProvider } from './Components/Hooks/WishlistContext';
import Profile from './Components/UserProfile Page/Profile';
import ContactPage from './Components/Contact Page/ContactPage';
import PaymentForm from './Components/Payment/PaymentForm';

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-[70px] md:pt-[100px]">
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <ClothingCards/>
                <Products />
                <ProductLink />
              </>
            } />
            <Route path="/About" element={<ProductDescription/>} />  
            <Route path="/products" element={<ProductPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/cart" element={<CartPage/>} />
            <Route path="/wishlist" element={<Wishlist/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/checkout" element={<PaymentForm/>} />
          </Routes>
          </main>
          <Footer/>
        </div>
      </Router>
      
      </WishlistProvider>
    </CartProvider>
    
  )
}

export default App
