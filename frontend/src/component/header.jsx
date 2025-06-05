import React from 'react';
import dechublogo from '../assets/dechub logo.png'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {useAuth} from '../context/AuthContext'



const Header = () => {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    const {isAuthenticated} = useAuth()
   

     const menuRef = useRef(null);


  useEffect(() => {
    if (!menuRef.current) return;
    const el = menuRef.current;
    if (open) {
      const h = el.scrollHeight;      
      el.style.maxHeight = h + "px"; 
    } else {
      el.style.maxHeight = "0px";    
    }
  }, [open]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const menu = [
        'Product',
        'Solutions',
        'Services',
        'Why Dechub.ai',
        'Contact Us'
    ]
    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled
                ? 'bg-[rgba(231,231,231,0.2)] backdrop-blur-[35px]'
                : 'bg-transparent backdrop-blur-0'}
      `}
        >
            <div className='max-w-[1440px] md:px-10 px-5 py-1 mx-auto flex align-center justify-between'>
                <div><Link to='/'><img className='lg:w-[60px] w-[44px]' src={dechublogo} alt="dechub logo" /></Link></div>
                <div className='flex max-md:hidden items-center'>
                    <ul className='flex lg:gap-10 gap-2 items-center'>
                        {menu.map((menu, idx) => {
                            return (
                                <li key={idx} className='inline-block mx-4 lg:text-[18px] text-[15px] font-[500] text-[#000000] cursor-pointer'>{menu}</li>
                            )
                        })}
                        {isAuthenticated ? (
                            <>
                                <li className='bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] inline-block mx-4 lg:text-[18px] text-[15px] font-[500] text-[#fff] px-7 rounded-3xl py-2 cursor-pointer'>
                                    <Link to='/dashboard/home'>Dashboard</Link>
                                </li>
                               
                            </>
                        ) : (
                            <>
                              
                             <Link className="bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] lg:py-[10px] lg:px-10 py-[6px] px-7 text-white lg:rounded-[20px] rounded-[23px] text-[18px] max-md:text-[17px] max-sm:text-[16px] max-md:py-[8px] max-md:px-8" to="/login">Login</Link>
                                        
                            </>
                        )}
                    </ul>
                </div>
                <div onClick={() => setOpen(!open)} className='flex flex-col justify-center cursor-pointer'>
                    <span className='lg:w-[33px] w-[25px] rounded-full bg-black h-[3px] flex'></span>
                    <span className='lg:w-[33px] w-[25px] rounded-full bg-black h-[3px] flex mt-2'></span>
                </div>
            </div>

            <div className="relative">


              
                    <div ref={menuRef} className='absolute top-0 left-0 w-full overflow-hidden bg-white shadow-md transition-[max-height] duration-300 ease-out'
        style={{ maxHeight: "0px" }}>
                        <ul className="flex flex-col p-4">
                            <li className="p-2">Item 1</li>
                            <li className="p-2">Item 2</li>
                            <li className="p-2">Item 3</li>
                        </ul>
                    </div>
                
            </div>


        </header>


    )
}

export default Header;