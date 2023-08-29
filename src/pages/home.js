import React from 'react';
import '../style.css'
import Education from './education';
import About from './about.js';
import Skills from './skills'
import Experience from './experience';
import Projects from './projects';
import Contact from './contact'
import one from './profile.png'
const Home=()=> {
    return (
        <div class="hom">
            <h1 class="home">yougesh kumar</h1>
            <div id="my-image">
                <img src={one} ></img>
            </div>
           <About/>
           <Skills/>
           
           <Education/>
           <Experience/>
           <Projects/>
           <Contact/>

        </div>
    )
}
export default Home;