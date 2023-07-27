import React from 'react'; 
import '../style.css'
import one from './profile.png'
const About=()=> {
    return (
        <div>
            <section id="about">
            <div id="my-image">
                <img src={one} ></img>
            </div>

            <div id="about-para">

                <p>
                  I believe that I can be a good team player with the ability to work under minimum guidance especially when carrying out challenging assignment. I consider myself as a very ambitious, motivated, career oriented person, willing to accept challenges,
                  energetic and results oriented, with excellent leadership abilities,and an active and hardworking person who is patient and diligent, with great adaptability to changing working conditions.
                </p>

            </div>

        </section>
        </div>
    )
}
export default About;