import React,{useRef} from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';
// import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
// import LocomotiveScroll from 'locomotive-scroll';
export const Post = (props) => {
 
  const containerRef = useRef(null);



    return (
        <>

      
         <ParallaxProvider>
       
        <div data-scroll-container ref={containerRef}>
        <ParallaxBanner
          layers={[{ image: props.image, speed: -15 }]}
          className="aspect-[2/1] aspectper"
          style={{width:props.width,height:props.height}} 
        />
      
        </div>
        <div style={{height:"700px"}}></div>
        </ParallaxProvider>
              

        </>
      );
}
