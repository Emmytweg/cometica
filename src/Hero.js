import React from 'react';

const Hero = () => {
  return (
    <div data-aos='fade-down' >
      <video width="100%" height="auto" autoPlay loop >
        <source src='https://res.cloudinary.com/dgp2rflma/video/upload/v1739821186/video_jn2hae.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Hero;