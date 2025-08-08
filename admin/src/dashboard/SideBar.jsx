import { NavLink } from "react-router-dom"
import { useAuth } from "../context/UserContext";
import logouts from '../assets/dashboard/log out.svg'
import logo from '../assets/dechub logo.png'

import dashboard from '../assets/dashboard/dashboard.svg'
import inbox from '../assets/dashboard/inbox.svg'
import logout from '../assets/dashboard/log out.svg'
import performance from '../assets/dashboard/performance.svg'
import projects from '../assets/dashboard/projects.svg'
import settings from '../assets/dashboard/settings.svg'
import support from '../assets/dashboard/support.svg'
import reports from '../assets/dashboard/reports.svg'
import files from '../assets/dashboard/File Multiple.svg'
import newp from '../assets/dashboard/newp.svg'

const sidebar = () => {
    const { logout } = useAuth();
    const sidebar = [
        {
            icon: dashboard,
            text: "Dashboard",
            url: "/app/projects"
        },
        {
            icon: files,
            text: "inbox",
            url: "/app/inbox"
        },
        {
            icon: projects,
            text: "Projects",
            url: "/app/Projects"
        },
        {
            icon: performance,
            text: "Analytics",
            url: "/app/analytics"
        },
        {
            icon: reports,
            text: "Reports",
            url: "/app/reports"
        },
         {
            icon: newp,
            text: "Create Project",
            url: "/app/new"
        },
        {
            icon: support,
            text: "Support",
            url: "/app/support"
        },
        {
            icon: settings,
            text: "Settings",
            url: "/app/settings"
        }
    ]
    return (
        <div className=' h-screen w-[255px] '>
            <div className="fixed bg-[rgba(255,210,210,0.36)] p-5 h-screen">
                <div className='flex gap-2'>
                    <img className='w-[45px]' src={logo} alt="logo" />
                    <p className="font-bold text-[30px] bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] bg-clip-text text-transparent">Dechub.ai</p>

                </div>
                <div className="mt-8 flex flex-col gap-1">
                    {sidebar.map((itm, idx) => {
                        return (
                            <NavLink
                                key={idx}
                                to={itm.url}
                                className={({ isActive }) =>
                                    `flex rounded-2xl py-3 px-3 font-bold text-[16px] gap-[12px] ${isActive ? 'bg-[#E1C8FF]' : 'hover:bg-[#E1C8FF]'
                                    }`
                                }
                            >
                                <img className='w-[25px]' src={itm.icon} alt="icon" />
                                {itm.text}
                            </NavLink>
                        )
                    })}
                    <button onClick={logout} className="flex rounded-2xl py-3 px-3 font-bold text-[16px] gap-[12px] hover:bg-[#E1C8FF] cursor-pointer"><img src={logouts} alt="" />Log out</button>
                </div>
            </div>
        </div>
    )
}

export default sidebar