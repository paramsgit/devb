import React from 'react'
import htmllogo from './static/htmlpng.png'
import csslogo from './static/css.png'
import jslogo from './static/js.png'
import reactlogo from './static/react.png'
import tailwindlogo from './static/tailwind.png'
export const Technologies = () => {
  return (
    <>

<div className="gatepass tech_used">
          <div className="gatetext">
                <h2 className='featureheads'>Anothr head</h2>
              </div>
       
            
          <div className="outerone gateimg"  >
          <div className='techdiv'>
          
          <div className="titemdiv">
          <div className='popoverdiv'>
              <div>hello</div>
            </div>
            <img className='titem_img' src={htmllogo} alt="" />
           
          </div>



          <div className="titemdiv">
          <div className='popoverdiv'>
              <div>h222</div>
            </div>
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
          </div>



   
                  </>
  )
}
