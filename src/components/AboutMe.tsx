import React, { useEffect, useRef } from "react";


const AboutMe: React.FC = () => {
  const aboutMeSectionRef = useRef<HTMLElement>(null);
  const aboutMeNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const aboutMeSection = aboutMeSectionRef.current;
    const aboutMeNav = aboutMeNavRef.current;

    if (!aboutMeSection || !aboutMeNav) return;

    const handleScroll = () => {
      const sectionTop = aboutMeSection.offsetTop;
      const sectionBottom = sectionTop + aboutMeSection.offsetHeight;
      const scrollY = window.scrollY;
      const navHeight = aboutMeNav.offsetHeight;

      if (scrollY > sectionTop && scrollY < sectionBottom - navHeight) {
        aboutMeNav.classList.add("fixed-at-top");
        aboutMeNav.classList.remove("sticky-within-section");
      } else {
        aboutMeNav.classList.remove("fixed-at-top");
        aboutMeNav.classList.add("sticky-within-section");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-bs-spy", "scroll");
    document.body.setAttribute("data-bs-target", "#aboutMeNav");
    document.body.setAttribute("data-bs-offset", "50");
    document.body.classList.add("scrollspy-example");
  }, []);

  return (
<section id="aboutMe" className="about-me-section" ref={aboutMeSectionRef}>

    <div className="aboutMe-wrapper">
      {/* Menú lateral */}
      <nav
        id="aboutMeNav"
        className="aboutMe-nav sticky-within-section"
        ref={aboutMeNavRef}
      >
        <ul className="nav flex-column pt-3">
          <li className="nav-item">
            <a className="nav-link active" href="#myStory">My Story</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#technologiesUsed">Technologies</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#experience">Experience</a>
          </li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <div className="aboutMe-content">
        <div id="myStory" className="subsection">
          <h2>My Story</h2>
          <p>
            I'm a full-stack developer buzzing with excitement to build impactful web solutions.
            My toolkit includes JavaScript, React, Node.js, PostgreSQL, and MongoDB, and I'm constantly
            driven by the challenge of creating scalable and efficient applications that deliver great user experiences.
          </p>
          <p>
            Apart from my journey into web development I have a background in Social Communications,
            copywriting, and journalism, which has polished my ability to communicate effectively.
            My experiences living and working in diverse environments like Australia, Brazil, and Thailand
            have not only broadened my perspective but also gave me strong adaptability and collaboration skills. I speak fluent English and Portuguese, besides being a native Spanish speaker.
          </p>
          <p>
            I'm a highly curious individual with a thirst for knowledge, currently exploring the amazing landscape of electronic music production.
            Now, I'm on the lookout for exciting IT opportunities where I can bring my energy, skills, and fresh perspective into challenging projects
            and continue my growth as a developer.
          </p>
        </div>

        <div id="technologiesUsed" className="subsection">
  <h2>Technologies Used</h2>
  <div className="technologies-grid">
    <div className="technology">
      <img className="icon" src="/html-icon.png" alt="HTML Icon" />
      <span>HTML</span>
    </div>
    <div className="technology">
      <img className="icon" src="/css-icon.png" alt="CSS Icon" />
      <span>CSS</span>
    </div>
    <div className="technology">
      <img className="icon" src="/javascript-icon.png" alt="JavaScript Icon" />
      <span>JavaScript</span>
    </div>
   
    <div className="technology">
      <img className="icon" src="/react-icon.png" alt="ReactJS Icon" />
      <span>ReactJS</span>
    </div>
    <div className="technology">
      <img className="icon" src="/nodejs-icon.png" alt="NodeJS Icon" />
      <span>NodeJS</span>
    </div> 
    <div className="technology">
      <img  id='express' className="icon" src="/express-icon.png" alt="ExpressJS Icon" />
      <span>ExpressJS</span>
    </div>
    <div className="technology">
      <img className="icon" src="/mongodb-icon.png" alt="MongoDB Icon" />
      <span>MongoDB</span>
    </div>
    <div className="technology">
      <img className="icon" src="/postgresql-icon.png" alt="PostgreSQL Icon" />
      <span>PostgreSQL</span>
    </div>
    <div className="technology">
      <img className="icon" src="/mysql-icon.png" alt="MySQL Icon" />
      <span>MySQL</span>
    </div>
    <div className="technology">
      <img className="icon" src="/ts-icon.jpeg" alt="TypeScript Icon" />
      <span>TypeScript</span>
    </div>
    <div className="technology">
      <img className="icon" src="/bootstrap-icon.png" alt="Bootstrap Icon" />
      <span>Bootstrap</span>
    </div>
    <div className="technology">
      <img className="icon" src="/github-icon.png" alt="GitHub Icon" />
      <span>GitHub</span>
    </div>
  </div>
</div>

        <div id="experience" className="subsection">
          <h2>Experience</h2>
          <br />
          
          <h4 className="position-name"><span className="workplace">Bibliotecas Populares Cba</span> | <span className="position-desc">Full Stack Developer</span></h4>
          <i className="lapse-worked">Sept 2024 - Present</i>
          <p className="experience-text">Complete development of a website that connects with all major public libraries in the province of Córdoba, Argentina.</p>
          <p className="experience-text">Check further information about this website on <a href="#projects">projects</a>.</p>
            
          <br />
          <hr className="experience-divider" />
          <br />
          <h4 className="position-name"><span className="workplace">Wesfil Australia</span> | <span className="position-desc">Communications Specialist</span></h4>
          <i className="lapse-worked">Aug 2023 - April 2024</i>
          <p className="experience-text"> Implementation of internal corporate communication strategies.</p>
          <p className="experience-text">Coordination and synergy with the company’s headquarters and various branches across Australia.</p> 
          <p className="experience-text">Communication with clients and suppliers.</p>
          <br />
          <hr className="experience-divider" />
          <br />
          <h4 className="position-name"><span className="workplace">Genwords</span> | <span className="position-desc">Copywriter - Inbound Marketing</span></h4>
          <i className="lapse-worked">Feb 2019 - March 2022</i>
          <p className="experience-text">Inbound marketing company with clients all over Latin America (B2C, B2B, SaaS).</p>
          <p className="experience-text">Tasks performed:</p>
          <ul className="experience-text">
            <li>Researching, writing and composing articles on diverse subjects, such as tourism, sports, culture and entertainment, car industry, marketing, among others.</li>
            <li>Edition following SEO and print media requirements.</li>
          </ul>
        </div>
      </div>
      </div>
  </section>
  );
};

export default AboutMe;