import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import cf1 from '../../static/cf1.jpg'
import cf2 from '../../static/cf2.jpg'
import cf3 from '../../static/cf3.jpg'
import cf4 from '../../static/cf4.jpg'
import cf5 from '../../static/cf5.jpg'
const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0,  }
};

const Box = ({ num }) => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <h1> {num} </h1>
    </motion.div>
  );
};

export const Experience=()=> {
  return (

    <>
    <div className="experience_div">
    <div className="cert_heading" id="cheadt">
  <h1 className="certf_title">Experie <span className="greenN">n</span> ce</h1>
</div>

<ol className="etimeline relative border-l border-gray-200 dark:border-gray-700">                  
    <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2023 - July 2023</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AICTE Cloud Internship</h3>
        <p className="intyop text-base font-normal text-gray-500 dark:text-gray-400"> Developed pipelines on GitHub Actions to improve the
efficiency of the CI/CD process</p>
        <p className="intyop text-base font-normal text-gray-500 dark:text-gray-400">Collaborate with the team for building and deploying process</p>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Experienced with Docker, Shell, AWS</p>
        {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></a> */}
    </li>
    <li className="mb-7 ml-4">
       
       
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Freelancer</h3>
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className=" mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2023</time>
        <h4 className="freel font-semibold ">GS Agri Works</h4>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Designed and created complete website for GS.</p>
    </li>
    <li className="ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Present</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">FreePays</h3>
        <p className="intyop text-base font-normal text-gray-500 dark:text-gray-400">
          Built RESTful APIs for new features that served data to the Javascript front-end based on dynamically chosen user input
        </p>
        <p className="intyop text-base font-normal text-gray-500 dark:text-gray-400">Streamlined the continuous integration and deployment pipeline with jenkins</p>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Improved code quality and bugs.</p>
    </li>
</ol>

    </div>


    <div className="Rapp" id="rapp">
      
<div className="cert_heading" id="cheadt">
  <h1 className="certf_title">Certific<span className="greenN">a</span> tes</h1>
</div>


      <Box num={<div className="innerbox">
<div className="certificate">
  <img src={cf1} alt="" />
</div>
      </div>} />
      <Box num={<div className="innerbox">
<div className="certificate">
<img src={cf5} alt="" />
</div>
      </div>} />
      <Box num={<div className="innerbox">
<div className="certificate">
<img src={cf3} alt="" />
</div>
      </div>} />
      <Box num={<div className="innerbox">
<div className="certificate">
<img src={cf4} alt="" />
</div>
      </div>} />
      <Box num={<div className="innerbox">
<div className="certificate">
<img src={cf2} alt="" />
</div>
      </div>} />
    
     
    </div>

    </>
  );
}
