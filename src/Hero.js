import { video } from 'framer-motion/client';
import React from 'react';
import { useEffect, useRef } from 'react';

const Hero = () => {

  const videoRef =  useRef(null)

  useEffect(() => {
    if(videoRef.current){
      videoRef.current.play().catch((error) => {
console.log('Autoplay blocked:',error)
      })
    }
  
  
  }, [])
  
  return (
    <div data-aos='fade-down' >
      <video width="100%" height="auto" autoPlay muted playsInline loop ref={videoRef}>
        <source src='https://res.cloudinary.com/dgp2rflma/video/upload/v1739821186/video_jn2hae.mp4' type="video/mp4"  />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Hero;