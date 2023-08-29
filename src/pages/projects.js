import React from "react";
import "../style.css";
import Lmb1 from './i.jpg'
// import Lmb2 from "./Imdb movie.png";
// import Lmb3 from "./Screenshot (66).png";
// import Lmb4 from "./Screenshot (67).png";
// import Lmb5 from "./Screenshot (68).png";
// import Lmb6 from "./Screenshot (69).png";
const projects = () => {
  return (
    <div>
      <section id="portfolio">
        <h1 class="section-heading mb75px">
          <span>
            <i class="fas fa-th-list"></i>
          </span>
          <span> Projects</span>
        </h1>
        <h2 class="mynameokk">
          1. Portfolio                
          
        </h2>
        <h2 class="mynameokk">
          2. E-commercesite
        </h2>

        <div id="portfolio-container">
          <a href="https://github.com/avi112bala/MERN-PROJECT">
            <div class="portfolio-image-container">
              {/* <Lmb1/> */}
              <div class="portfolio-details">
                <p>
                  <h6>Rove India</h6>
                  It is Trave-Website in this there is booking section , contact
                  section ,and also some packages .
                </p>
              </div>
            </div>
          </a>

          <a href="https://github.com/avi112bala/MOVIE-APP">
            <div class="portfolio-image-container">
              {/* <img src="https://www.androidpolice.com/wp-content/uploads/2013/12/nexusae0_2013-12-19-15.03.17.png"/> */}
              <div class="portfolio-details">
                <p>
                  <h6>MOVIE-APP</h6>
                  It is a Movie App Website You can search movie and add to
                  favourite list and can also store it unfavourite.
                </p>
              </div>
            </div>
          </a>

          <a href="https://avi112bala.github.io/IMDB-PROJECT/">
            <div class="portfolio-image-container">
              {/* <Lmb2/> */}
              <div class="portfolio-details">
                <p>
                  <h6>IMDB Rating</h6>
                  In this you can search any movie and see all the detail of
                  movies like release date , star cast , imbd rating and also
                  add in favourite list.
                </p>
              </div>
            </div>
          </a>

          <a href="https://todo-list-13fd5.web.app/">
            <div class="portfolio-image-container">
              {/* <Lmb3 /> */}
              <div class="portfolio-details">
                <p>
                  <h6>TO-DO List</h6>
                  In this you can add any task , mark it as a complete , delete
                  the task , edit the task.
                </p>
              </div>
            </div>
          </a>

          <a href="https://myhabittracker-e8a00.web.app/">
            <div class="portfolio-image-container">
              {/* <Lmb4 /> */}
              <div class="portfolio-details">
                <p>
                  <h6>Habit-Tracker</h6>
                  In this you can add any habit like exercise and track it all
                  the week as the day pass you can mark it done, in progress, or
                  not done.
                </p>
              </div>
            </div>
          </a>

          <a href="https://albumlist-16e5a.web.app/">
            <div class="portfolio-image-container">
              {/* <Lmb5 /> */}
              <div class="portfolio-details">
                <p>
                  <h6>Album List</h6>
                  It is Album list project , in this you can add your favourite
                  album and also you can update it and delete it .
                </p>
              </div>
            </div>
          </a>

          <a href="https://avi112bala.github.io/Ping_Pong-Game/">
            <div class="portfolio-image-container">
              {/* <Lmb6 /> */}
              <div class="portfolio-details">
                <p>
                  <h6>Album List</h6>
                  IT is Ping-pong game build using javaScrip. in which you can
                  play the game easily with enjoyment. .
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default projects;
