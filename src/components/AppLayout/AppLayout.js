import React, { useState} from 'react';
import './AppLayout.scss';
import HeaderNav from '../../containers/HeaderNav/HeaderNav';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import {SideBar} from '../../containers/SideBar/SideBar';
// export const MenuContext = React.createContext(true);

export function AppLayout(props) {
  
 // const [isMenuSmall, setIsMenuSmall] = useState(true);  
 const [isOpen, setIsOpen] = useState(true);

 const mainStyle = {
    width: '100%',
    paddingLeft: isOpen ? "18rem" : "7rem",
    paddingRight: "0px",
    marginRight: "0px",
  };

  return (
    <ScrollToTop>
      <div className='app-layout'>
        <HeaderNav />
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
          <main style={mainStyle}>
            {props.children}
          </main>
               
        {/*  <MenuContext.Provider value={isMenuSmall}>
          
        </MenuContext.Provider> */}
      </div>
    </ScrollToTop>
  );
}