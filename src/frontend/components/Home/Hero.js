import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-info">
        <div className="hero-title">
          <h1 className="h1-60">
            Stop Wasting Food!<span className="hl-rose"> Just</span>
          </h1>
          <h1 className="h1-60">
            Share<span className="hl-rose"> a Plate!</span>
          </h1>
        </div>
        <div className="hero-subtitle">
          <p>
            Share Plate is a platform which provide food to needy ones on
            special orders.
          </p>
        </div>
        <button className="btn btn-link btn-pink">
          <Link className="hero-link" to="/products">
            Search Food
            <span className="material-icons"> chevron_right </span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export { Hero };
