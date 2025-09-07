import Sidebar from './SideBar'
import { useContext } from 'react'
import { useAuth } from "../context/UserContext";

import dashbg from '../assets/dashboard/dash bg.webp'

import Calander from '../component/calander';

const layout = ({ children }) => {
  const { user } = useAuth()
  const avatar = user?.avatar
  const name = user?.username

  return (
    <div className="flex w-full bg-cover bg-no-repeat bg-center bg-fixed" style={{ backgroundImage: `url(${dashbg})` }}>
      <Sidebar />
      <div className='w-full'>
        <div className='max-w-[1200px] mx-auto'>
          <div className='p-5 flex justify-between items-center'>
            <p className='text-[rgba(32,0,71,1)] font-bold text-[28px]'>Hey User!!</p>

           <div className='flex justify-center items-center gap-4'>
             <div className='flex gap-2 justify-center items-center cursor-pointer  py-[6px] pl-[7px] pr-3 rounded-[10px] '>
              <span className='bg-[#EBECFF] flex justify-center items-center rounded-full h-5 w-5 font-bold text-[#200047] text-[20px] leading-2 pb-[2px]'>+</span>
                  <Calander/>
              </div>
             <div className='flex items-center justify-center gap-2 cursor-pointer bg-white py-[6px] pl-[7px] pr-3 rounded-[10px] '>
             
              <div className='rounded-full border border-[1px] border-[rgba(63,20,116,1)]'>
                <img src={avatar} alt="user avatar" className='w-7 h-7 block rounded-full border border-[1px] border-[#fff]' />
              </div>
              <p className='text-sm leading-1 font-semibold tracking-[0.2px]' >{name}</p>
            </div>
           </div>
          </div>
          {children}
        </div>
      </div>
    </div>

  )
}

export default layout