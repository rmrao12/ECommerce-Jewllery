import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './Contexts/CartContext';
import CartPage from './Components/CartPage';
import ProductDetail from './Components/ProductDetails';
import Navbar from './Components/Navbar'
import { Home } from './Components/Home';
import AboutUs  from './Components/AboutUs';
import LocalStorageInitializer from './StoreData/StoreData';
import CheckoutPage from './Components/CheckoutPage';
import EarringsPage from './Components/EaringsPage';
import RingsPage from './Components/RingsPage';
import NeckalcePage from './Components/NeckalcePage';
import MaterialsPage from './Components/Materials';
import ShopPage from './Components/ShopPage';
import ContactUs from './Components/ContactUs';
import Blog from './Components/Blog';
import BlogDisplay from './Components/BlogDisplay';
import Footer from './Components/Footer'
import OrderSuccess from './Components/OrderSuccess';
function App() {
 
  return (
    <>
  <Router>
      <CartProvider> 
        <LocalStorageInitializer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />}/>
          <Route path="/earrings" element={<EarringsPage />}/>
          <Route path="/rings" element={<RingsPage />}/>
          <Route path="/necklaces" element={<NeckalcePage />}/>
          <Route path="/shop" element={<ShopPage />}/>
          <Route path="/materials" element={<MaterialsPage />}/>
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/order" element={<OrderSuccess />} />
          <Route path="/blog/:id" element={<BlogDisplay />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
    </>
  );
}

export default App;
