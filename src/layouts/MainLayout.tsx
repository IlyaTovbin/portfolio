import { Route, Routes } from 'react-router-dom'
import SidebarLayout from '@/layouts/SidebarLayout'
import Main from '@/pages/Main'
import About from '@/pages/About'
import Projects from '@/pages/Projects'
import Contact from '@/pages/Contact'
import '@/styles/MainLayout.css'

const MainLayout = () => {
  return (
    <div className="main">
      <div className="container">
        <SidebarLayout />
        <div className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default MainLayout