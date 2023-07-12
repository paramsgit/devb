import React,{useRef} from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';
// import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
// import LocomotiveScroll from 'locomotive-scroll';
export const Postcp = (props) => {
 
  const containerRef = useRef(null);



    return (
        <>

      
         <ParallaxProvider>
       
        <div data-scroll-container ref={containerRef}>
        <ParallaxBanner
          layers={[{ image: props.image, speed: -10 }]}
          className="aspect-[2/1] aspectper aspectper2"
          style={{width:props.width,height:props.height, borderRadius:props.br,marginTop:"21px",marginLeft:"24px"}} 
        />
      
        </div>
        <div style={{height:"700px"}}></div>
        </ParallaxProvider>
              

        </>
      );
}
