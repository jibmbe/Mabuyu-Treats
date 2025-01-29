import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Ksh {product.price.toFixed(2)}</p>
      <Link to={`/product/${product.id}`} className="btn">View Details</Link>
    </div>
  );
};

export default ProductCard;
