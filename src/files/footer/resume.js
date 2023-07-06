import React from 'react'
import rs1 from '../static/a1.jpg'
import rs2 from '../static/a2.jpg'
import rs3 from '../static/a3.jpg'
import './th.css';

export const Resume = () => {
  return (
    <>
      <section id="cv" data-w-id="3854a94b-cbd3-220d-5fb9-df8b5cd8872e" className="cv" style={{marginTop:"500px"}}>
    <div className="cv-box"
      style={{
        willChange: 'transform, filter',
        transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
        transformStyle: 'preserve-3d',
        filter: 'grayscale(0%) brightness(100%)'
      }}>
      <div className="cv-fold-top">
        <img src={rs1} alt="CV Thomas Bosc - Content Manager" width="800"
          sizes="(max-width: 767px) 90vw, (max-width: 991px) 100vw, 800px" loading="lazy"
          srcSet={`${rs1} 500w, ${rs1} 1600w`} className="cv-fold-image" />

          </div>
      <div className="cv-fold-half">
        <div className="cv-fold-mid"
         style={{
            willChange: 'transform',
            transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(-120deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
            transformStyle: 'preserve-3d'
          }}>
          <img src={rs1} alt="CV Thomas Bosc - Content Manager" width="800"
            sizes="(max-width: 767px) 90vw, (max-width: 991px) 100vw, 800px" loading="lazy"
            srcSet={`${rs1} 500w, ${rs1} 1600w`} className="cv-fold-image"/></div>
        <div className="cv-fold-bottom"
          style={{
            willChange: 'transform',
            transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(-90deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
            transformStyle: 'preserve-3d'
          }}>
          <img src={rs3} alt="CV Thomas Bosc - Content Manager" width="800"
            sizes="(max-width: 767px) 90vw, (max-width: 991px) 100vw, 800px" loading="lazy"
            srcSet={`${rs3} 500w, ${rs3} 1600w`} className="cv-fold-image"/></div>
      </div>
    </div>
    <div className="cv-download">
      <div className="cv-download-sticky">
        <h2 className="h2-title h2-title-cv">
          <font className="vla">
            <font className="vla">A little </font>
          </font><br/>
          <font className="vla">
            <font className="vla">memory?</font>
          </font>
        </h2>
        <a href="https://thomasbosc.com/documents/CV-Thomas-Bosc---FR.pdf" rel="noreferrer" target="_blank"
          className="cta w-inline-block">
          <div className="cta-text">
            <font className="vla">
              <font className="vla">download my resume</font>
            </font>
          </div>
          <div className="cta-hover">
            <div className="cta-hover-bar"
              style={{
                transform: 'translate3d(-101%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                transformStyle: 'preserve-3d'
              }}>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
    
    </>
  )
}
