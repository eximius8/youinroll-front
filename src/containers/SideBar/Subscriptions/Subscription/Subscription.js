import React from 'react';
import {Icon, Image, Menu} from "semantic-ui-react";
import './Subscription.scss';

export function Subscription({subscription}) {

  

  let rightElement = null;
  const broadcasting = Boolean(subscription.onAir);
  if (broadcasting) {
    rightElement = <Icon name='signal'/>;
   } /*else if (amountNewVideos) {
    rightElement = <span className='new-videos-count'>{amountNewVideos}</span>;
  } */
  else { 
    rightElement = <span className='new-videos-count'></span>;
  }

  let avaurl = "";

  if (subscription.avatar.startsWith('https')){
    avaurl = subscription.avatar;
  }else if (subscription.avatar.startsWith('uploads')){
    avaurl = 'https://react.semantic-ui.com/images/wireframe/square-image.png';
  }
  else{
    avaurl = "https://youinroll.com/" + subscription.avatar;
  }

  return (
    <Menu.Item>
      <div className='subscription'>
        <div>
          <Image src={avaurl} avatar/>
          <span>{subscription.name}</span>
        </div>
        {rightElement}
      </div>
    </Menu.Item>
  );
}