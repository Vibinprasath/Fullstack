import React from 'react';
import './user.css';


const CardContainer = () => {
  return (
    <>
   
    <div className="card-container">
      <div className="back"> OUT DOOR <h3 className='da'>Works</h3></div>
      
      <div className="front"><img style={{width:'100%',marginTop:'5px',height:'35vh'}} src="./src/assets/outdoor 4.jpg" alt=""></img></div>
      
      
    </div>
    <div className="card-container">
      
      <div className="front"><img style={{width:'100%',marginTop:'5px',height:'35vh'}} src="src\assets\outdoor 2.jpg" alt=""></img></div>
      
    </div>
    <div className="card-container" >
      
      <div className="front"><img style={{width:'100%',marginTop:'5px',height:'35vh'}} src="src\assets\outdoor 6.jpg" alt=""></img></div>
      
    </div>


    <div className="card-container">
      <div className="back"> OUT DOOR <h3 className='da'>Works</h3></div>
      
      <div className="front"><img style={{width:'100%',marginTop:'5px',height:'35vh'}} src="src\assets\outdoor7.jpg" alt=""></img></div>
      
      
    </div>
    <div className="card-container">
      
      <div className="front"><img style={{width:'100%',marginTop:'5px',height:'35vh'}} src="src\assets\outdoor8.jpg" alt=""></img></div>
      
      
    </div>

    
    </>
    
    
  );
};

export default CardContainer;
