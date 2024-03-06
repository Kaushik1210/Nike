import React from 'react'
import { useState,useRef } from 'react'
import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'

const Nav = () => {

  const[openMenu,setOpenMenu]=useState(false);

  const menuRef=useRef();
  const imgRef=useRef();

  window.addEventListener('click',(e)=>{
    if(e.target !== menuRef.current && e.target !== imgRef.current){
      setOpenMenu(false);
    }
  });

  return (
    <div>
      <header className=' padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
          <div>
          <a href='/'>
                <img src={headerLogo} alt="logo" 
                width={130} 
                height={29}
                 />
            </a>
          </div>

          <div>
            <ul className=' flex justify-center items-center gap-14 max-lg:hidden  '>
              {navLinks.map((item)=>(
                <li className=' mr-1' key={item.label}>
                  <a
                  href={item.href}
                  className='font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red'
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {openMenu &&
          <div className=' z-50  fixed bg-black bg-opacity-30 inset-0  '>
          <div className=' absolute top-16 right-16 w-72 h-72 flex flex-col items-center gap-10 bg-white rounded-lg  justify-center'>
          {navLinks.map((item)=>(
            <li className='list-none  ' key={item.label}>
              <a
              href={item.href}
              className='font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red'
              >
                {item.label}
              </a>
            </li>
          ))}
          </div>
          </div>
          } 
            

            <div className='hidden max-lg:block'>
              <img src={hamburger} alt="hamburger"
              width={25}
              height={25}
              ref={imgRef} onClick={()=> setOpenMenu(!openMenu)} />
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
