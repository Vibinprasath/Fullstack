import React from 'react';
import './about.css'

const Card = ({ title, content }) => (
  <div style={{width:1000}} className={`card ${title.toLowerCase()}`}>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const About = () => (
  <>
  <div className="ab">
    <Card
      title="DHANESH CEO"
      content="The CEO in birthday event management orchestrates the company's strategic vision, ensuring seamless execution of memorable celebrations and fostering innovation in the dynamic events industry."
    />
    <Card
      title="JOTHIKRISHNAA (Technical)"
      content="Our tech-savvy conductor fuses innovation and joy, seamlessly integrating cutting-edge tech with festive cheer, creating memorable birthdays. With a keen eye for detail and a passion for advancement, their celebrations leave a lasting and impressive mark."
    />
    <Card
      title="VIBIN PRASATH (Technical)"
      content="Masters of technical decor, they turn birthdays into futuristic marvels, blending LED lights, holographic displays, and interactive elements for a visually stunning, tech-infused celebration."
    />
  </div>

<div className="div-transform">
  <Card
      title="SATHYA (Decor)"
      content="Create a vibrant and magical birthday ambiance with dynamic lighting, including enchanting string lights and lively LED strips. Themed decorations, featuring cutouts and figurines, effortlessly transform the venue into a visually captivating space, ensuring an enchanting experience for all."
    />
    <Card
      title="PAVAN (Decor)"
      content="
      Indulge in sweet delights with an artfully decorated cake and dessert display, adding a delicious centerpiece to the celebration. Capture joyous moments with a themed photo booth adorned with creative decorations, creating lasting memories in a snap."
    />
    <Card
      title="YOGESH (Decor)"
      content="Elevate the birthday ambiance with vibrant balloon arrangements, adding a festive touch and a burst of color. Complementing the celebration, thoughtfully curated table decors create a charming and cohesive setting for guests to enjoy the festivities."
    />
     <Card
      title="DEVESH (Baby Seater)"
      content="Ensuring worry-free celebrations, our baby seater system offers a secure, cozy space with ergonomic design and safety features. It's the perfect addition for parents to enjoy the festivities while keeping their little ones comfortable and happy."
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
