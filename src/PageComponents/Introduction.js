export default function Introduction() {
  return (
    <div className="intro__container">
      <div className="intro__text">
        <p>Hello, my name is</p>
        <h1 id="intro__name" style={{ marginBottom: "1rem" }}>
          Jimmy Nguyen
        </h1>
        <p>
          A Software Engineer located in
          <a id="highlight__intro">{` Las Vegas, NV.`}</a>
        </p>
        <p style={{ color: "lightgray" }}>
          I'm a <a id="highlight__intro">{" Full Stack Developer"}</a> that
          enjoys building and creating products for entertainment or problem
          solving. Coming from a family of entrepreneurs, I've always been drawn
          to creating and building.
        </p>
        <p style={{ color: "lightgray" }}>
          In my free time, I'm a gamer and
          <a id="highlight__intro">{" game developing"}</a> as a hobby. Outside
          of gaming, I'm a rock climber and volleyball player.
        </p>
      </div>
    </div>
  );
}
