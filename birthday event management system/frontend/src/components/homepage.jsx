import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';
import Card from './Card';
import Card1 from './Card1'
import Navbar from './navbar';
import Footer from './footer';


const Homepage = () => {
  return (
    <>
    
        <Navbar/>
        <p className='pr'  style={{marginLeft:40,marginRight:30,textAlign:'justify'}}>Welcome to the  birthday event experience! Immerse yourself in a world of celebration where creativity meets joy.
        Our expertly curated birthday event system transforms ordinary moments into extraordinary memories, blending innovative decor, interactive elements, and seamless coordination to 
        ensure your special day is nothing short of magical. Let the festivities begin Step into the  birthday event experience, where we weave a tapestry of celebration, merging
        creativity and joy. Our meticulously curated birthday event system turns ordinary moments into extraordinary memories throughinnovative decor, interactive elements, and seamless 
        coordination. Join us in crafting a magical celebration that transcends expectations—let the festivities begin and memories unfold.</p>
      <h2>CHOOSE THE PLACE FOR YOUR DAY</h2>
      <canvas id="birthday"></canvas>
      <div style={{display:'flex',flexDirection:'row'}}>
        <Card/>
      </div>

      <p className='pr'  style={{marginLeft:40,marginRight:30,textAlign:'justify'}}>These pictrue are already we condact the Outdoor partys in someone's for special
         Get ready to immerse yourself in the beauty of nature as we gather under the open sky to 
         celebrate another fantastic year of life and love. Our homepage is your exclusive gateway to all
          things related to this outdoor extravaganza – from the picturesque venue details and thrilling activities 
          planned to create unforgettable memories. Navigate through this digital space to discover the date, time, and
           location, ensuring you won't miss a moment of the joyous festivities. As we prepare to revel in the great outdoors,
            surrounded by the soothing sounds of nature, consider this your virtual invitation to a birthday bash like no other. 
            Stay tuned for updates, and let's make  outdoor birthday an event to remember! 🌳🎈</p>


      <div style={{display:'flex',flexDirection:'row'}}>
        <Card1/>
        </div>

        <p className='pr'  style={{marginLeft:40,marginRight:30,textAlign:'justify'}}>These pictrue are already we condact the Indoor partys in someone's for special Step into the realm of celebration!
         Welcome to the digital epicenter of  upcoming indoor birthday extravaganza. 
          Prepare to be dazzled as we transform an indoor space into a haven of joy and festivity. Our homepage is your VIP pass to all the details 
           from the cozy venue adorned with decorations to the exciting lineup of activities planned for the celebration. Delve into this digital space to 
           uncover the date, time, and location, ensuring you're in the heart of the festivities. With the comfort of an indoor setting, we are ready to create magical moments 
           that will linger in our memories. Navigate through these virtual pages, mark your calendar, and get ready for a birthday bash full of warmth and jubilation. 
           Stay tuned for updates, and let's make indoor birthday an event to cherish! 🎉🎂</p>


        <h3>Party Details</h3>
        <p className='pr'  style={{marginLeft:40,marginRight:30,textAlign:'justify',paddingTop:130}}>Welcome to the  upcoming birthday celebration!
         Get ready for an extravaganza of joy, laughter, and celebration right here at our digital hub.
          We are delighted to invite you to join us in commemorating a special day filled with love and merriment. 
          Explore this space to find all the details about the upcoming festivities, from the date and time to exciting 
          surprises we have in store. This is your go-to destination for updates, RSVP information, and a sneak peek into 
          the planned festivities. As we gear up to make [Name]'s birthday unforgettable, we invite you to bookmark this page,
           stay tuned for announcements, and prepare to embark on a journey of celebration with us. Let's make this birthday one 
           for the books! 🎉🎂.</p>

           <p className='pr'  style={{marginLeft:40,marginRight:30,textAlign:'justify'}}>It sounds like your birthday event website is versatile and accommodates various
            types of birthday parties. This flexibility is a great feature as it caters to a diverse audience with different preferences and celebration styles. Whether it's an intimate
             gathering, a themed costume party, a sophisticated dinner affair, or a lively outdoor celebration, the inclusivity of your platform allows individuals to plan and host the type 
             of birthday party that resonates with their vision.🎇</p>
           <p className='pr'  style={{marginLeft:40,marginRight:30,textAlign:'justify'}}>This diversity not only broadens the appeal of the website but also speaks to the commitment
            to providing a comprehensive platform for anyone looking to organize a birthday event. The all-encompassing nature of the website suggests a user-friendly experience where visitors can easily
             find resources and information tailored to their specific celebration preferences.🎁</p>
           <p className='pr'  style={{marginLeft:40,marginRight:30,textAlign:'justify',paddingBottom:100}}>The flexibility to accommodate various types of birthday parties adds a dynamic and inclusive dimension to 
           your event planning platform, making it a go-to destination for a wide range of celebratory occasions.🎉</p>
           
           
              

</>
  
  );
};

export default Homepage;
