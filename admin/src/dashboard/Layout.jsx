import Sidebar from './SideBar'
import { useContext } from 'react'
import { useAuth } from "../context/UserContext";

import dashbg from '../assets/dashboard/dash bg.webp'

const layout = ({ children }) => {
    const { user } = useAuth()
     const avatar = user?.avatar
     const name = user?.username

    return (
        <div className="flex w-full bg-cover bg-no-repeat bg-center"  style={{ backgroundImage: `url(${dashbg})` }}>
            <Sidebar />
            <div className='w-full'>
               
               <div className='max-w-[1300px] mx-auto'>
                 <div className='p-5 flex justify-between items-center'>
            <p className='text-[rgba(32,0,71,1)] font-bold text-[28px]'>Hey Admin!!</p>

            <div className='flex items-center justify-center gap-2 cursor-pointer bg-white py-[6px] pl-[7px] pr-3 rounded-[10px] '>
              <div className='rounded-full border border-[1px] border-[rgba(63,20,116,1)]'>
                <img src={avatar} alt="user avatar" className='w-7 h-7 block rounded-full border border-[1px] border-[#fff]' />
              </div>
              <p className='text-sm leading-1 font-semibold tracking-[0.2px]' >{name}</p>
            </div>
          </div>
                 {children}
               </div>
            </div>
        </div>

    )
}

export default layout