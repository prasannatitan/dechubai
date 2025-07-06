import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard';
import Plans from './pages/dashboard/Projects';
import Reports from './pages/dashboard/Reports'
import Analytics from './pages/dashboard/Analytics'
import Inbox from './pages/dashboard/inbox'
import FolderPage from './pages/dashboard/folderPage';
import Test from './pages/dashboard/Test';
import Singleproject from './pages/dashboard/singleProject'
const DashboardRoutes = () => {
  return (
    <Routes>
       <Route path="reports/files/:foldername" element={<FolderPage />} />
       <Route path="project/:projectname" element={<Singleproject/>} />
       <Route path="test" element={<Test/>}/>
      <Route path="home" element={<Dashboard />} />
      <Route path="inbox" element={<Inbox />} />
      <Route path="projects" element={<Plans />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="reports" element={<Reports/>}/>
    </Routes>
  )
}

export default DashboardRoutes
