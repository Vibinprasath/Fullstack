// // Card.js
// import React from 'react';
// import './user.css'; // Import your custom CSS file

// const Card = () => {
//   return (
//     <div className='cardbody'>
//     <div className="standard-package-wrapper max-height-500">
//       <div className="card-content">
//       <img src="src\assets\outdoor 5.jpg" class="src\assets\indoor 1.jpg" alt="image"/>
//       <div style={{display:'flex',flexDirection:'row'}}>
//       <div style={{width:'70%'}}>
//         <p className="cardtext">3- Days Mudaliarkuppam - Auroville - Pitchavaram Tour</p>
//         <p style={{color: '#8d97bd',fontSize:'1rem'}}>Pichavaram consists of a number of islands interspersing a vast expanse
//          of water covered with mangrove forest. It is one of the largest mangrove 
//          forests in India ....</p>
//          </div>

//          <div style={{justifyContent:'end'}}>
//          <p >Starting from</p>
//          <p> 13,600</p>
//          </div>
//          </div>
//       </div>
//     </div>


//     </div>
//   );
// };

// export default Card;

// import React from 'react';

// const Card = ({ number, title, content, imageUrl }) => (
//   <figure className="shape-box shape-box_half">
//     <img src={imageUrl} alt="" />
//     <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
//     <figcaption>
//       <div className="show-cont">
//         <h3 className="card-no">{number}</h3>
//         <h4 className="card-main-title">{title}</h4>
//       </div>
//       <p className="card-content">{content}</p>
//       <a href="#" className="read-more-btn">Read More</a>
//     </figcaption>
//     <span className="after"></span>
//   </figure>
// );

// const App = () => {
//   const cardsData = [
//     {
//       number: '01',
//       title: 'Design',
//       content: 'Customer interactions, study and analysis of company branding through creative briefs. Creation of mock-up designs by using UI tools that simulate actions and pre-visualize the reactions.',
//       imageUrl: 'https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
//     },
//     {
//       number: '02',
//       title: 'DEVELOP',
//       content: 'Customer interactions, study and analysis of company branding through creative briefs. Creation of mock-up designs by using UI tools that simulate actions and pre-visualize the reactions.',
//       imageUrl: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80'
//     },
//     {
//       number: '03',
//       title: 'RESEARCH',
//       content: 'Customer interactions, study and analysis of company branding through creative briefs. Creation of mock-up designs by using UI tools that simulate actions and pre-visualize the reactions.',
//       imageUrl: 'https://images.unsplash.com/photo-1498075702571-ecb018f3752d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=757&q=80'
//     },
//     {
//       number: '04',
//       title: 'PROMOTION',
//       content: 'Customer interactions, study and analysis of company branding through creative briefs. Creation of mock-up designs by using UI tools that simulate actions and pre-visualize the reactions.',
//       imageUrl: 'https://images.unsplash.com/photo-1534669740902-e09e38a6a29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
//     },
//   ];

//   return (
//     <div className="box-wrapper">
//       {cardsData.map((card, index) => (
//         <Card key={index} {...card} />
//       ))}
//     </div>
//   );
// };

// export default App;


import React from 'react';
import './user.css';
// import outdoor1 from './src/assets/outdoor 4.jpg'

const CardContainer = () => {
  return (
    <>
    
    <div className="card-container">
      <div className="front"> IN DOOR  <h3 className='da'>Works</h3></div>
      <div className="back"><img style={{width:'100%',marginTop:'5px',height:'35vh'}} src="src\assets\indoor 1.jpg" alt=""></img></div>
      
      
    </div>
    <div className="card-container">
      <div className="front"> IN DOOR  <h3 className='da'>Works</h3></div>
      <div className="back"><img style={{width:'100%',marginTop:'5px',height:'35vh'}} src="src\assets\indoor 3.jpg" alt=""></img></div>
      
    </div>
    <div className="card-container" >
      <div className="front" > IN DOOR  <h3 className='da'>Works</h3></div>
      <div className="back"><img style={{width:'100%',marginTop:'5px',height:'35vh'}} src="src\assets\indoor 2.jpg" alt=""></img></div>
      
    </div>

    <div className="card-container">
      <div className="front"> IN DOOR  <h3 className='da'>Works</h3></div>
      <div className="back"><img style={{width:'100%',marginTop:'5px',height:'35vh'}} src="src\assets\indoor6.jpg" alt=""></img></div>
      
    </div>
    <div className="card-container" >
      <div className="front" > IN DOOR  <h3 className='da'>Works</h3></div>
      <div className="back"><img style={{width:'100%',marginTop:'5px',height:'35vh'}} src="src\assets\indoor7.jpg" alt=""></img></div>
      
    </div>


    
    </>
    
    
  );
};

export default CardContainer;
