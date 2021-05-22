import React, { useContext } from 'react';
import SideBarItem, {SideBarItemSmall} from './SideBarItem/SideBarItem';
import {Menu, Divider } from 'semantic-ui-react';
import './SideBar.scss';
import { SideBarHeader } from './SideBarHeader/SideBarHeader';
import { Subscriptions } from './Subscriptions/Subscriptions';
import { WindowSizeContext } from "../../contexts/WindowSizeContext";





export function SideBar({isOpen, setIsOpen}) {

  const { isMobile } = useContext(WindowSizeContext);

  if (isMobile){
    return (
      <div className="mobilesb">
  <p>dasjhsdfksdfksdfkkjsdfkjsdflsdafkhsdfkljsdfksdfkjsdfkljsdfkljhsdfkj jhdkj sdkj</p>
      </div>
    )
  }
  
  // fill="#888888" stroke="#888888"
  if (isOpen){
    return (      
        <Menu borderless vertical stackable fixed='left' className='side-nav'>
          <SideBarHeader 
            title="" 
            act={
              <button 
                onClick={() => setIsOpen(false)}
                className="floatright"
              >
                <svg width="30%" height="50%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px">
                  <g><path  d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z"></path></g> 
                </svg>
                {/* <Icon className="angle double left"> </Icon>  */}
              </button>
              }
          />
          <Divider/>
          <SideBarItem path='/' label=' Мой канал' icon='home'/>
          <SideBarItem label=' Чат' icon='comments outline'/>
          <Divider/>
          <SideBarItem path='/feed/trending' label=' В тренде ' icon='fire'/>
          <SideBarItem path='/categories' label=' Категории ' icon='compass'/>
          <SideBarItem path='/сhannels' label=' Каналы ' icon='users'  />       
          
          <Divider/>
          <SideBarHeader title='Мои курсы'/>
          <SideBarItem label='Как стать звездой' icon='film'/>
          <Divider/>

          <Subscriptions/>
          {/* 
          <SideBarItem path='/settings' label='Настройки' icon='setting'/>
          <SideBarItem label='Помощь' icon='help circle'/>
          <SideBarItem label='Обратная связь' icon='comment alternate outline'/>  */}    
        </Menu>      
    )}
  
    return(
      <Menu borderless vertical stackable fixed='left' className='side-shrinked-nav'>
        <button 
          className="floatcenter"
          onClick={() => setIsOpen(true)}
        > 
          <svg width="40%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" className="ScIconSVG-sc-1bgeryd-1 cMQeyU">
            <g><path d="M4 16V4H2v12h2zM13 15l-1.5-1.5L14 11H6V9h8l-2.5-2.5L13 5l5 5-5 5z"></path></g>
          </svg>        
         {/*  <Icon className="angle double right"> </Icon>  */}
        </button>
        <SideBarItemSmall path='/' label='Мой канал' icon='home' />
        
        <SideBarItemSmall label='Чат' icon='comments outline'/>
        <Divider/>
        <SideBarItemSmall path='/categories' label='Категории' icon='compass'/>
        <SideBarItemSmall path='/сhannels' label='Каналы' icon='users'/>
       {/*  <Divider/>
        <SideBarItemSmall path='/settings' label='Настройки' icon='setting'/>  */}
          
      </Menu>  
    );
}


 /*  <SideBarHeader title='Library'/>
        <SideBarItem label='History' icon='history'/>
        <SideBarItem label='Watch later' icon='clock'/>
        <SideBarItem label='Liked videos' icon='thumbs up'/>
        <Divider/>
        <Subscriptions/>
        <SideBarHeader title='More from Youtube'/>
        <SideBarItem label='Movies and Shows' icon='film'/>
        <Divider/>
        <SideBarItem label='Report history' icon='flag'/>
        <SideBarItem label='Help' icon='help circle'/>
        <SideBarItem label='Send feedback' icon='comment'/>
        <Divider/>
        <SideBarFooter/> */