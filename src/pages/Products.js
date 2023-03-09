import React from "react";
import "./Products.scss";
import { Link } from "react-router-dom";
import PRODUCTS from "../data.js";
function Products() {
  return (
    <div className="products">
      <div className="products__header">
        <h1 className="products__title">Products</h1>
        <nav className="products__nav">
          <ol className="products__link-container">
            <li className="products__link">
              <Link to="/">Home</Link>
            </li>
            <li className="products__link">/</li>
            <li className="products__link_active">Products</li>
          </ol>
        </nav>
      </div>
      <div className="products__container">
        <div className="products__box">
          {PRODUCTS.map((product) => {
            return (
              <div className="products__list" key={product.id}>
                <div className="products__card">
                  <div className="products__img-box">
                    <img
                      className="products__img"
                      src={product.image}
                      alt="image_prod"
                    />
                  </div>
                  <div className="products__info-box">
                    <h5 className="products__name">{product.name}</h5>
                    <p className="products__brand">{product.brand}</p>
                    <div className="products__footer">
                      <p>
                        <span className="products__text-price">Price:</span>
                        <strong className="products__price">
                          {product.price}$
                        </strong>
                      </p>
                      <Link
                        className="products__details"
                        to={`/products/${product.id}`}
                      >
                        DETAILS &#8594;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
