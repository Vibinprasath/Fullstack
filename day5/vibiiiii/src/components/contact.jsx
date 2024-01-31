import React from 'react';
import { Link } from 'react-router-dom';
import './contact.css';

const Contact = () => {
  return (
    <div className="cardBox">
      <div className="card">
        <h2>Contact Details</h2>
        <span>9587******</span>
        <span className='md'>For More Details</span>
      {/* <h3 className='md'>For More Detail</h3> */}
        <div className="content">
          <h3>Our Office!</h3>
          <p>43,race crouse road,coimbatore-641018 </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
