import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClothingCards from "./Components/Home Page/ClothingCards"
import Header from "./Components/Home Page/Header"
import HeroSection from "./Components/Home Page/HeroSection"
import Products from "./Components/Home Page/Products"

import ProductDescription from "./Components/Product Description Page/ProductDescription";
import ProductLink from './Components/Home Page/ProductLink';
import Footer from './Components/Home Page/Footer';

 
function App() {
  return (
    <Router>
      <div>
      < Header />
      <Routes>
            <Route path="/" element={
              <>
              <HeroSection />
              <ClothingCards/>
              <Products />
              <ProductLink />
              <Footer/>
              </>
            } />
        <Route path="/About" element={<ProductDescription/>} />  
      </Routes>
    </div>
    </Router> 
  )
}

export default App
