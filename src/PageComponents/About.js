function About() {

  return (
    <div className="about__container" id="about">
      <div className="about__text">
        <h1>About Me</h1>
        <p>
          I'm a self taught developer that has also completed a
          <a
            href="../Images/Jimmy Nguyen - Software Developer Resume.pdf"
            target="_blank"
          >
            {" Full Stack Web Development "}
          </a>
          boot camp. I use React and it's extensions to create the Frontend for websites and apps.
        </p>
        <p>I have created apps that keep tracks of game night rankings, that record poker night stats and statistics, and websites that solve problems for a small niche community such as rock climbing, volleyball, or gamers. </p>
        <p>
          I'm a hobbyist that loves to learn different types of skills and
          crafts. If I'm spending time on something, I like to put my best effort forward. Whether it be hobbies or my career, I like to perform my best and compete with myself. I am very familiar with losses and failure because those are situations where I believe people learn the most from. If you're not pushing yourself, you're limiting your own growth.
        </p>
        <p>
          Aside from being a hobbyist, I would describe myself as a people person. I love coaching, teaching, or helping others improve. I work best on a team because I have more ideas, feedback, and input. I'm also able to work efficiently alone because of my focused, self-improvement mentality. Whether it be on a team or independently, I am well-rounded because I perform well in both environments.
        </p>
        <ul>
          Interests Outside of Software:
          <li>
            Self taught volleyball player that competes against Division 1,
            professionals, and over-seas players.
          </li>
          <li>Bowling an average of 210 and 170 between the legs.</li>
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
