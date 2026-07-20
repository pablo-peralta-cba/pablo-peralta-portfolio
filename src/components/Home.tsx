import React from 'react';

const Home: React.FC = () => {
  return (
    <section
      id='home'
      className='home-section d-flex flex-column justify-content-center align-items-center text-center'
    >
      <h1 className='home-title'>
        Hi there. I'm <span className='brandName'>Pablo</span>
      </h1>
      <h2 className='home-subtitle'>
        Fullstack Dev - WordPress - AI and N8N automation
      </h2>
      <p className='home-text'>
        Scaling businesses through AI, automation, and smart web solutions.
      </p>
    </section>
  );
};

export default Home;
