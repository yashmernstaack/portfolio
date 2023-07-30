import React from "react";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
const education = () => {
  return (
    <div>
      <section id="education">
        <h1 class="section-heading mb75px">
          <span>
            <AirplanemodeActiveIcon />
          </span>
          <span> Education </span>
        </h1>

        <div class="timeline">
          <div class="timeline-box ">
            <h3 class="box1-heading">
              GOVT. COLLEGE Phase 6, Mohali (Pb.)
              <br />
              <span class="heading-color">
              Bachelor of Computer Applications
              </span>
              <br />
              <span class="duration">Aug 2019 - Present</span>
            </h3>
          </div>

          <div class="timeline-box ">
            <h3 class="box1-heading">
              J. N. V. Mohali (Pb.)
              <br />
              <span class="heading-color">Intermediate</span>
              <br />
              <br />
              <span class="duration">2018 - 2019</span>
            </h3>
          </div>

          <div class="timeline-box ">
            <h3 class="box1-heading">
            J. N. V. Mohali (Pb.)
              <br />
              <span class="heading-color">Matriculate</span>
              <br />
              <br />
              <span class="duration">2016 - 2017</span>
            </h3>
          </div>

          <div id="timeline-divider">
            <div class="timeline-traveller">
              <div class="t">
              <AirplanemodeActiveIcon style={{fontSize:"50px"}} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default education;
