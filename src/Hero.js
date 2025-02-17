import React from 'react';
import video from './video.mp4';

const Hero = () => {
  return (
    <div data-aos='fade-down' >
      <video width="100%" height="auto" autoPlay loop >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Hero;