import React,{useEffect,useState,useRef} from 'react'
import 'intersection-observer';
import plogo from '../static/Plogo.png'
import plogo2 from '../static/pslogo.png'
export const Nav = () => {
  const [tpo, settpo] = useState("transparent")
  const [tto, settto] = useState("text-white")
  const [hdi, sethdi] = useState("hidden")
  const [count, setcount] = useState(0); 

  useEffect(() => {

  
    const handleScroll = () => {
      
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      
    
 
       if (scrollPosition >= 703) {
        
        // settpo('bg-white')
        settto('text-grey')
       } else {
        // settpo('transparent')
        settto('text-white')
       }
 
       if (scrollPosition >= 753) {
       
        settpo('bgcustom')
     
       } else {
        settpo('transparent')
        
       }

       if(scrollPosition<1445){
        thinner();
        document.getElementById('a_home').classList.add('anc_active')
       }
       else if(scrollPosition>=1445 && scrollPosition< 3098){
        thinner();
        document.getElementById('a_skill').classList.add('anc_active')
       }
       else if(scrollPosition>=3098 && scrollPosition <6490){
        thinner();
        document.getElementById('a_project').classList.add('anc_active')
       }
       else if(scrollPosition>=6490 && scrollPosition <11504){
        thinner();
        document.getElementById('a_experience').classList.add('anc_active')
       }
       else if(scrollPosition >=11504 && scrollPosition<14400){
        thinner();
        document.getElementById('a_education').classList.add('anc_active')
       }
       else if(scrollPosition>14400){
        thinner();
        document.getElementById('a_contact').classList.add('anc_active')
       }

        


    };
    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
     
    }
  }, [])

 
  const thinner=()=>{
    document.getElementById('a_home').classList.remove('anc_active')
    document.getElementById('a_skill').classList.remove('anc_active')
    document.getElementById('a_project').classList.remove('anc_active')
    document.getElementById('a_education').classList.remove('anc_active')
    document.getElementById('a_experience').classList.remove('anc_active')
    document.getElementById('a_contact').classList.remove('anc_active')

  }

  const handleanchor=(event)=>{
   thinner();

    const section=document.getElementById(event.target.id+'_id')
    section.scrollIntoView({ behavior: 'instant' });
    document.getElementById(event.target.id).classList.add('anc_active')
    console.log(window.scrollY)
  }
  
  const handleHidden=(event)=>{
    console.log("handlehidden")
    setcount(count+1);
    if(count%2==0){
      sethdi('')
    }else{
      sethdi('hidden')
    }
  }
  return (
    <>
    
<nav className={`${tpo}`} id='navbar'>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center">
        <img style={{opacity:"0"}} src={plogo2} className="h-8 mr-3" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
    </a>
    <button type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" onClick={handleHidden} aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
    <div className={`${hdi} w-full md:block md:w-auto`} id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  ">
        <li>
          <a onClick={handleanchor} href="#" id='a_home' className={`${tto} anctagl anc_active block py-2 pl-3 pr-4 rounded md:border-0 md:p-0`} aria-current="page">Home</a>
        </li>
        <li>
          <a onClick={handleanchor} id='a_skill' href="#" className={`${tto} anctagl block py-2 pl-3 pr-4 rounded md:border-0 md:p-0`}>Skills</a>
        </li>
        <li>
          <a onClick={handleanchor} id='a_project' href="#" className={`${tto} anctagl block py-2 pl-3 pr-4 rounded md:border-0 md:p-0`}>Projects</a>
        </li>
        <li>
          <a onClick={handleanchor} id='a_experience' href="#" className={`${tto} anctagl block py-2 pl-3 pr-4 rounded md:border-0 md:p-0`}>Experience</a>
        </li>
        <li>
          <a onClick={handleanchor} id='a_education' href="#" className={`${tto} anctagl block py-2 pl-3 pr-4 rounded md:border-0 md:p-0`}>Education</a>
        </li>
        <li>
          <a onClick={handleanchor}  id='a_contact' href="#" className={`${tto} anctagl block py-2 pl-3 pr-4 rounded md:border-0 md:p-0`}>Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}
