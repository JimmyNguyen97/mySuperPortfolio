export default function Projects() {
  return (
    <div className="projects__container">
      <div className="projects__text">
        <h1>Current Project</h1>
        <div id="visit__project">
          <p>{`>>>`}</p>
          <a 
            href='https://jimmynguyen97.github.io/Omok' id='click__project'
            target='_blank'
            rel="noreferrer"
            >
              {'Click here to visit'}
          </a>
          <p>{`<<<`}</p>
        </div>
        <p>Technologies: React.js, Node.js, JavaScript ES6+, CSS3, HTML5</p>
        <img
          src={require("../Images/ss-omok.png")}
          alt="maplestory project banner"
          id="ms__banner"
        />
        <ul>
          <li>
            A resource website created for an MMORPG called MapleStory. This website was created to maximize efficiency for progression within the game by storing crucial data in one location.
          </li>
          <li>
            Fetching data and hosting it in a convenient and accessible location has increased progression speed by up to 45%. (Numbers compared during speed runs)
          </li>
          <li>
            Created as a free resource to support the community, it has received positive feedback and support. With plans to incorporate ideas from other members of the community, there will be more features implemented.
          </li>
        </ul>
      </div>
    </div>
  );
}
