
import React,{useState,useEffect} from 'react';
import { Postcp } from '../projects-files/postcp';

export const Pjdone = () => {

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
       <div className="ipad" id='ipad2'>
       </div>
      )
     }else{
       settab(
         <div className="ipad" id='ipad'>
       <Postcp br={br} width={roomwidth} height={roomheight} image={gatetoken} />
   
       </div>
       )
     }
  };

  const [swidth, setswidth] = useState(window.innerWidth);
  const [roomwidth, setroomwidth] = useState(479);
  const [roomheight, setroomheight] = useState(300);
  const [gatephoto, setgatephoto] = useState('photo72.jpg');
  const [gatetoken, setgatetoken] = useState('photo8.jpg');
  const [br, setbr] = useState(7);

  const [tab, settab] = useState(
    <div className="ipad" id='ipad'>
    <Postcp br={br} width={roomwidth} height={roomheight} image={gatetoken} />

    </div>
  );

 

  return (
    <div>


<div className="gatepass">
          <div className="gatetext">
                <h2 className='featureheads'>Project 1</h2>
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
                <div className="gateimg" >
                {/* <div className="ipad" id='ipad'>
                <Postcp br={br} width={roomwidth} height={roomheight} image={gatetoken} />
            
                </div> */}
                {tab}
               
                </div>
              </div>
            </div>


            {/* <div className="secondgatepassdiv">
            <div className="gatelefts">
            <div className="gateimg">
                <Post br={br} width={roomwidth} height={roomheight} image={gatephoto}/>
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
            </div> */}
          </div>

          </div>

    </div>
  )
}
