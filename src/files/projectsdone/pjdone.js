
import React,{useState,useEffect} from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Postcp } from '../projects-files/postcp';
import ptab from '../static/threep.png'
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
          {/* <div className='eyediv'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
  
</svg>
<p className='eyedemo'>Demo</p>
</div>
<Link to="/quiz" target={'_blank'}> */}
       <Postcp br={br} width={roomwidth} height={roomheight} image={gatetoken} />
       {/* </Link> */}
   
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
     
      {/* <div className='eyediv'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
  
</svg>
<p className='eyedemo'>Demo</p>
</div> */}
{/* <Link to="/quiz" target={'_blank'}> */}
       <Postcp br={br} width={roomwidth} height={roomheight} image={gatetoken} />
       {/* </Link> */}




    </div>
  );

 

  return (
    <div >


<div className="gatepass">
          <div className="gatetext startpro1">
                <h2 className=' featureheads'>Modern Hostel Management</h2>
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
                <img className='teenphone' src={ptab} alt="" />
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
              <div className="pj_tech">
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
                  {/* <div className="pj_t_first">
                    <div className="pj_ftech">
                    <p align="center">
                  <a href="https://skillicons.dev">
                    <img className='skillicon' src="https://skillicons.dev/icons?i=nodejs,expressjs,mongodb,python,github,&perline=14" />
                  </a>
                </p>

                    </div>
                  </div> */}
                </div>
              </div>
            </div>

               

          </div>

          </div>

    </div>
  )
}
