import React, { useState, useEffect } from 'react';
import home1 from '../Assets/home1.jpg';
import home3 from '../Assets/home3.jpg';
import home4 from '../Assets/home4.jpg';
import home5 from '../Assets/home5.jpg';
import './HomePage.css'; 
import NavBar from './NavBar';

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [home1, home3, home4, home5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); 
  }, []);

  return (
    <div>
    <NavBar/>
    <div className="home-page">
      <div className="slider-container">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`slide ${index === currentImage ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default HomePage;




