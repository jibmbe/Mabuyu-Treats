import { Link } from "react-router-dom";
import "./Navbar.css"; // We'll create this CSS file next

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Mabuyu Treats</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
