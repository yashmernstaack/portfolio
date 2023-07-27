import React from "react";
import '../style.css'
import "../icon";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";

const skills = () => {
  return <div>
    <section id="skills">
            <h1 class="section-heading mb75px ">
                <span>
                    <LaptopChromebookIcon style={{fontSize:"60px", padding:"10px 10px 0 0 ", marginTop:"10px"}}/>
                    skills
                </span>
                <span> SKILLS </span>
            </h1>

            <div class="skills-display">

                <div class="skill-progress">
                    <div class="eighty-percent mb-blue">
                        <div class="skill-name">
                            <span> C++ </span>
                        </div>
                    </div>
                </div>
                <div class="skill-progress">
                    <div class="ninty-percent mb-orange">
                        <div class="skill-name">
                            <span> HTML </span>
                        </div>
                    </div>
                </div>
                <div class="skill-progress">
                    <div class="ninty-percent mb-light-purple">
                        <div class="skill-name">
                            <span> CSS </span>
                        </div>
                    </div>
                </div>
                <div class="skill-progress">
                    <div class="ninty-percent mb-blue">
                        <div class="skill-name">
                            <span> BootStrap</span>
                        </div>
                    </div>
                </div>
                <div class="skill-progress">
                    <div class="eighty-percent mb-teal">
                        <div class="skill-name">
                            <span> Javascript </span>
                        </div>
                    </div>
                </div>
                <div class="skill-progress">
                    <div class="ninty-percent mb-blue">
                        <div class="skill-name">
                            <span> React </span>
                        </div>
                    </div>
                </div>
                <div class="skill-progress">
                    <div class="eighty-percent mb-light-purple">
                        <div class="skill-name">
                            <span> Redux </span>
                        </div>
                    </div>
                </div>
                <div class="skill-progress">
                    <div class="eighty-percent mb-light-purple">
                        <div class="skill-name">
                            <span> RestFul API </span>
                        </div>
                    </div>
                </div>

                <div class="skill-progress">
                    <div class="eighty-percent mb-light-purple">
                        <div class="skill-name">
                            <span> Nodejs </span>
                        </div>
                    </div>
                </div>
                <div class="skill-progress">
                    <div class="eighty-percent mb-light-purple">
                        <div class="skill-name">
                            <span> MongoDB </span>
                        </div>
                    </div>
                </div>
            </div>


            
        </section>

  </div>;
};

export default skills;
