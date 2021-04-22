import React, { useEffect, useState } from 'react';
import {Subscription} from "./Subscription/Subscription";
import {Button, Divider, Icon} from "semantic-ui-react";
import {SideBarHeader} from '../SideBarHeader/SideBarHeader';

import SideBarItem from '../SideBarItem/SideBarItem';
import axios from 'axios';

export function Subscriptions() {

  const [showAll, setShowAll] = useState(false);
  const [subscriptions, setSibscriptions] = useState([]);

  useEffect(() => {
    axios.get(`https://youinroll.com/profile/1?api=v1.0`)
    .then((res) => {
      console.log(res.data.response.name);
    })
    .catch((err) => console.log(err))
  },[]);


  const initial = [1,2]
  const hidden = [3,4];
 
    return (
      <React.Fragment>
        <SideBarHeader title='Отслеживаемые каналы'/>
        {initial.map((chanel) => 
          <Subscription key={chanel} label='YouInRoll' amountNewVideos={chanel}/>          
        )}
        {showAll && 
          <> 
            {hidden.map((chanel) => 
              <Subscription key={chanel} label='YouInRoll Музыка' broadcasting/>          
            )}
          </>
        }
        <Button 
          fluid 
          icon 
          labelPosition='left'
          onClick={() => setShowAll(!showAll)}
        >
          <Icon name={showAll ? "angle up" : "angle down"} />
          {showAll ? "Свернуть" : "Показать еще"}
        </Button>
       
             
        
        
        {/* <Subscription label='MusicChannel' broadcasting/>
        <Subscription label='Coursea' amountNewVideos={10}/>
        <Subscription label='TEDx Talks' amountNewVideos={23}/>
        <Subscription label='Stanford iOS' amountNewVideos={4}/>
        <Subscription label='Udacity' amountNewVideos={114}/> */}
        <Divider/>
      </React.Fragment>
    );  
}