function About() {
  return (
    <div className="about__container" id="about">
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
          boot camp. I use React and it's extensions to create the Frontend for
          websites and apps.
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
        {/* <p>
          I love coaching, teaching, or helping others improve. I work best on a
          team because I have more ideas, feedback, and input. I'm also able to
          work efficiently alone because of my focused, self-improvement
          mentality. Whether it be on a team or independently, I am well-rounded
          because I perform well in both environments.
        </p> */}
      </div>
    </div>
  );
}

export default About;
