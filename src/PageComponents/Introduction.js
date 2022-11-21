export default function Introduction() {
  return (
    <div className="intro__container">
      <div className='intro__contents'>
        <div className="intro__text">
          <p>Hello, my name is</p>
          <h1 id="intro__name" style={{ marginBottom: "1rem" }}>
            Jimmy Nguyen
          </h1>
          <p style={{marginBottom:"3rem"}}>
            A Software Engineer located in
            <a href='/'>{` Las Vegas, NV.`}</a>
          </p>
          <p style={{ color: "lightgray"}}>
            I'm a <a href='/'>{" Full Stack Developer"}</a> that
            enjoys building and creating products for entertainment or problem
            solving. Coming from a family of entrepreneurs, I've always been drawn
            to creating and building.
          </p>
          <p style={{ color: "lightgray" }}>
            I love team environments and I also work well on my own. I'm a hobbyist and a "Jack of All Trades". When I learn a new subject, I like to learn it well. 
          </p>
        </div>
        <div>
          <img 
              src={require('../Images/Profile Picture.png')} 
              alt='Profile'
              id='intro_image'
            />
        </div>
      </div>
      <div className='intro__socials'>
        <a
          href='https://www.linkedin.com/in/jimmy-nguyen-76a555171/'
          target='_blank'
          rel="noreferrer"
        >
          <img 
            src={require('../Images/LinkedIn.png')} 
            alt='LinkedIn'
            id='social__images'
          />
        </a>
        <a
          href='https://github.com/JimmyNguyen97'
          target='_blank'
          rel="noreferrer"
        >
          <img 
            src={require('../Images/Github-Logo.png')} 
            alt='GitHub'
            id='social__images'
          />
        </a>
        <a
          href='https://www.youtube.com/channel/UCgB40SDK8FXyHJX-WjcNyAQ'
          target='_blank'
          rel="noreferrer"
        >
          <img 
            src={require('../Images/Youtube-Logo.png')} 
            alt='Youtube'
            id='social__images'
          />
        </a>
      </div>
    </div>
  );
}
