import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from './pages/Home'
import Footer from './component/footer'
import Header from './component/header'
import Strategic from './pages/Strategic'
import Test from './pages/test'
import DigitalExperience from './pages/DigitalExperienceServices'
import PerformanceMarketing from './pages/PerformanceMarketing'

function App() {
  return (
      <BrowserRouter>
      <Header/>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/strategic-planning" element={<Strategic/>} />
          <Route path="/digital-experience" element={<DigitalExperience/>}/>
          <Route path="/performance-marketing" element={<PerformanceMarketing/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
