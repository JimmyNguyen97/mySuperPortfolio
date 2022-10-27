import React from "react";

export default function Resume() {
  return (
    <div className="resume__container">
        <h1 id="resume__name">Jimmy Nguyen</h1>
        <p>Las Vegas, NV | (804) 972-0978 | Nguyen89.mke@gmail.com | 
          <a 
            href='https://www.linkedin.com/in/jimmy-nguyen-76a555171/'
            target='_blank'
            rel='noreferrer'  
          >LinkedIn</a></p>
        <hr/>
        <h2>React Software Developer</h2>
        <p>Skill Set</p>
        <div className="skillset__container">
          <div id="left__skills" style={{marginRight: '10rem'}}>
            <p>React, JavaScript ES6+, HTML5, CSS3</p>
            <p>Full Stack Development</p>
            <p>Object Oriented Programming</p>
          </div>
          <div id="right__skills">
            <p>SQL, mySQL, jQuery</p>
            <p>Web Application Development</p>
            <p>Git, GitHub, Heroku</p>
          </div>
        </div>
        <hr/>
          <h2>Current Project</h2>
          <div className="project__container">
            <h3 style={{margin: '0.5rem 0'}}>Omok.io - MMORPG Resource Website</h3>
            <p>Created with React, it's libraries, and hooks.</p>
            <a rel='noreferrer' target='_blank' href='https://github.com/JimmyNguyen97/Omok.io'>GitHub Link: Github.io/Omok.io</a>
            <br></br>
            <a rel='noreferrer' target='_blank' href='https://github.com/JimmyNguyen97/Omok.io'>Website Link: Omok.io</a>
            <ul style={{marginTop: '0.5rem'}}>
              <li id="project__text">
                A resource website created for an MMORPG called MapleStory. This website was created to maximize efficiency for progression within the game by storing crucial data in one location.
              </li>
              <li id="project__text">Fetching data and hosting it in a convenient and accessible location has increased progression speed by up to 45%. (Numbers compared during speed runs)</li>
              <li id="project__text">Created as a free resource to support the community, it has received positive feedback and support. With plans to incorporate ideas from other members of the community, there will be more features implemented.</li>
            </ul>
          </div>
          <hr/>
            <h2>Work Experience</h2>
          <div className="work__container">
              <div id="job">
                <h4>Technical Recruiter - 2K Vegas</h4>
                <p>4/2022-Present</p>
              </div>
              <div id="job">
                <h4>Recruiter, Coordinator - Cielo Talent</h4>
                <p>6/2018-1/2022</p>
              </div>
              <ul>
                <li>Full Cycle Recruiter for Software Developer Engineer in Test, Quality Assurance Testers, and Game Developers.</li>
                <li>Developed Standard Operating Processes to streamline all HR processes.</li>
                <li>Increased candidate satisfaction and employee productivity by 15-30% as a result as shown on our trackers.</li>
              </ul>
          </div>
          <hr/>
          <h2>Certificates</h2>
          <div className="certificate__container">
            <div id="cert">
              <a target='_blank' rel='noreferrer' href='https://www.credly.com/badges/c9350e8f-ada3-4f02-9c76-61fb832bc2b1?source=linked_in_profile'>FullStack Developer</a>
              <p>Issued 6/2022</p>
            </div>              
            <div id="cert">
              <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/learning/certificates/c7ab5d73c109cb95513b73ae6b3c2fd3431f52209388b9eaec6a33d6a6b4169f?u=2145721'>JavaScripts Loops and Conditionals</a>
              <p>Issued 6/2022</p>
            </div>
            <div id="cert">
              <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/learning/certificates/e816c4d6b8a44464e8ecb7fb7d578462773347b9392cb9a37b8437c5c71ea3f6?u=2145721'>Progamming Foundations: Algorithms</a>
              <p>Issued 5/2022</p>
            </div>
            <div id="cert">
              <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/learning/certificates/535901ae57bb6be4bde79b7b46f51a2994f1d64559225715d16c914d4526d5ca?u=2145721'>Programming Foundations: Object-Oriented Design</a>
              <p>Issued 5/2022</p>
            </div>
          </div>
          <hr/>
          <h2>Education</h2>
          <div className="education__container">
            <div id="edu">
              <h4>Tech I.S.-Coding Bootcamp</h4>
              <p style={{fontStyle: 'italic'}}>Full Stack Web Development</p>
              <p>1/2022-6/2022</p>
            </div>
            <div id="edu">
              <h4>University of Wisconsin - Milwaukee</h4>
              <p style={{fontStyle: 'italic'}}>Human Resources</p>
              <p>1/2016-6/2019</p>
            </div>
          </div>
    </div>
  );
}
