// Import React 
import React from 'react';
import AiStoryGenerator from './AiStoryGenerator';

// Import Components
import Navbar from '../Components/Navbar';
import MyCarousel from '../Components/MyCarousel';
import About from '../Components/About';
//import Footer from '../Components/Footer';

// Import the image
import homeImage from '../Images/Home.png'; // Adjust the path to where your image is

// Homepage Component
const Homepage = () => {
  return (
    <div className="relative w-full min-h-screen overflow-y-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 bg-no-repeat"
        style={{ backgroundImage: `url(${homeImage})`, height: '100vh'}} 
      ></div>


      {/* Main Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <Navbar />

        {/* Heading */}
        <div className="relative min-h-screen flex flex-col justify-center items-center text-center">
          <h1 className="text-black text-3xl md:text-7xl font-bold mb-20 animate-slideIn">
            Discover World of Wonder <br/>One Story at a Time
          </h1>
        
    
          <p className="text-lg md:text-3xl text-black mb-8 max-w-2xl mb-1">
            Unleash your imagination with AI-generated <br />tales, handcrafted just for you. <br />
            Explore stories, write your own, and <br />let your creativity soar!
          </p>

          <button className="bg-transparent text-black-600 text-xl font-semibold mt-8 px-8 py-3 border border-black rounded-full shadow-lg hover:bg-purple-100 transition duration-300">
            Read Stories Now
          </button>
        </div>

        {/* Carousel */}
        <div className="flex justify-center mb-12 overflow-hidden">
          <MyCarousel /> 
        </div>

        {/* About Section Below Carousel */}
        <div className="mt-12 flex justify-center">
          <About /> {/* Place About section here */}

        </div>
      </div>
      <div>
      <AiStoryGenerator/>
      </div>
    </div>
    
  );
}

export default Homepage;
