import React, { useEffect, useRef } from 'react';

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
        aboutMeNav.classList.add('fixed-at-top');
        aboutMeNav.classList.remove('sticky-within-section');
      } else {
        aboutMeNav.classList.remove('fixed-at-top');
        aboutMeNav.classList.add('sticky-within-section');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.setAttribute('data-bs-spy', 'scroll');
    document.body.setAttribute('data-bs-target', '#aboutMeNav');
    document.body.setAttribute('data-bs-offset', '50');
    document.body.classList.add('scrollspy-example');
  }, []);

  return (
    <section id='aboutMe' className='about-me-section' ref={aboutMeSectionRef}>
      <div className='aboutMe-wrapper'>
        {/* Menú lateral */}
        <nav
          id='aboutMeNav'
          className='aboutMe-nav sticky-within-section'
          ref={aboutMeNavRef}
        >
          <ul className='nav flex-column pt-3'>
            <li className='nav-item'>
              <a className='nav-link active' href='#myStory'>
                My Story
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#technologiesUsed'>
                Technologies
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#experience'>
                Experience
              </a>
            </li>
          </ul>
        </nav>

        {/* Contenido principal */}
        <div className='aboutMe-content'>
          <div id='myStory' className='subsection'>
            <h2>My Story</h2>
            <p>
              I'm a dynamic developer focused on building efficient digital
              solutions that drive business growth. By combining my Full-Stack
              foundation with WordPress expertise, n8n automation, and AI
              integration, I design smart workflows and scalable web
              applications engineered to optimize processes and deliver
              outstanding user experiences.
            </p>
            <p>
              Beyond my technical path, my background in Social Communications
              and journalism sharpens my strategic thinking and clarity in
              documenting complex ideas. Currently expanding my horizons with a
              university degree in Data Science and AI, I merge analytical
              problem-solving with a global mindset—shaped by living and working
              in diverse cultures like Australia, Brazil, and Thailand. I am
              fluent in English, Portuguese, and native in Spanish.
            </p>
            <p>
              Driven by deep curiosity, I love exploring data trends and the
              creative landscape of electronic music production. Now, I'm on the
              lookout for exciting IT opportunities and freelance collaborations
              where I can bring my energy, multidisciplinary skill set, and
              fresh automation perspective into challenging tech projects.
            </p>
          </div>
          <div id='technologiesUsed' className='subsection'>
            <h2>Technologies Used</h2>
            <div className='technologies-grid'>
              {/* --- AI & AUTOMATION (Tu foco fuerte actual) --- */}
              <div className='technology'>
                <img className='icon' src='/n8n-icon.png' alt='n8n Icon' />
                <span>n8n</span>
              </div>
              <div className='technology'>
                <img className='icon' src='/llm-icon.png' alt='LLMs Icon' />
                <span>LLMs</span>
              </div>
              <div className='technology'>
                <img
                  className='icon'
                  src='/wordpress-icon.png'
                  alt='WordPress Icon'
                />
                <span>WordPress</span>
              </div>

              {/* --- FRONTEND CODE --- */}
              <div className='technology'>
                <img
                  className='icon'
                  src='/javascript-icon.png'
                  alt='JavaScript Icon'
                />
                <span>JavaScript</span>
              </div>
              <div className='technology'>
                <img
                  className='icon'
                  src='/react-icon.png'
                  alt='ReactJS Icon'
                />
                <span>ReactJS</span>
              </div>
              <div className='technology'>
                <img className='icon' src='/html-icon.png' alt='HTML Icon' />
                <span>HTML</span>
              </div>
              <div className='technology'>
                <img className='icon' src='/css-icon.png' alt='CSS Icon' />
                <span>CSS</span>
              </div>

              {/* --- BACKEND & CLOUD --- */}
              <div className='technology'>
                <img
                  className='icon'
                  src='/nodejs-icon.png'
                  alt='NodeJS Icon'
                />
                <span>NodeJS</span>
              </div>
              <div className='technology'>
                <img
                  className='icon'
                  src='/postgresql-icon.png'
                  alt='PostgreSQL Icon'
                />
                <span>PostgreSQL</span>
              </div>
              <div className='technology'>
                <img
                  className='icon'
                  src='/mongodb-icon.png'
                  alt='MongoDB Icon'
                />
                <span>MongoDB</span>
              </div>
              <div className='technology'>
                <img className='icon' src='/aws-icon.png' alt='AWS Icon' />
                <span>AWS</span>
              </div>

              {/* --- TOOLS --- */}
              <div className='technology'>
                <img
                  className='icon'
                  src='/github-icon.png'
                  alt='GitHub Icon'
                />
                <span>GitHub</span>
              </div>
            </div>
          </div>
          <div id='experience' className='subsection'>
            <h2>Experience</h2>
            <br />

            {/* --- 1. FREELANCE & CONSULTANT (Foco Actual) --- */}
            <h4 className='position-name'>
              <span className='workplace'>Freelance & Tech Consultant</span> |{' '}
              <span className='position-desc'>
                Web Developer & Automation Specialist
              </span>
            </h4>
            <i className='lapse-worked'>Oct 2025 - Present</i>
            <p className='experience-text'>
              Manage the end-to-end lifecycle of digital products, combining
              custom WordPress architectures and Full-Stack technologies to
              deliver tailored solutions for eCommerce, media, and corporate
              clients.
            </p>
            <p className='experience-text'>
              Architect intelligent business platforms, optimizing UX,
              conversion flows, and exploring automated workflows to maximize
              operational efficiency.
            </p>

            <br />
            <hr className='experience-divider' />
            <br />

            {/* --- 2. NGO PROJECT (Datos y Visualización) --- */}
            <h4 className='position-name'>
              <span className='workplace'>ACIJ + La Poderosa</span> |{' '}
              <span className='position-desc'>Frontend Developer</span>
            </h4>
            <i className='lapse-worked'>Jun 2025 - Sep 2025</i>
            <p className='experience-text'>
              Developed a visually engaging web platform to transform a complex
              social and economic study covering over 5,000 households into an
              accessible, interactive data-driven experience.
            </p>

            <br />
            <hr className='experience-divider' />
            <br />

            {/* --- 3. BIBLIOTECAS POPULARES (Arquitectura) --- */}
            <h4 className='position-name'>
              <span className='workplace'>Bibliotecas Populares Cba</span> |{' '}
              <span className='position-desc'>Fullstack Developer</span>
            </h4>
            <i className='lapse-worked'>Jul 2024 - Jan 2026</i>
            <p className='experience-text'>
              Designed and built a web platform to connect public libraries in
              Córdoba. Led the full-stack architecture using Node.js, Express,
              and MongoDB, facilitating seamless data management and user
              interaction.
            </p>
            <p className='experience-text'>
              Check further information about this website on{' '}
              <a href='#projects'>projects</a>.
            </p>

            <br />
            <hr className='experience-divider' />
            <br />

            {/* --- 4. GENWORDS (Tu gran ventaja comunicacional) --- */}
            <h4 className='position-name'>
              <span className='workplace'>Genwords</span> |{' '}
              <span className='position-desc'>
                Copywriter - Inbound Marketing
              </span>
            </h4>
            <i className='lapse-worked'>Feb 2019 - March 2022</i>
            <p className='experience-text'>
              Crafted strategic, SEO-driven content and marketing copy for
              diverse regional industries (B2B, B2C, SaaS), bridging the gap
              between business goals and audience engagement.
            </p>
          </div>
          {/* <div id='experience' className='subsection'>
            <h2>Experience</h2>
            <br />

            <h4 className='position-name'>
              <span className='workplace'>Bibliotecas Populares Cba</span> |{' '}
              <span className='position-desc'>Fullstack Developer</span>
            </h4>
            <i className='lapse-worked'>Sept 2024 - Present</i>
            <p className='experience-text'>
              Complete development of a website that connects with all major
              public libraries in the province of Córdoba, Argentina.
            </p>
            <p className='experience-text'>
              Check further information about this website on{' '}
              <a href='#projects'>projects</a>.
            </p>

            <br />
            <hr className='experience-divider' />
            <br />
            <h4 className='position-name'>
              <span className='workplace'>Wesfil Australia</span> |{' '}
              <span className='position-desc'>Backend Developer</span>
            </h4>
            <i className='lapse-worked'>Aug 2023 - April 2024</i>
            <p className='experience-text'>
              {' '}
              Developed and maintained RESTful APIs using Node.js and Express to
              support the company's internal order processing system.
            </p>
            <p className='experience-text'>
              Contributed to the development of key backend features for the
              customer management application using Typescript and PostgreSQL,
              focusing on data integrity and performance.
            </p>
            <p className='experience-text'>
              Collaborated with frontend developers to integrate APIs and ensure
              seamless data flow.
            </p>
            <br />
            <hr className='experience-divider' />
            <br />
            <h4 className='position-name'>
              <span className='workplace'>Genwords</span> |{' '}
              <span className='position-desc'>
                Copywriter - Inbound Marketing
              </span>
            </h4>
            <i className='lapse-worked'>Feb 2019 - March 2022</i>
            <p className='experience-text'>
              Inbound marketing company with clients all over Latin America
              (B2C, B2B, SaaS).
            </p>
            <p className='experience-text'>Tasks performed:</p>
            <ul className='experience-text'>
              <li>
                Researching, writing and composing articles on diverse subjects,
                such as tourism, sports, culture and entertainment, car
                industry, marketing, among others.
              </li>
              <li>Edition following SEO and print media requirements.</li>
            </ul>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
