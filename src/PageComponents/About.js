import { useState } from 'react';
import { sliderImages } from "../SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

function About({slides}) {

  const [ current, setCurrent ] = useState(0);
  // const length = slides.length;

  return (
    <div className="about__container">
      <div className="about__text">
        <h1 style={{ marginBottom: "1rem" }}>About Me</h1>
        <p>
          I'm a self taught developer that has also completed a
          <a
            href="../Images/Jimmy Nguyen - Software Developer Resume.pdf"
            target="_blank"
          >
            {" Full Stack Web Development "}
          </a>
          boot camp.
        </p>
        <p>
          I have created apps that keep tracks of game night rankings, that
          record poker night stats and statistics, and websites that solve
          problems for a small niche community such as rock climbing,
          volleyball, or gamers.{" "}
        </p>
        <p>
          I'm a hobbyist that loves to learn different types of skills and
          crafts. Whether it be hobbies or my career, I like to perform my best
          and compete with myself.
        </p>
      </div>
      <div className='about__images'>
        <FaArrowAltCircleLeft className='left-arrow' />
        <FaArrowAltCircleRight className='right-arrow' />
        {sliderImages.map(data => {
          return (
            <img 
              src={data.image} 
              alt={data.alt} 
              id='slider__image'/>
          )
        })}
      </div>
    </div>
  );
}

export default About;
