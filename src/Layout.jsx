import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from './pages/Home'
import Footer from './component/footer'
import Header from './component/header'
import Strategic from './pages/Strategic'
import Test from './pages/test'
import DigitalExperience from './pages/DigitalExperienceServices'
import PerformanceMarketing from './pages/PerformanceMarketing'
import Signup from './pages/Signup'

export default function Layout() {
  const location = useLocation()
  const hideLayout = location.pathname === '/signup'

  return (
    <>
      {!hideLayout && <Header />}

      <Routes>
        <Route index element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/strategic-planning" element={<Strategic />} />
        <Route path="/digital-experience" element={<DigitalExperience />} />
        <Route path="/performance-marketing" element={<PerformanceMarketing />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  )
}
