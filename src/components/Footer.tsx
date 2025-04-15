import React from "react";

const Footer: React.FC = () => {

    return(
        <div  className="socialMedia position-fixed bottom-0 start-50 translate-middle-x py-3">
        <ul className="d-flex justify-content-center align-items-center gap-4 m-0 p-0">
            <li><a href="https://www.linkedin.com/in/pablo-federico-peralta/" target="_blank" rel="noopener noreferrer">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="white" opacity="0.7" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 3C5.1 3 6 3.9 6 5C6 6.1 5.1 7 4 7C2.9 7 2 6.1 2 5C2 3.9 2.9 3 4 3ZM2 21H6V9H2V21ZM10 9V21H14V14C14 12.3 15.3 11 17 11C18.7 11 20 12.3 20 14V21H24V14C24 10.1 20.9 7 17 7C14.2 7 12 8.5 11 10.4V9H10Z"/>
            </svg>
            </a></li>
            <li><a href="https://github.com/pablo-peralta-cba" target="_blank" rel="noopener noreferrer">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="white" opacity="0.7" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.5 2 2 6.5 2 12C2 16.4 4.9 20.1 8.8 21.5C9.3 21.6 9.5 21.3 9.5 21V18.9C6.7 19.6 6.2 17.6 6.2 17.6C5.8 16.6 5.2 16.3 5.2 16.3C4.3 15.7 5.3 15.7 5.3 15.7C6.3 15.8 6.8 16.8 6.8 16.8C7.7 18.3 9.2 17.9 9.8 17.7C9.9 17 10.2 16.5 10.5 16.2C7.8 15.9 5 14.9 5 10.6C5 9.4 5.4 8.4 6.2 7.6C6.1 7.3 5.7 6.2 6.3 4.7C6.3 4.7 7.3 4.4 9.5 5.8C10.4 5.6 11.3 5.5 12.2 5.5C13.1 5.5 14 5.6 14.9 5.8C17.1 4.4 18.1 4.7 18.1 4.7C18.7 6.2 18.3 7.3 18.2 7.6C19 8.4 19.4 9.4 19.4 10.6C19.4 14.9 16.6 15.9 13.9 16.2C14.3 16.6 14.6 17.3 14.6 18.3V21C14.6 21.3 14.8 21.6 15.3 21.5C19.2 20.1 22.1 16.4 22.1 12C22 6.5 17.5 2 12 2Z"/>
           </svg>
            </a></li>
            <li><a href="https://codesandbox.io/u/pablofedericoperalta" target="_blank" rel="noopener noreferrer">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="white" opacity="0.7" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0L0 6V18L12 24L24 18V6L12 0ZM10 19L4 16V12L10 15V19ZM12 14L6 11L12 8L18 11L12 14ZM14 19V15L20 12V16L14 19Z"/>
    </svg>
            </a></li>
        </ul>
        </div>
    )
}

export default Footer;