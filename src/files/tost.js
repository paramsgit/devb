// import React from 'react'
import React from 'react';
import { Link } from 'react-scroll';
import { Post } from './post';
import { Lenis as ReactLenis, useLenis } from '@studio-freight/react-lenis'
export const Tost = () => {
    const lenis = useLenis(({scroll}) => {
        // called every scroll
      })
    return (
        <>
        <ReactLenis root options={{}}>
        <div className="div" id='dsc'>
    
    <div className="outerone">

      <div>
        <div className="innerone" ></div></div>
      </div>
    <div className="outerone"  >
        <Post/>
      </div>
      <div className="outerone" >
        <div className="innerone"  ></div>
      </div>
    
    </div>
   
    </ReactLenis>
        </>
    );
}


