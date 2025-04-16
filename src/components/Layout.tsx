import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
    children: React.ReactNode;
  }

const Layout: React.FC<LayoutProps> = ({children}) => {
    return(
        <div className='display-container py-1 d-flex flex-column'> 
        <Header/>
        <main className="flex-grow-1">{children}</main>
        <Footer/>
      </div>
    
    )
};

export default Layout;