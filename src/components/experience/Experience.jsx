import Lottie from 'lottie-react'
import React from 'react'
// import logo from './../../assets/logo-blue.png';
import logo from './../../assets/DiwaliLogo-C0ZIHtDu.gif';
import education from './../../assets/gif json/experience.json';


const Experience = () => {
    return (
        <div className='text-white bg-[#0f172a] space-mono-regular pt-4'>
           <div className='flex items-center justify-center'> <h1 className='inline-block text-4xl tracking-widest text-center text-white ultra-regular lg-text-6xl md:text-5xl' style={{borderBottom:"8px solid rgb(9,244,244,1)"}}>Internship</h1>
           </div>
           <div className='flex flex-col items-center justify-center md:flex-row lg:flex-row'>
             <Lottie animationData={education} className="w-80"/>
             <div className='flex items-center justify-center gap-3 p-2 rounded-md font-bolder space-mono-regular hover:bg-[#151f34]' style={{border:"1px solid rgb(9,244,244,1)"}}>
                <img src={logo} alt="" className='w-32 '/>
                <div>
                    <h1 className='logo'>Unified Mentor</h1>
                    <p>Full Stack Developer =&gt; sept-oct 2024</p>
                </div>
             </div>
           </div>
        </div>
      )
}

export default Experience
