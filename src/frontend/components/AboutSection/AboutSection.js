import React from "react";
import { Link } from "react-router-dom";
import "./AboutSection.css";

export const AboutSection = () => {
  return (
    <>
      <div className="product-section">
        <div className="product-section-image">
          <img
            className="product-section-img section-img-one"
            src="assets/homeImageOne.png"
            alt="Oasis"
          />
        </div>
        <div className="product-section-info">
          <div className="product-section-info-heading">
            <h1 className="h1-48">
              NO MINIMUM ORDER <span className="hl-rose">QUANTITY</span>
            </h1>
            <h1>
              Reduce Wasted Food By Feeding{" "}
              <span className="hl-rose"> Hungry People.</span>
            </h1>
          </div>
          <Link to="/products" className="product-section-info-link">
            Seacrh Food<span className="material-icons"> arrow_right_alt </span>
          </Link>
        </div>
      </div>
      <div className="product-section">
        <div className="product-section-info">
          <div className="product-section-info-heading">
            <h1 className="h1-48">
              EASY <span className="hl-rose">DELIVERY</span>
            </h1>
            <h1>
              We will directly deliver food to NGO's on
              <span className="hl-rose"> Special orders</span>
            </h1>
          </div>
          <Link to="/products" className="product-section-info-link">
            Seacrh Food<span className="material-icons"> arrow_right_alt </span>
          </Link>
        </div>
        <div className="product-section-image">
          <img
            className="product-section-img section-img-two"
            src="assets/homeImageTwo.png"
            alt="Oasis"
          />
        </div>
      </div>
      <div className="product-section">
        <div className="product-section-image">
          <img
            className="product-section-img section-img-three"
            src="assets/homeImageThree.png"
            alt="Oasis"
          />
        </div>
        <div className="product-section-info">
          <div className="product-section-info-heading">
            <h1 className="h1-48">
              DELIVERY <span className="hl-rose">ASSURENCE</span>
            </h1>
            <h1>
              Share Plate assures delivery of fresh{" "}
              <span className="hl-rose">food only.</span>
            </h1>
          </div>
          <Link to="/products" className="product-section-info-link">
            Seacrh Food<span className="material-icons"> arrow_right_alt </span>
          </Link>
        </div>
      </div>
    </>
  );
};
