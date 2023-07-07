import './App.css';
import './mycss.css';
import './stemp.css';
import './caro.css';
import { useRef,useEffect } from 'react';
import { Projectapp } from './files/projectapp';
// import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Lenis as ReactLenis, useLenis } from '@studio-freight/react-lenis'


import { Sitefooter } from './files/footer/sitefooter';

function App2() {
  const lenis = useLenis(({scroll}) => {
    // called every scroll
  })


  return (

  <>

<ReactLenis root options={{}}>


  {/* <Nav/>
  <Intro/>

  <Education/>
  <Resume/> */}
  <Sitefooter/>
  
 


  </ReactLenis>


  </>
  );
}

export default App2;

{/* <Skill/>
<Pjdone/>
<Pjdone2/>
<Moreprojects/>
<Experience/> */}