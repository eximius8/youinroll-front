import React, {useContext} from 'react';
import SideBarItem, {SideBarItemSmall} from './SideBarItem/SideBarItem';
import {Menu, Divider} from 'semantic-ui-react';
import './SideBar.scss';
import {SideBarHeader} from './SideBarHeader/SideBarHeader';
import {Subscriptions} from './Subscriptions/Subscriptions';
//import {SideBarFooter} from './SideBarFooter/SideBarFooter';

import {MenuContext} from "../../components/AppLayout/AppLayout";

export function SideBar() {

  const isOpen = useContext(MenuContext);
  
  
  if (isOpen){
    return (      
        <Menu borderless vertical stackable fixed='left' className='side-nav'>
          <SideBarItem path='/' label='Мой канал' icon='home'/>
          <SideBarItem label='Чат' icon='comments outline'/>
          <Divider/>
          <SideBarItem path='/feed/trending' label='В тренде' icon='fire'/>
          <SideBarItem path='/categories' label='Категории' icon='play circle outline'/>
          <SideBarItem path='/subscription' label='Каналы' icon='list'/>       
          
          <Divider/>
          <SideBarHeader title='Мои курсы'/>
          <SideBarItem label='Как стать звездой' icon='film'/>
          <Divider/>

          <Subscriptions/>
          
          <SideBarItem path='/settings' label='Настройки' icon='setting'/>
          <SideBarItem label='Помощь' icon='help circle'/>
          <SideBarItem label='Обратная связь' icon='comment alternate outline'/>     
        </Menu>      
    )}
  
    return(
      <Menu borderless vertical stackable fixed='left' className='side-shrinked-nav'>
        <SideBarItemSmall path='/' label='Мой канал' icon='home' />
        
        <SideBarItemSmall label='Чат' icon='comments outline'/>
        <Divider/>
        <SideBarItemSmall path='/categories' label='Категории' icon='play circle outline'/>
        <SideBarItemSmall path='/subscription' label='Каналы' icon='list'/>
        <Divider/>
        <SideBarItemSmall path='/settings' label='Настройки' icon='setting'/> 
          
      </Menu>  
    );
}


  {/*  <SideBarHeader title='Library'/>
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
        <SideBarFooter/> */}