import React from 'react';
import './Home.css'; // Make sure this file includes the updated styles below
import Image from './../Assets/Explore.png';

const worksData = [
  {
    title: 'Brand Identity',
    description: 'Crafted a unique brand identity for a startup company.',
    image: Image,
  },
  {
    title: 'E-commerce Platform',
    description: 'Developed a scalable online store with secure checkout.',
    image: Image,
  },
  {
    title: 'Portfolio Website',
    description: 'Designed a sleek personal portfolio for a designer.',
    image: Image,
  },
  {
    title: 'Social Media Campaign',
    description: 'Executed a successful digital marketing campaign.',
    image: Image,
  },
];

function Ourworks() {
  return (
    <div className="our-works-section">
      <div className="our-works-text">
        <h3 className="poppinsx">Our Works</h3>
        <p className="poppin">
          Personal branding is the process of establishing 
          and promoting a unique identity and image for
          oneself, typically in a professional context.
        </p>
      </div>

      <div className="our-works-grid">  
        {worksData.map((work, index) => (
          <div style={{height:'auto'}} className="work-card" key={index}>
            <img  src={work.image} alt={work.title} />
            <div className="card-content">
              <h4 className="work-title poppinsx">{work.title}</h4>
              <p className="work-description poppins">{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ourworks;
