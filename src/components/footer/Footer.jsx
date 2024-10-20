import React from 'react'
import './footer.css';
import { navdatalink } from '../navbar/navdatalink';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';


const Footer = () => {
  return (
    <div className='footer'>
        <div className='waves'>
            <div className="wave" id='wave1'></div>
            <div className="wave" id='wave2'></div>
            <div className="wave" id='wave3'></div>
            <div className="wave" id='wave4'></div>
        </div>
      <div className="flex gap-3 text-center social-links">
        <FaLinkedin className='hover:text-[rgb(9,244,244,1)] hover:animate-pulse text-4xl' />
        <FaGithub className='hover:text-[rgb(9,244,244,1)] hover:animate-pulse text-4xl'/>
      </div>
      <div className='flex flex-col gap-5 text-center space-mono-regular md:flex-row lg:flex-row'>
      <ul className='gap-4 text-sm cursor-pointer md:flex lg:text-xl menu space-mono-regular '>
          {navdatalink.map(({id, title, link}) => (
              <li key={id}>
                   <Link
                       to={link}
                       spy={true}
                       smooth={true}
                       offset={-70}
                       duration={500} >
                       {title}
                   </Link>
               </li>
          ))}
        </ul>
      </div>
      <div>
        <p className='text-sm space-mono-regular'>@2024 Manoranjan Sutar | All right reserved.</p>
      </div>
    </div>
  )
}

export default Footer
