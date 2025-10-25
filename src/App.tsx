import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/pages/Main';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

function App() {
  return (
    <div className="main">
      <div className="container">
        <Sidebar />
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

export default App