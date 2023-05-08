import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';
export const Post = () => {
    return (
        <>
        <div style={{height:"700px"}}></div>
        <div >
        <ParallaxBanner
          layers={[{ image: 'abc.jpg', speed: -15 }]}
          className="aspect-[2/1]"
          style={{width:"600px",height:"400px"}}
        />
        </div>
        <div style={{height:"700px"}}></div>
        </>
      );
}
