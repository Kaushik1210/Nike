import React from 'react'
import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'

const Nav = () => {

  

  return (
    <div>
      <header className=' padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
          <div>
          <a href='/'>
                <img src={headerLogo} alt="logo" 
                width={130} 
                height={29} />
            </a>
          </div>

          <div>
            <ul className=' flex justify-center items-center gap-14 max-lg:hidden  '>
              {navLinks.map((item)=>(
                <li className=' mr-1' key={item.label}>
                  <a
                  href={item.href}
                  className='font-montserrat leading-normal text-lg text-slate-gray'
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
            

            <div className='hidden max-lg:block'>
              <img src={hamburger} alt="hamburger"
              width={25}
              height={25} />
            </div>

            {/* <a>
              hello
            </a> */}

        </nav>
      </header>
    </div>
  )
}

export default Nav
