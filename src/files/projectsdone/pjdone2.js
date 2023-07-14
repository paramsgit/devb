
import React,{useState,useEffect} from 'react';
import { Postcp } from '../projects-files/postcp';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

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
  const [gatetoken, setgatetoken] = useState('/socialbook/blueb2.jpg');
  const [br, setbr] = useState(7);

  const [tab, settab] = useState(
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
  );

 

  return (
    <div>


<div className="gatepass">
          <div className="gatetext startpro1">
                <h2 className=' featureheads'>Social media web app with CI/CD</h2>
              </div>
          <div className="gatepassdiv">
         


            <div className="firstgatepassdiv">
           
              <div className="gateleft">
                <div className="proglcontent glcontent">
                <div className="headgen">Introduction </div>
              <p className='gengtext'>Introducing a Django social media web application with CI/CD using Jenkins. A user-friendly social media platform is created using the Django framework and Jenkins automation in this project.</p>
              <p className='gengtext'> With features like user profiles, posts, and interactions, it offers a seamless experience for connecting and sharing.</p>
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
                  <li className='feature_list_li'>Registration with email verification </li>
                  <li className='feature_list_li'>Make new friends by following each other</li>
                  <li className='feature_list_li'>Users can upload and share their photos. They can provide captions and even can delete any time.</li>
                  <li className='feature_list_li'>Users can express their appreciation for posts by liking them, number of likes and Date and time of post is displayed on each post.</li>
                  <li className='feature_list_li'> Real-time chat feature that allows users to communicate.</li>
                  <li className='feature_list_li'>Profile section for each user for managing personal data,npsuch as username, bio, and other details.</li>
                  
                  {/* <li className='feature_list_li'>Admin section for efficient management and monitoring of hostel activities</li> */}
                  
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
             <div className="headgen">Continuous Integration and Continuous Deployment </div>
             <ul className='feature_list'>
           <li className='feature_list_li'>In this architecture, an AWS EC2 instance is utilized to set up two containers. The first container hosts the Django application, while the second container runs Jenkins.</li>
           <li className='feature_list_li'>With this setup, whenever code is pushed to GitHub, Jenkins automatically triggers the testing, building, and deployment processes, ensuring seamless integration and delivery of updates to the Django app running in the first container.</li>
           <li className='feature_list_li'>  The use of Docker enables efficient containerization and isolation of the application components.</li>
           </ul>
           </div>
           <div className="pj_tech">
                <span className='pj_tech_head pj_tech_head2'>
                  Tech stack
                </span>
                  <div className="pj_t_first pj_t_first2">
                    <div className="pj_ftech">
                    <p align="center">
                  <a >
                    <img className='skillicon skillicon2' src="https://skillicons.dev/icons?i=django,sqlite,html,bootstrap,js,aws,jenkins,docker,bash,&perline=14" />
                  </a>
                </p>

                    </div>
                  </div>
               
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
