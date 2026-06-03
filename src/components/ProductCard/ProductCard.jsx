import { IoCartOutline } from "react-icons/io5";
import "./ProductCard.css";

function ProductCard({ title, image, price, category, description }) {
  return (
    <div className="card-container">
      <div className="product-img-wrapper">
        <img src={image} alt={title} className="product-img" />
      </div>
      <div className="product-details">
        <span className="product-category">{category}</span>
        <h3 className="product-title">{title}</h3>
        <p className="product-desc">{description}</p>
        <div className="price-cart">
          <p className="product-price">UGX. {price}</p>
          <div className="cart-icon">
            <IoCartOutline />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
