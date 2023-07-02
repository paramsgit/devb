import './App.css';
import './mycss.css';
import './stemp.css';
import './caro.css';

import { Projectapp } from './files/projectapp';
// import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Lenis as ReactLenis, useLenis } from '@studio-freight/react-lenis'
import {Nav} from './files/navbar/nav'
import {Intro} from './files/intro/intro'
import { Skill } from './files/skills/skill';
import { Pjdone } from './files/projectsdone/pjdone';
import { Pjdone2 } from './files/projectsdone/pjdone2';
import { Moreprojects } from './files/projectsdone/moreprojects';
import { Experience } from './files/certificates/experience';
import { Tost } from './files/projects-files/tost';
function App() {
  const lenis = useLenis(({scroll}) => {
    // called every scroll
  })

  
  return (
  <>

<ReactLenis root options={{}}>

 
  <Nav/>
  <Intro/>
  {/* <Skill/> */}
  {/* <Tost/> */}
  {/* <Pjdone/>
  <Pjdone2/>
  <Moreprojects/>
  <Experience/> */}
  
  </ReactLenis>

  </>
  );
}

export default App;
