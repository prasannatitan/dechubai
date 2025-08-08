import { Routes, Route, Navigate  } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard';
import Reports from './pages/dashboard/Reports'
import Analytics from './pages/dashboard/Analytics'
import Inbox from './pages/dashboard/inbox'
import FolderPage from './pages/dashboard/folderPage';
import Singleproject from './pages/dashboard/singleProject'
import CreateProject from './pages/dashboard/crateProject';


const DashboardRoutes = () => {
  return (
    <Routes>
     <Route index element={<Navigate to="projects" replace />} />
    
       <Route path="reports/files/:foldername" element={<FolderPage />} />
       <Route path="projects/:projectname" element={<Singleproject/>} />
      <Route path="projects" element={<Dashboard />} />
      <Route path="inbox" element={<Inbox />} />
       <Route path="new" element={<CreateProject />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="reports" element={<Reports/>}/>
   
     </Routes>
  )
}

export default DashboardRoutes
