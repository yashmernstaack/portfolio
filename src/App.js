import React from 'react';
import './App.css';
import Navbaar from './Navbaar.js';
import Home from './pages/home'
import About from './pages/about.js'
import Contact from'./pages/contact.js'
import Skills from './pages/skills.js'
import Experience from './pages/experience.js'
import Project from './pages/projects.js'
import Education from './pages/education.js'

// import about from
import{BrowserRouter,Routes,Route} from 'react-router-dom'

 

function App() {
  return ( <div class="main">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbaar />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/education' element={<Education />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/skills' element={<Skills />} />
      
        </Route>
      </Routes>
    </BrowserRouter>
    
  </div>)
}

export default App;
