import React from 'react'
import { useParallax,Parallax,ParallaxProvider } from 'react-scroll-parallax';
// import nitjlogo from '../../static/nitjlogo.png'
// import pseb from '../../static/pseb.png'
import { nitjlogo,pseb } from '../constants/constant';
export const Education = () => {
  return (
 <>
  
  <div className="cert_heading" id="cheadt">
  <h1 className="certf_title">Educatio<span className="greenN">n</span></h1>
</div>

  <div className="education">
    <div className="edu_left">
      <img className='college_logo' src={nitjlogo} alt="nitj" />
    </div>
    <div className="edu_right">
      <div className="college_name">
      <p className='drbr'>Dr. B.R. Ambedkar</p>
      <p className='nitj'>National Institute of Technology, Jalandhar</p>
      </div>
      <div className="degree">
        <p>Electronics & Communication Engineering</p>
      </div>
      <div className="deg_time">
        <p className='deg_year'>2020-2024</p>
        <p className='deg_grade'>7.6 CGPA</p>
      </div>
    </div>
  </div>
  <div className="education">
    <div className="edu_left">
      <img className='college_logo' src={pseb} alt="nitj" />
    </div>
    <div className="edu_right">
      <div className="college_name">
      {/* <p className='drbr'>Dr. B.R. Ambedkar</p> */}
      <p className='nitj'>Govt. Sen. Sec. School, Bhucho Kalan</p>
      </div>
      <div className="degree">
        <p>Senior Secondary Education</p>
      </div>
      <div className="deg_time">
        <p className='deg_year'>2017-2019</p>
        <p className='deg_grade'>91.11%</p>
      </div>
    </div>
  </div>
 </>
  )
}
