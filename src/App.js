// import './App.css';
// import './mycss.css';
import './stemp.css';
import './caro.css';

import { Projectapp } from './files/projectapp';
// import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Lenis as ReactLenis, useLenis } from '@studio-freight/react-lenis'
// import {Nav} from './files/navbar/nav'
// import {Intro} from './files/intro/intro'
import { Skill } from './files/skills/skill';
function App() {
  const lenis = useLenis(({scroll}) => {
    // called every scroll
  })
  return (
  <>

<ReactLenis root options={{}}>

 
  {/* <Nav/>
  <Intro/> */}
  <Skill/>
  </ReactLenis>

  </>
  );
}

export default App;
