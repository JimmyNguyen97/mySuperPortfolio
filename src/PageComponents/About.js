function About() {
  return (
    <div className="about__container" id="about">
      <div className="about__text">
        <h1>About</h1>
        <p>
          I'm a self taught developer that has also completed a
          <a
            href="../Images/Jimmy Nguyen - Software Developer Resume.pdf"
            target="_blank"
          >
            {" Full Stack Web Development"}
          </a>
          boot camp
        </p>
        <p>
          I'm a hobbyist that loves to learn different types of skills and
          crafts.
        </p>
        <ul>
          Interests Outside of Software:
          <li>
            Self taught volleyball player that competes against Division 1,
            professionals, and over-seas players.
          </li>
          <li>Bowling an average of 210 normally and 170 between the legs.</li>
          <li>{"Solving a Rubik's cube <1 minute."}</li>
        </ul>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
}

export default About;
