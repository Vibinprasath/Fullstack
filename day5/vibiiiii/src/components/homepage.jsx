import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';
import Card from './Card';
import Card1 from './Card1'
import Navbar from './navbar';

const Homepage = () => {
  return (
    <div>
        <Navbar/>
      <h1>VISIT OUR WORKS</h1>
      <canvas id="birthday"></canvas>
      <div style={{display:'flex',flexDirection:'row'}}>
        <Card/>
      </div>
      <div style={{display:'flex',flexDirection:'row'}}>
        <Card1/>
      </div>
    </div>
  );
};

export default Homepage;
