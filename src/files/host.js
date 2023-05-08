import React,{useRef} from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import LocomotiveScroll from 'locomotive-scroll';
export const Host = () => {
  const containerRef = useRef(null)

  return (
    <>
    <LocomotiveScrollProvider
  options={
    {
      smooth: true,
    }
  }>
    <div className="div" id='dsc' data-scroll-container ref={containerRef}>
      <div className="outerone" data-scroll-section>
        <div className="innerone"></div>
      </div>
      <div className="outerone" data-scroll-section >
        <div className="innerone" ></div>
      </div>
      <div className="outerone" data-scroll-section>
        <div className="innerone"></div>
      </div>
    </div>
    </LocomotiveScrollProvider>
    </>
  )
}
