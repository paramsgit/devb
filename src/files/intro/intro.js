import React,{useRef,useEffect,useState} from 'react'
import computerguy from '../static/computerguy.jpg'
import Lottie from 'react-lottie';
import ktm from '../codingboy.json'
import { ParallaxBanner,ParallaxProvider } from 'react-scroll-parallax';


export const Intro = () => {


  const [cbheight, setcbheight] = useState(400);
  const [cbwidth, setcbwidth] = useState(600);



  const targetRef = useRef(null);
  const background = {
    image: 'banner/banner-backgroundm1.jpg',
    translateY: [0, 50],
    opacity: [0.5, 0.5],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline = {
    translateY: [0, 35],
    scale: [1, 1.05, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex items-center mainbahrla">

        <div className="main_div">
          <div className="hiam">
          <h1 className="hiionly text-6xl md:text-8xl text-white font-thin">
          Hi, I  <span className='amonly text-6xl md:text-8xl text-white font-thin'> am</span>  
        </h1>
        <h1 className='myname'>Param</h1>
          </div>
       
        <p className='fswd'>
        Experienced and Passionate Full Stack Web developer
          
        </p>
        </div>

       
      
      </div>
    ),
  };

  const foreground = {
    image: 'banner/banner-foreground.png',
    translateY: [0, 5],
    scale: [1, 1.5, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  
  };

  const gradientOverlay = {
    opacity: [0, 1,"easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="gradient inset" />
    ),
  };

  useEffect(() => {
   
    if( window.innerWidth <700){
      // console.log("smaller")
      setcbwidth(300)
      setcbheight(200)

    }else{
      // console.log(window.innerWidth )
    }



    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8, // Fully visible target element
    };

    const handleScroll = () => {
      const targetPosition = targetRef.current.offsetTop;
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

       // Add a threshold percentage (e.g., 80%) to change the color before reaching 100% view
       const thresholdPercentage = 0.3; // Adjust this value as needed
       const thresholdPosition = targetPosition - (window.innerHeight * thresholdPercentage);
 
       if (scrollPosition >= thresholdPosition) {
        // console.log(thresholdPosition,scrollPosition)
         targetRef.current.style.backgroundColor = 'transparent'; // Change the background color
       } else {
         targetRef.current.style.backgroundColor = '#1b1919'; // Reset the background color
       }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
      layers={[background, headline, foreground,gradientOverlay]}
      className="aspect-[2/1] bg-gray-900"
      style={{height:"100vh",marginTop:"0px"}}
    />
    
    {/* <div className="center full">
        <h1 className="headline gray">Goodnight.</h1>
      </div> */}



<div className="center full" id='scnddiv' ref={targetRef} >
        <div className='aboutme'>

       
        <div className="aboutmeleft">
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
