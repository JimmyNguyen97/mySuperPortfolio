import { useState } from 'react';
import { sliderImages } from "../SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

function About() {
  const [ image, setImage ] = useState(0);

  function NextImage(){
    const arrLength = sliderImages.length;
    setImage(image === arrLength-1?0:image+1);
  }
  function PrevImage(){
    const arrLength = sliderImages.length;
    setImage(image === 0 ? arrLength-1:image-1);
  }

  return (
    <div className="about__container">
      <div className="about__text">
        <h1 style={{ margin: "auto", paddingBottom: "1rem" }}>About Me</h1>
        <p>
          I'm a self taught developer that has also completed a
          <a
            href="../Images/Jimmy Nguyen - Software Developer Resume.pdf"
            target="_blank"
          >
            {" Full Stack Web Development "}
          </a>
          program.
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
        <FaArrowAltCircleLeft className='left__arrow' 
          onClick={PrevImage}
        />
        <FaArrowAltCircleRight className='right__arrow' 
          onClick={NextImage}
        />
        <img src={sliderImages[image].image} alt='Memories' id='slider__image'/>
      </div>
    </div>
  );
}

export default About;
