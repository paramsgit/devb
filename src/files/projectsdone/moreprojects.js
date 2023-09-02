import React from 'react'
import { mp1,mp2,mp3 } from '../constants/constant'
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
            <a href="https://afsarbande002.pythonanywhere.com/" target='_blank'>
            <img className='mpimg' src={mp1} alt="" />
            </a>
            <h4 className='mpname'>Neostore</h4>
        </div>
        <div className="mpm1">
        <a href="https://gsagriworks.netlify.app/" target='_blank'>
            <img className='mpimg' src={mp2} alt="" />
            </a>
            <h4 className='mpname'>GS Agri works</h4>
        </div>
        <div className="mpm1">
        <a href="http://paramveersapp.pythonanywhere.com/" target='_blank'>

            <img className='mpimg' src={mp3} alt="" />
            </a>
            <h4 className='mpname'>Auto-Chatbot</h4>
        </div>
    </div>
    </>
  )
}
