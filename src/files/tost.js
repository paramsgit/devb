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
      const [attwidth, setattwidth] = useState(window.innerWidth * .35);
      const [attheight, setattheight] = useState(500);
      const [width, setwidth] = useState(window.innerWidth * .35);
      const [height, setheight] = useState(500);

      const [firstimage, setfirstimage] = useState('abc.jpg');
      useEffect(() => {
       
        if(bigscreenwidth< window.innerHeight){
          setbigscreenwidth(window.innerWidth * .96)
          setbigscreenheight(bigscreenwidth)
          setroomwidth(window.innerWidth * .90 )
          setroomheight(roomwidth *2)
          setattwidth(window.innerWidth * .90 )
          setattheight(attwidth *2)
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
            <div className="ftop kft">
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
          <div className='twrem rmtxt' >
           
           <p className='linetext'>We aimed to design, develop and build a secure NFT marketplace with a modern, colorful</p>
           
         </div>
          </div>

          <div className="gatepass">
          <div className="gatetext">
                <h2 className='featureheads'>Gate-Pass</h2>
              </div>
          <div className="gatepassdiv">
            <div className="firstgatepassdiv">
              <div className="gateleft">
                <div className="glcontent">
                <div className="headgen">Generate Gate-Pass </div>
              <p className='gengtext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iste nam doloribus eius architecto similique?</p>
              <p className='gengtext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iste nam doloribus eius architecto similique?</p>
              <p className='gengtext'> adipisicing elit. Animi iste nam doloribus eius architecto similique?</p>
              </div>
              </div>
              <div className="gateright">
                <div className="gateimg">
                <Post width={roomwidth} height={roomheight} image={firstimage}/>
                </div>
              </div>
            </div>


            <div className="secondgatepassdiv">
            <div className="gatelefts">
            <div className="gateimg">
                <Post width={roomwidth} height={roomheight} image={firstimage}/>
                </div>
            </div>
              <div className="gaterights">
              <div className="glcontent">
                <div className="headgen">Generate Gate-Pass </div>
              <p className='gengtext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iste nam doloribus eius architecto similique?</p>
              <p className='gengtext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iste nam doloribus eius architecto similique?</p>
              <p className='gengtext'> adipisicing elit. Animi iste nam doloribus eius architecto similique?</p>
              </div>
              </div>
            </div>
          </div>

          </div>

          <div className="attendance">
          <div className="gatetext">
                <h2 className='featureheads'>Attendance</h2>
              </div>
              <div className="attendancediv">
                <div className="aleft">
                <div className="att_img">
                <Post width={attwidth} height={attheight} image={firstimage}/>
                </div>
                </div>
                <div className="aright">
                <div className="att_img2">
                <Post width={attwidth} height={attheight} image={firstimage}/>
                </div>
                </div>
              </div>

              <div className='att_det' >
           
           <p className='linetext atl'>We aimed to design, develop and build a secure NFT marketplace Lorem ipsum dolor </p>
           <p className='linetext atl'>We aimed to design, develop and build a secure NFT marketplace Lorem ipsum dolorlorem15
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit odit quis facilis mollitia eius tempore? </p>
           
           
         </div>
          </div>


          <div className="gatepass">
          <div className="gatetext">
                <h2 className='featureheads'>Complaints & Issues</h2>
              </div>
          <div className="gatepassdiv">
            <div className="firstgatepassdiv">
              <div className="gateleft">
                <div className="glcontent">
                <div className="headgen">Complians</div>
              <p className='gengtext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iste nam doloribus eius architecto similique?</p>
              <div className="headgen">Feedback</div>
              <p className='gengtext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iste nam doloribus eius architecto similique?</p>
              </div>
              </div>
              <div className="gateright">
                <div className="gateimg">
                <Post width={roomwidth} height={roomheight} image={firstimage}/>
                </div>
              </div>
            </div>


          </div>

          </div>
    </ReactLenis>
        </>
    );
    
}


