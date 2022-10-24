export default function Projects() {
  return (
    <div className="projects__container">
      <div className="projects__text">
        <h1>Current Project</h1>
        <img
          src={require("../Images/ss-omok.png")}
          alt="maplestory project banner"
          id="ms__banner"
        />
        <h3>Omok.io</h3>
        <p>Technologies: React.js, Node.js, JavaScript ES6+, CSS3, HTML5</p>
        <ul>
          <li>
            Created to maximize efficiency within game progression by pulling
            data from 4+ locations and providing them in one location.
          </li>
          <li>
            Used by the community and peers resulting in 75% increase in
            progression speed.
          </li>
        </ul>
      </div>
    </div>
  );
}
