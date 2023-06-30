
import React,{useState,useEffect} from 'react';
import { Postcp } from '../projects-files/postcp';
import ptab from '../static/threep2.png'
import ptab2 from '../static/macwc.png'
export const Pjdone2 = () => {

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
       <div className="ipad" id='ipad3'>
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
  const [gatetoken, setgatetoken] = useState('/socialbook/blueb2.jpg');
  const [br, setbr] = useState(7);

  const [tab, settab] = useState(
    <div className="ipad" id='ipad'>
    <Postcp br={br} width={roomwidth} height={roomheight} image={gatetoken} />

    </div>
  );

 

  return (
    <div>


<div className="gatepass">
          <div className="gatetext startpro1">
                <h2 className=' featureheads'>Social</h2>
              </div>
          <div className="gatepassdiv">
         
            {/* <div className="divintrotoproj">
            <p className='gengtext'>Our modern hostel management system is designed to streamline and enhance the management process of hostels, catering to both students and administrators. Our modern hostel management system significantly reduces paperwork, streamlining administrative tasks and promoting a more sustainable and eco-friendly approach.</p>
            </div> */}


            <div className="firstgatepassdiv">
           
              <div className="gateleft">
                <div className="proglcontent glcontent">
                <div className="headgen">Introduction </div>
              <p className='gengtext'>Our modern hostel management system is designed to streamline and enhance the management process of hostels, catering to both students and administrators.</p>
              <p className='gengtext'>Our system significantly reduces paperwork, streamlining administrative tasks and promoting a more sustainable and eco-friendly approach.</p>
              {/* <p className='gengtext'> adipisicing elit. Animi iste nam doloribus eius architecto similique?</p> */}
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


            <div className="prosgpdiv secondgatepassdiv">
            <div className="gatelefts">
            <div className="gateimg">
                {/* <Postcp br={br} width={roomwidth} height={roomheight} image={gatephoto}/> */}
                <img className=' teenphone2' src={ptab} alt="" />
                </div>
            </div>
              <div className="gaterights">
              <div className="glcontent">
                <div className="headgen">Key Features : </div>
              {/* <p className='gengtext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iste nam doloribus eius architecto similique?</p>
              <p className='gengtext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iste nam doloribus eius architecto similique?</p>
              <p className='gengtext'> adipisicing elit. Animi iste nam doloribus eius architecto similique?</p> */}
                <ul className='feature_list'>
                  <li className='feature_list_li'>Secure Sign-in/Sign-up using JWT tokens</li>
                  <li className='feature_list_li'>Easy and convenient room booking for students</li>
                  <li className='feature_list_li'>QR scanning gate pass tokens for paperless and quick leaves</li>
                  <li className='feature_list_li'>Accurate attendance tracking through face recognition technology</li>
                  <li className='feature_list_li'>Dedicated complaints/feedback section for students</li>
                  <li className='feature_list_li'>Admin section for efficient management and monitoring of hostel activities</li>
                  
                </ul>


              </div>
              {/* <div className="pj_tech">
                <span className='pj_tech_head'>
                  Tech stack
                </span>
                  <div className="pj_t_first">
                    <div className="pj_ftech">
                    <p align="center">
                  <a >
                    <img className='skillicon' src="https://skillicons.dev/icons?i=html,react,tailwind,js,nodejs,expressjs,mongodb,python,github,&perline=14" />
                  </a>
                </p>

                    </div>
                  </div>
                 
                </div> */}
              </div>
            </div>

            <div className="firstgatepassdiv thirdjenkins">
           
           <div className="gateleft">
             <div className="proglcontent glcontent">
             <div className="headgen">Introduction </div>
           <p className='gengtext'>Our modern hostel management system is designed to streamline and enhance the management process of hostels, catering to both students and administrators.</p>
           <p className='gengtext'>Our system significantly reduces paperwork, streamlining administrative tasks and promoting a more sustainable and eco-friendly approach.</p>
           {/* <p className='gengtext'> adipisicing elit. Animi iste nam doloribus eius architecto similique?</p> */}
           </div>
           </div>
           <div className="gateright">
             <div className="gateimg" >
             <img className=' teenphone3' src={ptab2} alt="" />
           
            
             </div>
           </div>
         </div>

          </div>

          </div>

    </div>
  )
}
