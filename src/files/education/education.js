import React,{useState,useEffect} from 'react';
import { Postcpe } from './postcpe';
// import edu1 from '../static/edu1.jpg'
// import edu2 from '../static/edu2.jpg'
export const Education = () => {

  useEffect(() => {
   
    handleResize();
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      const handleResize = () => {
        // Run your function here whenever the window is resized
        console.log("resizizng")
        if(window.innerWidth< 600){
          console.log("smaller than 600")
          settab(
            <div >
             
            <Postcpe br={br} width={roomwidth2} height={roomheight2} image={gatephoto} speed={speed2} />
        
            </div>
          )
         }else{
           settab(
             <div >
             
           <Postcpe br={br} width={roomwidth} height={roomheight} image={gatetoken} speed={speed}/>
       
           </div>
           )
         }
        if(window.innerWidth< 600){
          console.log("smaller than 600")
          settab2(
            <div >
             
            <Postcpe br={br} width={roomwidth2} height={roomheight2} image={gatephoto} speed={speed2} />
        
            </div>
          )
         }else{
           settab2(
             <div >
             
           <Postcpe br={br} width={roomwidth} height={roomheight} image={gatephoto} speed={speed} />
       
           </div>
           )
         }




      };

      const [swidth, setswidth] = useState(window.innerWidth);
      const [roomwidth, setroomwidth] = useState(window.innerWidth * .6);
      const [roomwidth2, setroomwidth2] = useState(window.innerWidth * .9);
      const [roomheight, setroomheight] = useState(500);
      const [roomheight2, setroomheight2] = useState(window.innerWidth/2);
      const [gatephoto, setgatephoto] = useState('edu2.jpg');
      const [gatetoken, setgatetoken] = useState('edu1.jpg');
      const [br, setbr] = useState(40);
      const [speed, setspeed] = useState(-10);
      const [speed2, setspeed2] = useState(0);
    
      const [tab, settab] = useState(
        <div >
        <Postcpe br={br} width={roomwidth} height={roomheight} image={gatetoken} speed={speed}/>
    
        </div>
      );
      const [tab2, settab2] = useState(
        <div >
        <Postcpe br={br} width={roomwidth} height={roomheight} image={gatephoto} speed={speed} />
    
        </div>
      );
  return (
    <>
  <div className="educations">
{tab}

  </div>
  <div className="educations">
{tab2}

  </div>
    </>
  )
}
