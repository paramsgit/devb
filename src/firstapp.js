import './App.css';
import './mycss.css';
import './stemp.css';
import './caro.css';
import { useRef,useEffect } from 'react';
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
function Firstapp() {
  const lenis = useLenis(({scroll}) => {
    // called every scroll
  })


  return (

  <>

<ReactLenis root options={{}}>

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
  {/* <div id='a_contact_id'></div> */}
  
 


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