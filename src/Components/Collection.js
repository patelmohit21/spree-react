import React from "react";
import collectionleft from '../summergirl.jpg';
import collectionright from '../girl.jpg';
import './collection.css';

export default function Collection() {
  return (
    <div className="container">
      <div className="collection-item">
        <img src={collectionleft} alt="New Collection" className="collection-image" />
        <div className="collection-info">
          <h6>New Collection</h6>
          <h4>Street Style</h4>
        </div>
      </div>
      <div className="collection-item">
        <img src={collectionright} alt="Summer Sale" className="collection-image" />
        <div className="collection-info">
          <h6>Summer Sale</h6>
          <h4>Up To 30% OFF</h4>
        </div>
      </div>
      
    </div>
    
  );
}
