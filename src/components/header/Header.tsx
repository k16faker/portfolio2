import React from 'react'
import { Link } from 'react-scroll'
import { IoLogoGithub } from "react-icons/io";

const Header = () => {
  return (
    <header className='flex w-full h-[80px] justify-between px-[300px] align-middle items-center fixed text-white'>
        <ul className='flex gap-[100px]'>
            <Link to='1' smooth={true} duration={1000}>
              <li className='hover:cursor-pointer'>About me</li>
            </Link>
            <Link to='2' smooth={true} duration={1000}>
              <li className='hover:cursor-pointer'>Skills</li>
            </Link>
            <Link to='3' smooth={true} duration={1000}>
              <li className='hover:cursor-pointer'>Project</li>
            </Link>
            <Link to='4' smooth={true} duration={1000}>
              <li className='hover:cursor-pointer'>Contact</li>
            </Link>
        </ul>
        <div>
            <IoLogoGithub size={30} color='white' className='hover:cursor-pointer' onClick={()=> window.open('https://github.com/k16faker')}/>
        </div>
    </header>
  )
}

export default Header