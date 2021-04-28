import React, { useEffect, useState } from 'react';
import {Subscription} from "./Subscription/Subscription";
import {Button, Divider, Icon} from "semantic-ui-react";
import {SideBarHeader} from '../SideBarHeader/SideBarHeader';

//import SideBarItem from '../SideBarItem/SideBarItem';
import axios from 'axios';

export function Subscriptions() {

  const [showAll, setShowAll] = useState(false);
  const [subscriptions, setSibscriptions] = useState({
    avatar: "res.php?src=storage/uploads/d1882293076e6e91c230bb2fecba82e9-1.jpg&q=100&w=130&h=130",
    name: "Никита Вадимович"}
  );

  const [hiddenavtrs, setHiddenavtrs] = useState({
    avatar: "res.php?src=storage/uploads/46f76053c4c77fc742027ab9d443d8d6-948.png&q=100&w=130&h=130",
    name: "Михаил"
  });

/*   useEffect(() => {
    axios.get(`https://youinroll.com/profile/1?api=v1.0`)
    .then((res) => {
      
      console.log(typeof res.data);  
      setSibscriptions(res.data.response);
    })
    .catch((err) => console.log(err));

    axios.get(`https://youinroll.com/profile/948?api=v1.0`)
    .then((res) => { 
      
      setHiddenavtrs(res.data.response);
    })
    .catch((err) => console.log(err)) 
  },[]); */


  const initial = [1,2];
  const hidden = [3,4];
 
    return (
      <React.Fragment>
        <SideBarHeader title='Отслеживаемые каналы'/>
        {initial.map((chanel) => 
          <Subscription key={chanel} pictr={subscriptions.avatar} label={subscriptions.name} amountNewVideos={chanel}/>          
        )}
        {showAll && hiddenavtrs &&
          <> 
            {hidden.map((chanel) => 
              <Subscription key={chanel} pictr={hiddenavtrs.avatar} label={hiddenavtrs.name} broadcasting/>          
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