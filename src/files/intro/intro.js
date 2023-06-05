import React,{useRef,useEffect} from 'react'

// export const Intro = () => {
//   return (
//     <div>Intro</div>
//   )
// }

import { ParallaxBanner,ParallaxProvider } from 'react-scroll-parallax';

export const Intro = () => {
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
    image: 'banner/sf.png',
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


  return (
    <ParallaxProvider>
    <ParallaxBanner
      layers={[background, headline, foreground]}
      className="aspect-[2/1] bg-white-900"
      style={{height:"100vh",marginTop:"100px"}}
    />

<div className="center full" id='scnddiv' ref={targetRef} >
        <h1 className="headline gray">Goodnight.</h1>
      </div>
     </ParallaxProvider>
  );
};
