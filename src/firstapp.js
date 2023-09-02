import './App.css';
import './mycss.css';
import './stemp.css';
import './caro.css';
import { useRef,useEffect,useState } from 'react';
import { Projectapp } from './files/projectapp';

// import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Lenis as ReactLenis, useLenis } from '@studio-freight/react-lenis'

import {Intro} from './files/intro/intro'
import {Nav} from './files/navbar/nav'

import { Skill } from './files/skills/skill';
import { Pjdone } from './files/projectsdone/pjdone';
import { Pjdone2 } from './files/projectsdone/pjdone2';
import { Moreprojects } from './files/projectsdone/moreprojects';
import { Experience } from './files/certificates/experience';
import { Tost } from './files/projects-files/tost';
import { Education } from './files/education/education';
import { Sitefooter } from './files/footer/sitefooter';
import { Resume } from './files/footer/resume';
import useImagePreloader from './files/Loader/caching';
import { photos_list2 } from './files/constants/constant';
import { photos_list } from './files/constants/constant';
import Loader from './files/Loader/loader';
import loaderimg from './static/Loader_back.jpg'

function Firstapp() {
  const lenis = useLenis(({scroll}) => {
    // called every scroll
  })
  const { imagesPreloaded } = useImagePreloader(photos_list2)
  const [loaded,setloaded]=useState(false)
  const [loaded2,setloaded2]=useState(false)
  const [limg_scale,setlimg_scale]=useState(0.5)
  // const [imagesPreloaded,setimagesPreloaded]=useState(false)

  useEffect(() => {

    function call_everything(){
      setloaded(true)
      console.log("runfun is true now")
      
    
      const timer2=setTimeout(() => {
        
        document.getElementById('cv').classList.remove('noheight')
        document.getElementById('footer_id').classList.remove('noheight')
        document.getElementById('footer_cont_sec').classList.remove('noheight')
        document.getElementById('conclusion_id').classList.remove('noheight')
        console.log('runing')
      }, 1000);
    }
    function selo(){
      setloaded2(true)
    }
    if(imagesPreloaded){
      setlimg_scale(1)
      
      setTimeout(selo, 1000);
      setTimeout(call_everything, 2000);
    
    }
      
    }, [imagesPreloaded])

  return (

  <>


{/* {loaded ? (
        <ReactLenis root options={{}}>
          <div className={`${loaded2?'':'op0'} anime`}>
        <div id='a_home_id'></div>
          <Nav/>
          <Intro/>
        
          <Skill/>
         <div id='a_project_id'></div>
           <Pjdone/>
          
           <Pjdone2/>
           <Moreprojects/>
           <div id='a_experience_id'></div>
           <Experience/>
           <div id='a_education_id'></div>
          <Education/>
          <div id='a_contact_id'></div>
          
          </div>
        
        
          </ReactLenis>
       
      ) : (
        
        <>
<div className="loader_div">
  <img src={loaderimg} style={{scale:`${limg_scale}`,transition:'all 1s ease-in-out'}} alt="loader_img" />
</div>
        </>
      ) } */}

<ReactLenis root options={{}}>

<div className={`loader_div anime ${loaded2?'op0':''} `}>
  <img src={loaderimg} style={{scale:`${limg_scale}`,transition:'all 1s ease-in-out'}} alt="loader_img" />
</div>


          <div className={`${loaded2?'':'op0'} anime`}>
        <div id='a_home_id'></div>
          <Nav/>
          <Intro/>
        
          <Skill/>
         <div id='a_project_id'></div>
           <Pjdone/>
          
           <Pjdone2/>
           <Moreprojects/>
           <div id='a_experience_id'></div>
           <Experience/>
           <div id='a_education_id'></div>
          <Education/>
          <div id='a_contact_id'></div>
          
          </div>
        
        
          </ReactLenis>

  </>
  );
}

export default Firstapp;

{/* <Skill/>
<Pjdone/>
<Pjdone2/>
<Moreprojects/>
<Experience/> */}