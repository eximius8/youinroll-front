import React from 'react';
import './AppLayout.scss';
import HeaderNav from '../../containers/HeaderNav/HeaderNav';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

//export const MenuContext = React.createContext(true);

export function AppLayout(props) {
  
  //const [isMenuSmall, setIsMenuSmall] = useState(true);  

  return (
    <ScrollToTop>
      <div className='app-layout'>
        <HeaderNav />
          {props.children}
        {/* <MenuContext.Provider value={isMenuSmall}>
          
        </MenuContext.Provider> */}
      </div>
    </ScrollToTop>
  );
}