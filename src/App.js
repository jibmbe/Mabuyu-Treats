import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider, useCart } from "./context/CartContext"; // Import CartContext
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';
import AdminOrders from "./pages/AdminOrders";
import AdminLogin from "./pages/AdminLogin";
import { useState } from "react"; // Import useState

function App() {
  const [adminAuthenticated, setAdminAuthenticated] = useState(false); // Manage admin authentication state

  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin/orders" element={adminAuthenticated ? <AdminOrders /> : <AdminLogin setAdminAuthenticated={setAdminAuthenticated} />} />
          <Route path="/admin/login" element={<AdminLogin setAdminAuthenticated={setAdminAuthenticated} />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
