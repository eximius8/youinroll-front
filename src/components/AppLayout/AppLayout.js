import React, { useState } from 'react';
import './AppLayout.scss';
import HeaderNav from '../../containers/HeaderNav/HeaderNav';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

export const MenuContext = React.createContext(true);

export function AppLayout(props) {
  
  const [isMenuSmall, setIsMenuSmall] = useState(true);  

  return (
    <ScrollToTop>
      <div className='app-layout'>
        <HeaderNav isMenuSmall={isMenuSmall} setIsMenuSmall={setIsMenuSmall} />
        <MenuContext.Provider value={isMenuSmall}>
          {props.children}
        </MenuContext.Provider>
      </div>
    </ScrollToTop>
  );
}