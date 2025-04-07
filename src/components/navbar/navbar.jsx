// src/components/Navbar.jsx

import React from 'react';
import assets from "../../assets/assets"; 

import './Navbar.css';

function Navbar() {
  return (
    <div>
      <div className="top-bar">
        <button className="circle-button">
          <img src={assets.home} alt="Home" />
          <span>Home</span>
        </button>

        <div className="slogan">Looking for Automotive Parts?</div>

        <button className="signin-button">Sign In</button>
      </div>

      <div className="logo-container">
        < img src={assets.oemlogo} 
          alt="OEM Chattogram"
          className="main-logo"
        />
        <div className="socials">
          <span>@oemchattogram_bd</span> | <span>OEM Auto Parts Chattogram</span>
        </div>
      </div>

      <div className="nav-buttons">
        <button><img src={assets.search} alt="Search" /> Search</button>
        <button><img src={assets.contact} alt="Contact" /> Contact</button>
        <button><img src={assets.addToCart} alt="Cart" /> Add to Cart</button>
      </div>

      <div className="category-section">
        <div className="category-header">Shop By Categories</div>
        <div className="category-icons">
          <div className="category-item">
            <img src={assets.exteriorParts} alt="Exterior" />
            <p>Exterior Parts</p>
          </div>
          <div className="category-item">
            <img src={assets.interiorParts} alt="Interior" />
            <p>Interior Parts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
