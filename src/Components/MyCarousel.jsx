import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

// Replace with actual image imports or links
import slide1 from '../Images/slide1.png';
import slide2 from '../Images/slide2.png';
import slide3 from '../Images/slide3.png';

// Rename the custom component to MyCarousel to avoid conflicts
const MyCarousel = () => {
  return (
    <div className="carousel-container w-full h-screen overflow-hidden"> {/* Ensure the container takes up the full screen */}
      <Carousel>
        <Carousel.Item>
          <img
            className=" w-full h-full object-cover"  // Set image to cover full width and height
            src={slide1}  
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-full h-full object-cover"
            src={slide2}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-full h-full object-cover"
            src={slide3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
