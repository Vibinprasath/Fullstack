import React from 'react';
import './about.css'

const Card = ({ title, content }) => (
  <div className={`card ${title.toLowerCase()}`}>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const About = () => (
  <>
  <div className="div-transform">
    <Card
      title="DHANESH CEO"
      content="The CEO in birthday event management orchestrates the company's strategic vision, ensuring seamless execution of memorable celebrations and fostering innovation in the dynamic events industry."
    />
    <Card
      title="JOTHIKRISHNAA (Technical)"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas vero ipsa, nisi facilis possimus nam! Perferendis cum error a? Alias numquam, ea quia unde at facere eaque sint voluptatibus voluptatem aliquam."
    />
    <Card
      title="VIBIN PRASATH (Technical)"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas vero ipsa, nisi facilis possimus nam! Perferendis cum error a? Alias numquam, ea quia unde at facere eaque sint voluptatibus voluptatem aliquam."
    />
  </div>

<div className="div-transform">
  <Card
      title="SATHYA (Decor)"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas vero ipsa, nisi facilis possimus nam! Perferendis cum error a? Alias numquam, ea quia unde at facere eaque sint voluptatibus voluptatem aliquam."
    />
    <Card
      title="PAVAN (Decor)"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas vero ipsa, nisi facilis possimus nam! Perferendis cum error a? Alias numquam, ea quia unde at facere eaque sint voluptatibus voluptatem aliquam."
    />
    <Card
      title="DEVESH (Decor)"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas vero ipsa, nisi facilis possimus nam! Perferendis cum error a? Alias numquam, ea quia unde at facere eaque sint voluptatibus voluptatem aliquam."
    />
     <Card
      title="YOGESH"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas vero ipsa, nisi facilis possimus nam! Perferendis cum error a? Alias numquam, ea quia unde at facere eaque sint voluptatibus voluptatem aliquam."
    />
    </div>
  </>
);

// const App = () => {
//   return (
//     <div className="container">
//       <DivTransform />
//     </div>
//   );
// };

export default About;
