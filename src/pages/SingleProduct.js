import React from "react";
import PRODUCTS from "../data.js";
import "./SingleProduct.scss";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
function SingleProduct() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { pathname } = useLocation();

  const singleProduct = PRODUCTS.find(
    (product) => product.id === parseInt(productId)
  );

  const { name, price, image, brand } = singleProduct;
  return (
    <div className="single">
      <div className="single__container">
        <div className="single__content">
          <div>
            <h1 className="single__title">{name}</h1>
          </div>
          <div className="single__link">
            <nav className="single__nav">
              <ol className="single__box-link">
                <li className="single__items">
                  <Link to="/">Home</Link>
                </li>
                <li className="single__items">/</li>
                <li className="single__items">
                  <Link to="/products">Products</Link>
                </li>
                <li className="single__items">/</li>
                <li className="single__items_active">{name}</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="single__box-content">
        <div className="single__details-content">
          <div className="single__box-image">
            <img className="single__img" src={image} alt="product-img" />
          </div>
          <div>
            <div className="single__box-details">
              <h2 className="single__name">{name}</h2>
              <p className="single__pathname">{pathname}</p>
              <p className="single__price">{price}$</p>
              <p className="single__details">{brand}</p>
            </div>
            <div className="single__box-button">
              <button className="single__button" onClick={() => navigate(-1)}>
                BACK
              </button>
              <button
                className="single__button"
                onClick={() => navigate("/products")}
              >
                NAVIGATE TO PRODUCTS
              </button>
              <Link to="/products" className="single__button">
                PRODUCTS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
