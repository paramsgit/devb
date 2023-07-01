import React from 'react'
import mp1 from '../static/mp1.png'
import mp2 from '../static/mp2.png'
import mp3 from '../static/mp3.png'
export const Moreprojects = () => {
  return (
    <>
    <div className="more_project_heading">
        <p className='headgen '>
        Other projects...
        </p>
       
    </div>


    <div className="more_projects">
        <div className="mpm1">
            <img className='mpimg' src={mp1} alt="" />
            <h4 className='mpname'>Neostore</h4>
        </div>
        <div className="mpm1">
            <img className='mpimg' src={mp2} alt="" />
            <h4 className='mpname'>GS Agri works</h4>
        </div>
        <div className="mpm1">
            <img className='mpimg' src={mp3} alt="" />
            <h4 className='mpname'>Auto-Chatbot</h4>
        </div>
    </div>
    </>
  )
}
