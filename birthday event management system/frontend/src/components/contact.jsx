import React from 'react';
import { Link } from 'react-router-dom';
import './contact.css';
import { Navbar } from 'rsuite';

const Contact = () => {
  return (
    <div>

      <Navbar/>
    <div className="cb">
      <div className="cd">
        <h2 style={{paddingBottom:200}}>Contact Details</h2>
        <span>9587******</span>
        <span className='md'>For More Details</span>
      {/* <h3 className='md'>For More Detail</h3> */}
        <div className="content">
          <h3>Our Office!</h3>
          <p>43,race crouse road,coimbatore-641018 </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
