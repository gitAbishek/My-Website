import './index.css'
import DesktopNavbar from './components/Navbar/DesktopNavbar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import { Routes,Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <DesktopNavbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
