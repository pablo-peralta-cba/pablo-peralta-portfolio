import React from "react";


const Header: React.FC = () => {

    return (
        <header id='header' className="fixed-top  px-2 py-3 header-custom d-flex justify-content-between align-items-center">
            <span className="brand text-wide">PABLO PERALTA</span>
            <ul className="menuHeader  d-flex list-unstyled m-0">
                <li><a href="#home">Home</a></li>
                <li><a href="#aboutMe">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
      </header>
    );
  };

export default Header;