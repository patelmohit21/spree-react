import React from "react";
import "./Homepage.css";
import img from "../summer_img.png";
import clothes from "../clothes.jpg";
import feels from "../summer_feels.jpg";
import beach from "../beach.jpg";

export default function Homepage() {
  return (
    <div className="homepage">
      <div className="summer-collection">
        <div className="logo">
          <img src={img} alt="Summer Collection" className="summer-image" />
          <div className="logo-heading">
            <h1>Summer</h1>
            <h1>Collection</h1>
            <button className="shop-now-button">Shop Now</button>
          </div>
        </div>
      </div>
      <div class="homepage-inner">
        <div class="left-column">
          <div class="collection-left-top">
            <div class="logo-left">
              <img src={clothes} alt="Summer Collection" class="logo-image" />
            </div>
          </div>
          <div class="collection-left-bottom">
            <div class="logo-left">
              <img src={feels} alt="Summer Collection" class="logo-image" />
            </div>
          </div>
        </div>
        <div class="right-column">
          <div class="collection-right-side">
            <div class="logo-right">
              <img src={beach} alt="Summer Collection" class="beach-image" />
            </div>
          </div>
        </div>
      </div>

      {/* <footer className="footer">
        <p>&copy; 2024 Our Website. All rights reserved.</p>
      </footer> */}
    </div>
  );
}
