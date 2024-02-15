
// import React from 'react';
// import './decide.css';

// const CardContainer = () => {
//   return (
//     <>
    
//     <div className="card-container">
//       <div className="back"> IN DOOR  <h3 className='da'>Works</h3>
      
//       </div>
//       <div className="front"><img style={{width:'100%',marginTop:'5px',height:'35vh'}} src="src\assets\download.jpg" alt=""></img></div>
      
      
//     </div>
      
//     <div className="card-container">
//       <div className="back"> IN DOOR  <h3 className='da'>Works</h3></div>
//       <div className="front"><img style={{width:'100%',marginTop:'5px',height:'35vh'}} src="src\assets\download.jpg" alt=""></img></div>
      
//     </div>
//     <div className="card-container" >
//       <div className="back" > IN DOOR  <h3 className='da'>Works</h3></div>
//       <div className="front"><img style={{width:'100%',marginTop:'5px',height:'35vh'}} src="src\assets\download.jpg" alt=""></img></div>
      
//     </div>

//     <div className="card-container">
//       <div className="back"> IN DOOR  <h3 className='da'>Works</h3></div>
//       <div className="front"><img style={{width:'100%',marginTop:'5px',height:'35vh'}} src="src\assets\download.jpg" alt=""></img></div>
      
//     </div>
//     <div className="card-container" >
//       <div className="back" > IN DOOR  <h3 className='da'>Works</h3></div>
//       <div className="front"><img style={{width:'100%',marginTop:'5px',height:'35vh'}} src="src\assets\download.jpg" alt=""></img></div>
      
//     </div>


    
//     </>
    
    
//   );
// };

// export default CardContainer;



import React from 'react';
import './decide.css'

const  CardContainer = () => {
  return (
    
    <div 
    
    className="cards-list">
      <div className="card 1">
        <div className="card_image">
          <img src="src\assets\cake.jpg" alt="" />
        </div>
        <div className="card_title title-white">
          <p style={{color:'black'}}>Citrus Burst Bliss</p>
        </div>
      </div>

      <div className="card 2">
        <div className="card_image">
          <img src="src\assets\cake1.jpg" alt="" />
        </div>
        <div className="card_title title-white">
          <p style={{color:'black'}}>Mocha Dream Velvet</p>
        </div>
      </div>

      <div className="card 3">
        <div className="card_image">
          <img src="src\assets\cake2.jpg" alt="" />
        </div>
        <div className="card_title">
          <p style={{color:'black'}}>Velvet Elegance Delight </p>
        </div>
      </div>

      <div className="card 4">
        <div className="card_image">
          <img src="src\assets\cake3.jpg" alt="" />
        </div>
        <div className="card_title title-black">
          <p style={{color:'black'}}>Decadent Caramel Cascade </p>
        </div>
      </div>
    </div>
  );
};

export default  CardContainer;

