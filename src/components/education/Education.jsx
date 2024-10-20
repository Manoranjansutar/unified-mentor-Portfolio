import Lottie from 'lottie-react'
import React from 'react'
import logo from './../../assets/logo.png';
import education from './../../assets/gif json/education4.json';


const Education = () => {
  return (
    <div className='text-white bg-[#0f172a] space-mono-regular pt-4'>
       <div className='flex items-center justify-center'> <h1 className='inline-block text-4xl tracking-widest text-center text-white ultra-regular lg-text-6xl md:text-5xl' style={{borderBottom:"8px solid rgb(9,244,244,1)"}}>Education</h1>
       </div>
       <div className='flex flex-col items-center justify-center md:flex-row lg:flex-row'>
         <Lottie animationData={education} className="w-80"/>
         <div className='flex items-center justify-center gap-3 p-2 rounded-md font-bolder space-mono-regular hover:bg-[#151f34]' style={{border:"1px solid rgb(9,244,244,1)"}}>
            <img src={logo} alt="" className='w-32 '/>
            <div>
                <h1 className='logo'>GOVERNMENT COLLEGE OF ENGINEERING, KALAHANDI</h1>
                <p>Bachelor in Technology =&gt; 2010-2014</p>
                <p>Electrical & Electronics Engineering</p>
            </div>
         </div>
       </div>
    </div>
  )
}

export default Education
