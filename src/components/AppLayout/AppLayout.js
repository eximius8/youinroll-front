import React, { useState, useEffect} from 'react';
import './AppLayout.scss';
import HeaderNav from '../../containers/HeaderNav/HeaderNav';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import {SideBar} from '../../containers/SideBar/SideBar';
// export const MenuContext = React.createContext(true);

export function AppLayout(props) {
  
 // const [isMenuSmall, setIsMenuSmall] = useState(true);  
 const [isOpen, setIsOpen] = useState(true);
 const [isMobile, setIsMobile] = useState(window.innerWidth <= 760);

 const windwidth = window.innerWidth;

  useEffect(() => {
    setIsMobile(window.innerWidth <= 760)    
  },[setIsMobile, windwidth])

  

 const mainStyle = {
    width: '100%',
    paddingLeft: isMobile ? "0px" : isOpen ? "18rem" : "7rem",
    paddingRight: "0px",
    marginRight: "0px",
    paddingTop: "64px",
  };

  return (
    <ScrollToTop>      
        <HeaderNav />
        <div className='app-layout'>
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />        
          <main style={mainStyle}>
            {props.children}
          </main>              
       
      </div>
    </ScrollToTop>
  );
}