import React from 'react';
import './posters.css'

const ImageCard = ({ src, alt, text }) => (
  <div className="polaroid">
    <div className="card">
      <div className="image">
        <img src={src} alt={alt} />
      </div>
      <p>{text}</p>
    </div>
  </div>
);

const Poster = () => {
  return (
    <div className='vv'>
      <ImageCard
      src="src\components\image 2.jpg"

      />
      <ImageCard
        src="src\assets\poster3.jpg"
       
      />
      <ImageCard
        src="src\assets\poster2.jpg"
        alt="...of things we left behind"
        text="...of things we left behind"
      />
       <ImageCard 
        src="src\assets\poster1.jpg"
        alt="Visit Our Event And Make Your Day Special"
        text="Visit Our Event And Make Your Day Special" 
    
      />
      {/* <cite className='vv'>Visit Our Event And Make Your Day Special</cite> */}
    </div>
  );

};

export default Poster;
