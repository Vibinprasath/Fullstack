import React from 'react';
import './decide.css'

const  CardContainer = () => {
  return (
    <div className="cards-list">
      <div className="card 1">
        <div className="card_image">
          <img src="src\assets\red.jpg" alt="" />
        </div>
        <div className="card_title title-white">
          <p style={{color:'black'}}>Red (Outfit)</p>
        </div>
      </div>

      <div className="card 2">
        <div className="card_image">
          <img src="src\assets\brown.jpg" alt="" />
        </div>
        <div className="card_title title-white">
          <p style={{color:'black'}}>Brown (Outfit)</p>
        </div>
      </div>

      <div className="card 3">
        <div className="card_image">
          <img src="src\assets\blue.jpg" alt="" />
        </div>
        <div className="card_title">
          <p style={{color:'black'}}>Blue (Outfit)</p>
        </div>
      </div>

      <div className="card 4">
        <div className="card_image">
          <img src="src\assets\black1.jpg" alt="" />
        </div>
        <div className="card_title title-black">
          <p style={{color:'black'}}>Black (Outfit)</p>
        </div>
      </div>
    </div>
  );
};

export default  CardContainer;