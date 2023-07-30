import React from 'react';
import '../style.css'
import Education from './education';
import About from './about.js';
import Skills from './skills'
import Experience from './experience';
import Projects from './projects';
import Contact from './contact'
const Home=()=> {
    return (
        <div class="hom">
            <h1 class="home">yougesh kumar</h1>
           <About/>
           <Skills/>
           <Experience/>
           <Education/>
           <Projects/>
           <Contact/>

        </div>
    )
}
export default Home;