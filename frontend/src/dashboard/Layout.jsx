import Sidebar from './SideBar'
import { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'

import dashbg from '../assets/dashboard/dash bg.webp'

const layout = ({ children }) => {
    const { user } = useContext(UserDataContext)
  

    return (
        <div className="flex w-full bg-cover bg-no-repeat bg-center"  style={{ backgroundImage: `url(${dashbg})` }}>
            <Sidebar />
            <div className='w-full'>
                <div className='p-5'>
                    <p className='text-[rgba(32,0,71,1)] font-bold text-[30px]'>{`Hey, ${user?.fullname?.firstname || ''}!!`}</p>
                </div>
               <div className='max-w-[1300px]'>
                 {children}
               </div>
            </div>
        </div>

    )
}

export default layout