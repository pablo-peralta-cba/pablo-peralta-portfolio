import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveLink?: string;
  codeLink?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'User Onboarding Workflow',
    description:
      'An automated business solution built with n8n as an orchestrator. It syncs user registrations to databases instantly and integrates Google Gemini AI to draft personalized welcome emails and a conditional logic system for error handling.',
    image: '/screenshots/n8n-automation-workflow.png',
    liveLink:
      'https://www.linkedin.com/posts/pablo-federico-peralta_automation-n8n-artificialintelligence-ugcPost-7480640649076338688-UJqe/?highlightedUpdateUrn=urn%3Ali%3Aactivity%3A7480640852143550464&highlightedUpdateType=SOCIAL_SHARE&origin=SOCIAL_SHARE&utm_source=share&utm_medium=member_desktop&rcm=ACoAACxtDvoB_dg96Z7al4fJTBAuBEgx39dbDTo',
  },
  {
    id: 2,
    title: 'Tu Piso Pélvico',
    description:
      'Custom-built WordPress platform for a pelvic floor kinesiology specialist. Integrates professional health service booking, clinical consultation workflows, and an e-commerce store dedicated to sexual wellness products. (Currently under development).',
    image: '/screenshots/tu-piso-pelvico.jpeg',
    liveLink: '',
    codeLink: '',
  },
  {
    id: 3,
    title: 'ACIJ + La Poderosa',
    description:
      'Fully frontend, visually appealing website developed using JavaScript and plain CSS. Made a complex social and economic study accessible to users through an effective scrollytelling approach.',
    image: '/screenshots/acij-la-poderosa.png',
    liveLink: 'https://lapoderosa.acij.org.ar/',
    codeLink: 'https://github.com/Quimey927/acij',
  },
  {
    id: 4,
    title: 'Bibliotecas Populares Cba',
    description:
      'Website that links all public libraries in the province of Córdoba, Argentina. Built with technologies such as JS, Express and Node.js. The database is MongoDB, other tools for authentication and geolocation.',
    image: '/screenshots/bibliotecas-populares-cba.png',
    liveLink: 'https://www.bibliotecaspopularescba.com/',
    codeLink: 'https://github.com/pablo-peralta-cba/bibliotecas-populares-cba',
  },
  {
    id: 5,
    title: 'AnotaAI - Backend API',
    description:
      'Robust and scalable RESTful API built using Node.js, Express and TypeScript. Backend solution for managing products and categories catalogs CRUD. Mongoose for interacting with MongoDB, plus AWS services like SQS and S3.',
    image: '/screenshots/backend-api.png',
    liveLink: '',
    codeLink:
      'https://github.com/pablo-peralta-cba/pablo-peralta-anotaai-test-backend-nodejs',
  },
  {
    id: 6,
    title: 'Markdown Previewer',
    description:
      'React app displaying a text editor and a preview area, where the user can see reflected all the markdown styles used. Developed for the Front End Libraries certification on FreeCodeCamp.org',
    image: '/screenshots/markdown-previewer.png',
    liveLink: 'https://markdown-previewer-wp88.onrender.com/',
    codeLink: 'https://github.com/pablo-peralta-cba/markdown-previewer',
  },
];

const Projects: React.FC = () => {
  return (
    <section id='projects' className='projects-section py-5'>
      <div className='container'>
        <h2>Projects</h2>
        <div className='projects-grid'>
          {projectsData.map((project) => (
            <div key={project.id} className='project-cell'>
              <img
                src={project.image}
                alt={project.title}
                className='project-image'
              />
              <div className='project-overlay'>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className='project-links'>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Go to Website
                    </a>
                  )}
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
