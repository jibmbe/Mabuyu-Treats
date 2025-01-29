import "./Home.css";
import ProductCard from "../components/ProductCard";
import mabuyuImg from "../assets/mabuyu.jpg";
import achariImg from "../assets/achari.jpeg";
import { useState, useEffect } from "react";

const products = [
  { id: 1, name: "Small Pack Mabuyu", price: 50, image: mabuyuImg },
  { id: 2, name: "Medium Pack Mabuyu", price: 100, image: mabuyuImg },
  { id: 3, name: "Large Pack Mabuyu", price: 200, image: mabuyuImg },
  { id: 4, name: "Medium Pack Achari", price: 200, image: achariImg },
  { id: 5, name: "Large Pack Achari", price: 300, image: achariImg }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const slides = [
    { image: mabuyuImg, caption: "Delicious Mabuyu for Every Moment" },
    { image: achariImg, caption: "Tangy and Spicy Achari for Your Taste" },
    { image: mabuyuImg, caption: "Satisfy Your Cravings with Mabuyu Treats" }
  ];

  const testimonials = [
    { name: "Milycent Wayua", text: "The best mabuyu I've ever had! Perfectly sweet and fresh." },
    { name: "Merab Rihanna", text: "Achari is so flavorful! A perfect snack for every occasion." },
    { name: "Mary Njeri", text: "Mabuyu Treats always delivers the best quality snacks!" },
    { name: "Peter Kamau", text: "The achari is simply irresistible, my go-to snack!" }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => {
      clearInterval(slideInterval);
      clearInterval(testimonialInterval);
    };
  }, []);

  return (
    <div className="home">
      {/* Hero Section with Auto Sliding Carousel */}
      <section className="hero">
        <div className="carousel">
          <div className="carousel-images">
            <img src={slides[currentSlide].image} alt="Mabuyu Treats" />
          </div>
          <div className="carousel-text">
            <h1>{slides[currentSlide].caption}</h1>
            <button className="shop-now-btn">Shop Now</button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="best-sellers">
        <h2>Best Sellers</h2>
        <div className="product-list">
          <ProductCard key={1} product={products[0]} />
          <ProductCard key={2} product={products[1]} />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Mabuyu Treats?</h2>
        <div className="why-cards">
          <div className="why-card">
            <i className="fas fa-certificate fa-3x"></i>
            <h3>Premium Quality</h3>
            <p>We ensure that every product is made with the finest ingredients for the best taste.</p>
          </div>
          <div className="why-card">
            <i className="fas fa-truck fa-3x"></i>
            <h3>Fast Delivery</h3>
            <p>Get your orders delivered quickly and safely to your doorstep.</p>
          </div>
          <div className="why-card">
            <i className="fas fa-smile fa-3x"></i>
            <h3>Customer Satisfaction</h3>
            <p>We value our customers and always strive to exceed your expectations.</p>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section with Auto Sliding */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"{testimonials[currentTestimonial].text}"</p>
            <p><strong>{testimonials[currentTestimonial].name}</strong></p>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="special-offers">
        <h2>Special Offers</h2>
        <p>Get 10% off your first order! Use code <strong>WELCOME10</strong> at checkout.</p>
        <i className="fas fa-gift fa-3x"></i> {/* Font Awesome gift icon */}
      </section>

      {/* Contact Us Section */}
      <section className="contact-us">
        <h2>Get in Touch</h2>
        <p>Have any questions or feedback? We'd love to hear from you!</p>
        <button className="contact-btn">
          <i className="fas fa-envelope"></i> Contact Us {/* Font Awesome envelope icon */}
        </button>
      </section>
    </div>
  );
};

export default Home;
