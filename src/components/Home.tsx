import React from "react";


const Home: React.FC = () => {

    return(
        <section id="home" className="home-section d-flex flex-column justify-content-center align-items-center text-center">
<h1 className="home-title">Hi there. I'm <span className="brandName">Pablo</span></h1>
<h3 className="home-subtitle">Fullstack Developer</h3>
<p className="home-text">Robust and scalable web solutions</p>
        </section>
    )
}

export default Home;