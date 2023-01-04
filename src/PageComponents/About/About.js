import React from 'react'
import "./About.css"
import learnQuote from "../../Images/learningQuote.png"

export default function About() {
  return (
    <div className='about__container'>
        <h1 className='intro' id="about__intro">About</h1>
        <p id='offwhite'>
            I’m a hobbyist that likes to learn everything and I consider myself a jack of all trades. I’m a Developer that is currently using JavaScript and its frameworks.
        </p>
        <p id='offwhite'>
            I’ve worked in recruitment for 5 years and have developed high level interpersonal skills. These skills compliment my technical skills and have helped me become a well-rounded engineer. 
        </p>
        <p id='offwhite'>
            As a hobbyist and learner of many skills, I present flexible skills. Having these flexible skills have allowed me to juggle multiple tasks, learn multiple technologies, and switch to areas of need as requested.
        </p>
        <div className='quote__container'><img src={learnQuote} alt="Quote" id='quote'/></div>
    </div>
  )
}
