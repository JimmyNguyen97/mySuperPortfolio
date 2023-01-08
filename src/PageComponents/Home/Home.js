import React from 'react';

import Mern from "../../Images/MERN.png"
import LinkedIn from "../../Images/LinkedIn.png"
import GitHub from "../../Images/Github-Logo.png"
import Youtube from "../../Images/Youtube-Logo.png"
import "./Home.css"

export default function Home() {
  return (
    <div className='home__container'>
        <h1 className='intro'>Welcome.</h1>
        <section className='introduction'>
            <div className='initial__intro'>
                    My name is <span id='highlight'> Jimmy Nguyen</span>.
                    I'm a Software Developer based in <span id='highlight'>Las Vegas, NV</span>.
            </div>
            <div className='initial__intro' id='intro__description'>
                <p>I'm a <span id='highlight'>Full Stack Developer</span> that
                    enjoys building and creating products for entertainment or problem
                    solving. Coming from a family of entrepreneurs, I've always been drawn
                    to creating and building.
                </p>
            </div>
            <img src={Mern} alt="Mern Tech Stack" id='mern__img'/>
            <div className='social__media'>
                {/* LinkedIn */}
                <a                     
                    href={"https://www.linkedin.com/in/jimmynguyenit/"}
                    target='_blank'
                    rel="noreferrer"
                >
                    <img src={LinkedIn} alt="LinkedIn" className='social__links'/>
                </a>
                {/* GitHub */}
                <a                     
                    href={"https://github.com/NguyenVBRC"}
                    target='_blank'
                    rel="noreferrer"
                >
                    <img src={GitHub} alt="GitHub" className='social__links'/>
                </a>
                {/* YouTube */}
                <a                     
                    href={"https://www.youtube.com/@nguyenvbrc"}
                    target='_blank'
                    rel="noreferrer"
                >
                    <img src={Youtube} alt="YouTube" className='social__links'/>
                </a>
            </div>
        </section>
    </div>
  )
}
