import React from 'react'
import htmllogo from '../static/htmlpng.png'
import csslogo from '../static/css.png'
import jslogo from '../static/js.png'
import reactlogo from '../static/react.png'
import tailwindlogo from '../static/tailwind.png'
import nodelogo from '../static/node.png'
import pythonlogo from '../static/python.png'
import restlogo from '../static/rest.png'
import mongologo from '../static/mongodb.png'
export const Technologies = () => {
  return (
    <>

<div className="gatepass tech_used">
          <div className="gatetext">
                <h2 className='featureheads'>Anothr head</h2>
              </div>
       
              <div className='featuresheading fte2'>
            <div className="ftop kft">
            <div className="headingop">Frontend </div>
            </div>
          </div>
          <div className="outerone gateimg"  >

            
          <div className='techdiv'>
          
          <div className="titemdiv">
         
            <img className='titem_img' src={htmllogo} alt="" />
           
          </div>



          <div className="titemdiv">
        
            <img className='titem_img' src={csslogo} alt="" />
          </div>
          <div className="titemdiv">
        
            <img className='titem_img' src={jslogo} alt="" />
          </div>
          <div className="titemdiv">
          
            <img className='titem_img' src={reactlogo} alt="" />
          </div>
          <div className="titemdiv">
          
            <img className='titem_img' src={tailwindlogo} alt="" />
          </div>
          
          
                  </div>


      </div>
              <div className='featuresheading fte2'>
            <div className="ftop kft">
            <div className="headingop">Backend</div>
            </div>
          </div>
          <div className="outerone gateimg"  >

            
          <div className='techdiv'>
          
          <div className="titemdiv">
         
            <img className='titem_img' src={nodelogo} alt="" />
           
          </div>



          <div className="titemdiv">
        
            <img className='titem_img' src={pythonlogo} alt="" />
          </div>
          <div className="titemdiv">
         
            <img className='titem_img' src={restlogo} alt="" />
          </div>
          <div className="titemdiv">
         
            <img className='titem_img' src={mongologo} alt="" />
          </div>
          
          
          
                  </div>


      </div>


          </div>



   
                  </>
  )
}
