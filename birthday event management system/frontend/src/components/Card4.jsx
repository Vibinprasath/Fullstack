import React from 'react';
import './decide.css'

const  CardContainer = () => {
  return (
    <div className="cards-list">
      <div className="card 1">
        <div className="card_image">
          <img src="src\assets\cafe.jpg" alt="" />
        </div>
        <div className="card_title title-white">
          <p style={{color:'black'}}>Cafe</p>
        </div>
      </div>

      <div className="card 2">
        <div className="card_image">
          <img src="src\assets\garden.jpg" alt="" />
        </div>
        <div className="card_title title-white">
          <p style={{color:'black'}}>Garden</p>
        </div>
      </div>

      <div className="card 3">
        <div className="card_image">
          <img src="src\assets\beach.jpg" alt="" />
        </div>
        <div className="card_title">
          <p style={{color:'black'}}>Beach Side</p>
        </div>
      </div>

      <div className="card 4">
        <div className="card_image">
          <img src="src\assets\mall.jpg" alt="" />
        </div>
        <div className="card_title title-black">
          <p style={{color:'black'}}>Mall</p>
        </div>
      </div>
    </div>
  );
};

export default  CardContainer;