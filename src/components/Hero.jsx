import React, { useRef, useEffect } from 'react'
import HomeStyle from './Hero.css'

const Hero = (props) => {
  const homeElementRef = useRef(null);
  
  useEffect( () => {
    setTimeout( () => {
      if (homeElementRef.current) {
        homeElementRef.current.style.animation = 'scaleImage 2s linear infinite';
      }
    },1500)
  },[props.slide === false])

  return (
    <div ref={homeElementRef} className='bg-slate-900 h-screen flex items-center'>
        <img src="../logo.png" className="h-[38vh] lg:h-screen w-screen p-20 transition-all duration-700" alt="Image"/>
    </div>
  )
}

export default Hero