import React,{useRef} from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { ParallaxBanner } from 'react-scroll-parallax';
import LocomotiveScroll from 'locomotive-scroll';
import abc from './static/abc.jpg'
export const Host = () => {
  const containerRef = useRef(null)

  return (
    <>
    <LocomotiveScrollProvider
  options={
    {
      smooth: true,
    }
  }>
    <div className="div" id='dsc' data-scroll-container ref={containerRef}>
      
      <div className="outerone" data-scroll-section >
        <div className="innerone" ></div>
      </div>
      <div className="outerone" data-scroll-section>
      <ParallaxBanner
      layers={[{ image: 'abc.jpg', speed: -15 }]}
      className="aspect-[2/1]"
    />
      </div>
      
      <div className="outerone" data-scroll-section >
        <div className="innerone" ></div>
      </div>
    </div>
   
    </LocomotiveScrollProvider>
  
    </>
  )
}
