import React,{useRef,useEffect,useState} from 'react'
import computerguy from '../static/computerguy.jpg'
import Lottie from 'react-lottie';
import ktm from '../codingboy.json'
import { ParallaxBanner,ParallaxProvider } from 'react-scroll-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
// import Fade from 'react-reveal/Fade';
// import Slide from 'react-reveal/Slide';

export const Intro = () => {


  const [cbheight, setcbheight] = useState(400);
  const [cbwidth, setcbwidth] = useState(600);



  const targetRef = useRef(null);
  const background = {
    image: 'banner/back.png',
    translateY: [0, 50],
    opacity: [0.5, 0.5],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline = {
    translateY: [0, 30],
    scale: [1, 1.05, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-6xl md:text-8xl text-white font-thin">
          Hello World!
        </h1>
      </div>
    ),
  };

  const foreground = {
    image: 'banner/sf2.png',
    translateY: [0, 15],
    scale: [1, 1.5, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const gradientOverlay = {
    opacity: [0, 0.9],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0" />
    ),
  };

  useEffect(() => {
    AOS.init();
    if( window.innerWidth <700){
      console.log("smaller")
      setcbwidth(300)
      setcbheight(200)

    }else{
      console.log(window.innerWidth )
    }



    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8, // Fully visible target element
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log("red")
          document.body.style.backgroundColor = 'white'; 
          document.getElementById('scnddiv').style.backgroundColor = 'white'; // Change the body color
        } else {
            console.log("white")
          // document.body.style.backgroundColor = 'white';
          document.getElementById('scnddiv').style.backgroundColor = '#f3f4f1'; // Reset the body color
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }


  
    return () => {
      observer.disconnect();
    };
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ktm,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <ParallaxProvider>
    <ParallaxBanner
      layers={[background, headline, foreground]}
      className="aspect-[2/1] bg-white-900"
      style={{height:"100vh",marginTop:"80px"}}
    />

<div className="center full" id='scnddiv' ref={targetRef} >
        <div className='aboutme'>

       
        <div data-aos="fade-left" className="aboutmeleft">
            <div className="main_title text-left">
						<h2 className='lmim'> Let me <br/>
							Introduce myself</h2>
						<p className='myintroduction'>
						I am a passionate programmer and web developer currently in my final year of BTech, with a strong focus on creating exceptional digital experiences. Join me as I showcase my projects and share my journey in the world of technology.
						</p>
					
					</div>
          </div>
       

         
          <div className="aboutmeright">
         
            <div className="aboutrightimgdiv">
              {/* <img src={computerguy} alt="" className='computerguyimg' /> */}
              <Lottie 
	    options={defaultOptions}
        height={cbheight}
        width={cbwidth}
      />
      </div>

  
          </div>
        </div>
      </div>
     </ParallaxProvider>
  );
};
