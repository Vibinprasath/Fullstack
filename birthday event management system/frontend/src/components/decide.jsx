import React from 'react';
import { Link } from 'react-router-dom';

import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import Card5 from './Card5';
import Navbar from './navbar';

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <h2 className='h2' style={{textAlign:'center'}}>Select-a-Slice</h2>
      <canvas id="birthday"></canvas>
      <div style={{display:'flex',flexDirection:'row'}}>
        <Card2/>
      </div>

      <h2 className='h' style={{textAlign:'center'}}>Select Garment</h2>
      <div style={{display:'flex',flexDirection:'row',paddingTop:200}}>
        <Card3/>
        </div>


      <h2 className='h' style={{textAlign:'center'}}>Select Venue</h2>
      <div style={{display:'flex',flexDirection:'row',paddingTop:200}}>
        <Card4/>
        </div>


       <h2 className='h' style={{textAlign:'center'}}>If You Need</h2>
      <div style={{display:'flex',flexDirection:'row',paddingTop:200}}>
        <Card5/>
        </div>

       

       

        
    </div>
  );
};

export default Homepage;
