import logo from '../assets/dechub logo.png'

import dashboard from '../assets/dashboard/dashboard.svg'
import inbox from '../assets/dashboard/inbox.svg'
import logout from '../assets/dashboard/log out.svg'
import performance from '../assets/dashboard/performance.svg'
import projects from '../assets/dashboard/projects.svg'
import settings from '../assets/dashboard/settings.svg'
import support from '../assets/dashboard/support.svg'

const sidebar =()=>{
return(
    <div>
        <div>
            <img src={logo} alt="logo" />
            <p>dechub.ai</p>
        </div>
        <div></div>
    </div>
)
}

export default sidebar