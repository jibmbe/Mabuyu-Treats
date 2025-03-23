import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import mabuyuImg from "../assets/mabuyu1.jpeg";
import achariImg from "../assets/achari.jpeg";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";


const products = [
  { id: 1, name: "Small Pack Mabuyu", price: 50, image: mabuyuImg, description: "A small pack of delicious mabuyu, perfect for a quick treat." },
  { id: 2, name: "Medium Pack Mabuyu", price: 100, image: mabuyuImg, description: "A medium pack of mabuyu, great for sharing with friends." },
  { id: 3, name: "Large Pack Mabuyu", price: 200, image: mabuyuImg, description: "A large pack of mabuyu, ideal for families and gatherings." },
  { id: 4, name: "Medium Pack Achari", price: 200, image: achariImg, description: "A medium pack of tangy and spicy achari, full of flavor." },
  { id: 5, name: "Large Pack Achari", price: 300, image: achariImg, description: "A large pack of achari, perfect for satisfying your cravings." }
];

const ProductDetails = () => {
  const { id } = useParams(); // Access the id parameter from the URL
  const { addToCart } = useContext(CartContext); // Accessing addToCart from CartContext
  const product = products.find((p) => p.id === parseInt(id)); // Find the product based on id
  const [quantity, setQuantity] = useState(1);

  console.log("Product ID from URL:", id); // Debugging

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <div className="details">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h3>Ksh {product.price}</h3>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))} // Ensuring quantity is set as a number
        />
        <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
