// import React from 'react'
import React,{useState,useEffect} from 'react';
// import { Link } from 'react-scroll';
import { Post } from './post';
import { Lenis as ReactLenis, useLenis } from '@studio-freight/react-lenis'
import githublogo from '../static/github-mark.svg';
import { Technologies } from './technologies';
import { Footer } from './footer';
export const Tost = () => {
    const lenis = useLenis(({scroll}) => {
        // called every scroll
      })


      const [bigscreenwidth, setbigscreenwidth] = useState(window.innerWidth * .8);
      const [bigscreenheight, setbigscreenheight] = useState(700);
      const [roomwidth, setroomwidth] = useState(window.innerWidth * .37);
      const [roomheight, setroomheight] = useState(600);
      const [attwidth, setattwidth] = useState(window.innerWidth * .35);
      const [attheight, setattheight] = useState(500);
      const [width, setwidth] = useState(window.innerWidth * .35);
      const [height, setheight] = useState(500);
      const [br, setbr] = useState(60);

      const [firstimage, setfirstimage] = useState('photo7.jpg');
      const [mobileview, setmobileview] = useState('mobile4.jpg');
      const [room1, setroom1] = useState('room3.jpg');
      const [mess, setmess] = useState('mess2.jpg');
      const [gatephoto, setgatephoto] = useState('gate2.jpg');
      const [gatetoken, setgatetoken] = useState('gate9.jpg');
      const [attphoto, setattphoto] = useState('att1.jpg');
      const [attphoto2, setattphoto2] = useState('att9.jpg');
      const [compphoto, setcompphoto] = useState('comp.jpg');
      const [adminpho, setadminpho] = useState('admin.jpg');
      useEffect(() => {
       document.getElementById('cv').style.display='none'
      //  document.getElementById('footer_cont_sec').style.transform='none'
      
        if(bigscreenwidth< window.innerHeight){
          setbigscreenwidth(window.innerWidth * .96)
          setbigscreenheight(bigscreenwidth)
          setroomwidth(window.innerWidth * .90 )
          setroomheight(roomwidth *2)
          setattwidth(window.innerWidth * .90 )
          setattheight(attwidth *2)
          setbr(30)
          setfirstimage('temp2.jpg')
        }
      },[]);


      
    return (
        <>
        <ReactLenis root options={{}}>
        <div className="ftop">
          <div className="basicintro">
            <div className="headingop">N I T J </div>
            <div className="nameofp">Modern Hostel Management</div>
          </div>

         
          <div className="outerone"  >
        <Post br={br} width={bigscreenwidth} height={bigscreenheight} image={firstimage} />
      </div>
        </div>
        <div className="twolines">
          <div className='twrem'>
            <h1 className='heads'>Introduction</h1>
            <p className='linetext'>
            
Introducing our cutting-edge Modern Hostel Management project, designed to revolutionize the way hostels operate. With its innovative features and user-friendly interface, aims to streamline administrative tasks and optimize overall hostel operations .
            
            </p>
            <button className='gitbtn'>Link 

              <img className='gitimg' src={githublogo} alt="githublogo" />
              
            </button>
          </div>
          <div className="outerone">
          <Post br={br} width={bigscreenwidth} height={bigscreenheight} image={mobileview}/>
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
            <Post br={br} width={roomwidth} height={roomheight} image={room1}/>
            </div>

           
            </div>
            <div className="roomright">
            <div className="roomimg">
            <Post br={br} width={roomwidth} height={roomheight} image={mess}/>
            </div>
            </div>
            
          </div>
          <div className='twrem rmtxt' >
           
           <p className='linetext'>Students can view available rooms and book them based on their preferences and availability.</p>
           
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
                <div className="headgen">Gate-Pass </div>
              <p className='gengtext'>Students have to fill leave form and can download their gate pass .</p>
              <p className='gengtext'>The gate pass token will be scanned by security personnel at the gate for verification.</p>
              <p className='gengtext'> The timestamp records for Out time and In time are efficiently and seamlessly updated through an automated process upon successful scanning. </p>
              </div>
              </div>
              <div className="gateright">
                <div className="gateimg">
                <Post br={br} width={roomwidth} height={roomheight} image={gatetoken}/>
                </div>
              </div>
            </div>


            <div className="secondgatepassdiv">
            <div className="gatelefts">
            <div className="gateimg">
                <Post br={br} width={roomwidth} height={roomheight} image={gatephoto}/>
                </div>
            </div>
              <div className="gaterights">
              <div className="glcontent">
                <div className="headgen">Generate Gate-Pass </div>
           
              <p className='gengtext'>The initial step  involves confirming the absence of an active gate pass or any indication of your departure from the campus. </p>
              <p className='gengtext'>Then fill your basic details like estimated return date and time, reason and additional mobile number for contact.</p>
              <p className='gengtext'> After successful submission you can download your gate pass. </p>
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
                <Post br={br} width={attwidth} height={attheight} image={attphoto}/>
                </div>
                </div>
                <div className="aright">
                <div className="att_img2">
                <Post br={br} width={attwidth} height={attheight} image={attphoto2}/>
                </div>
                </div>
              </div>

              <div className='att_det' >
           
           <p className='linetext atl'>Students' attendance will be marked after face and location verification.</p>
           <p className='linetext atl'>The system checks if the student is not on leave before verifying the location. Students need to scan their face for attendance verification. </p>
           
           
         </div>
          </div>


          <div className="gatepass complains_and_feedback">
          <div className="gatetext">
                <h2 className='featureheads cah'>Complaints <span className='aiss'>  & Issues</span></h2>
              </div>
          <div className="gatepassdiv">
            <div className="firstgatepassdiv">
              <div className="gateleft">
                <div className="glcontent">
                <div className="headgen">Complaints</div>
              <p className='gengtext'>Students can submit complaints or issues they encounter within the hostel.</p>
              <p className='gengtext'>All types of complaints are solved by hostel staff and update the status of complaint. </p>
              <p className='gengtext'> Students can track the status of their complaints and receive updates.</p>
              <div style={{marginTop:"20px"}} className="headgen">Feedback</div>
              <p className='gengtext'>Students are encouraged to share their valuable feedback on their experiences and offer suggestions for potential improvements. </p>
              </div>
              </div>
              <div className="gateright">
                <div className="gateimg">
                <Post br={br} width={roomwidth} height={roomheight} image={compphoto}/>
                </div>
              </div>
            </div>


          </div>

          </div>

          <div className="gatepass admin_section">
          <div className="gatetext">
                <h2 className='featureheads adminsechead'> Admin Section </h2>
              </div>
       
            
          <div className="outerone gateimg"  >
        <Post br={br} width={bigscreenwidth} height={bigscreenheight} image={adminpho}/>
      </div>
          </div>



          <Technologies/>

          <div className="ftop" id="demo">
          <div className="basicintro">
          <div className="nameofp">Demo</div>
            
           
          </div>

          
          <div className="outerone gateimg"  >
        {/* <Post br={br} width={bigscreenwidth} height={bigscreenheight} image={firstimage}/> */}


        <iframe style={{borderRadius:"30px"}} width={bigscreenwidth} height={bigscreenheight}  title="Project Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen src="https://www.youtube.com/embed/wpyJBa8TeVU">
</iframe>
      </div>
        </div>
          
      {/* <Footer/> */}

    </ReactLenis>
        </>
    );
    
}


