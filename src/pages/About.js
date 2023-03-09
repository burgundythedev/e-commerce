import React from "react";
import "./About.scss";
function About() {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__box-title">
          <h1 className="about__title">About</h1>
        </div>
      </div>
      <div className="about__content">
        <div className="about__row">
          <div className="about__ref">
            <h2 className="about__status">Why Choose US.</h2>
            <p className="about__text">
              Bern, where it all began, is the very first store, located in the
              Gelbes district. In the beginning, the store was located only on
              one floor, but due to its success, it was soon expanded to two
              floors to offer customers a much larger selection. Even today, you
              can feel the family character, the cozy and comfortable
              atmosphere, rich in stories that make you feel at home
              immediately.
            </p>
          </div>
          <div className="about__ref">
            <h2 className="about__status">Our Mission</h2>
            <p className="about__text">
              With the opening of the Zurich branch in 2014, Foo experienced a
              real boom. Italo's brother and his wife, Manuela Foo, immediately
              fell in love with the premises, which previously housed Zurich's
              oldest cinema, Kino Wellenberg. The family succeeded in
              transforming this historic location into a store worth seeing in
              Zurich's old town. Its atypical design and interior have made the
              store the talk of magazines and blogs like Highsnobiety. Even
              today the unique store attracts the curiosity of sneaker lovers
              and street style fans.
            </p>
          </div>
          <div className="about__ref">
            <h2 className="about__status">What We DO.</h2>
            <p className="about__text">
              Always on the lookout for new trends, the Foo’s decided to open
              one of the first Swiss online stores with a large selection of
              sneakers and clothing from all over the world. This online
              presence allowed Foo to open its borders and offer its products to
              the whole world. The brand, which initially offered clothes and
              sports shoes and whose clientele came mainly from the world of
              boxing, dancing or running, has managed to follow the trend wave
              and is now one of the pioneers of Swiss street style.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
