import Sidebar from './SideBar'

const layout = ({ children }) => {
    return (
        <div className="flex">
            <Sidebar />
            {children}

        </div>
    )
}

export default layout