// import React from 'react'
import React,{useState,useEffect} from 'react';
import { Link } from 'react-scroll';
import { Post } from './post';
import { Lenis as ReactLenis, useLenis } from '@studio-freight/react-lenis'
import githublogo from './static/github-mark.svg';
export const Tost = () => {
    const lenis = useLenis(({scroll}) => {
        // called every scroll
      })


      const [bigscreenwidth, setbigscreenwidth] = useState(window.innerWidth * .8);
      const [bigscreenheight, setbigscreenheight] = useState(600);
      const [roomwidth, setroomwidth] = useState(window.innerWidth * .37);
      const [roomheight, setroomheight] = useState(600);
      const [firstimage, setfirstimage] = useState('abc.jpg');
      useEffect(() => {
       
        if(bigscreenwidth< window.innerHeight){
          setbigscreenwidth(window.innerWidth * .96)
          setbigscreenheight(bigscreenwidth)
          setroomwidth(window.innerWidth * .90 )
          setroomheight(roomwidth *2)
        }
      },[]);
    return (
        <>
        <ReactLenis root options={{}}>
        <div className="ftop">
          <div className="basicintro">
            <div className="headingop">Dopop </div>
            <div className="nameofp">Online marketplace to</div>
          </div>

         
          <div className="outerone"  >
        <Post width={bigscreenwidth} height={bigscreenheight} image={firstimage}/>
      </div>
        </div>
        <div className="twolines">
          <div className='twrem'>
            <h1 className='heads'>Introduction</h1>
            <p className='linetext'>We aimed to design, develop and build a secure NFT marketplace with a modern, colorful, and user-friendly interface that would appeal to any crypto enthusiast, whether they were new or experienced.</p>
            <button className='gitbtn'>Link 

              <img className='gitimg' src={githublogo} alt="githublogo" />
              
            </button>
          </div>
          <div className="outerone">
          <Post width={bigscreenwidth} height={bigscreenheight} image={firstimage}/>
          </div>
          </div>

          <div className='featuresheading'>
            <div className="ftop">
            <div className="headingop">Key Features </div>
            </div>
          </div>

          <div className="roombook">
          <div className="roomdiv">
            <div className="roomleft">
              <div className="roomtext">
                <h2 className='featureheads'>Room  Booking</h2>
              </div>
              <div className="roomimg">
            <Post width={roomwidth} height={roomheight} image={firstimage}/>
            </div>
            </div>
            <div className="roomright">
            <div className="roomimg">
            <Post width={roomwidth} height={roomheight} image={firstimage}/>
            </div>
            </div>
          </div>
          </div>
    </ReactLenis>
        </>
    );
}


