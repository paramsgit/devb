import React,{useRef,useEffect} from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import LocomotiveScroll from 'locomotive-scroll';
export const Post = () => {


  const containerRef = useRef(null);



    return (
        <>

      
         <ParallaxProvider>
        <div style={{height:"700px"}}></div>
        <div data-scroll-container ref={containerRef}>
        <ParallaxBanner
          layers={[{ image: 'abc.jpg', speed: -15 }]}
          className="aspect-[2/1]"
          style={{width:"600px",height:"400px"}} 
        />
      
        </div>
        <div style={{height:"700px"}}></div>
        </ParallaxProvider>
              

        </>
      );
}
