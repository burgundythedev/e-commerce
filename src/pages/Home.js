import React from "react";
import "./Home.scss";
import shop from "../images/shop.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__box-title">
          <h1 className="home__title">Welcome to FooClothing</h1>
        </div>
      </div>
      <div className="home__content">
        <p className="home__text">
          Welcome to Foo - as a French-based retailer, we are known for our
          expertly curated edit of sneakers & streetwear as well as emerging
          designers since 1996. At Foo, you will find retro streetwear styles
          next to forward-thinking lifestyle & streetwear products. Foo’s
          passion for product and craftsmanship is endless, and we strive to
          offer you the most sought-after releases in the market. Foo has strong
          relationships with many brands, designers, and contributors. Founded
          in 1996 in the city of Bern by Franca and Cosimo Foo, the business was
          initially specialized in sportswear. It all started with the economic
          boom of the 90s, when the two decided to start their own family
          project and enter entrepreneurship. Their Sons Italo and Rolando Foo
          quickly joined the family business after graduation and took over Foo
          in early 2000 when their parents retired. Both acquired a wealth of
          expertise in the textile industry, which they used to build Foo, a
          sneaker & streetwear store known beyond the borders of Switzerland.
        </p>
        <img className="home__img" src={shop} alt="shop-pic" />
      </div>
    </div>
  );
}

export default Home;
