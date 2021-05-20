import React, { useEffect, useState, useContext } from 'react';
import { Subscription } from "./Subscription/Subscription";
import { Button,  Icon, Form, Input } from "semantic-ui-react";
import { SideBarHeader } from '../SideBarHeader/SideBarHeader';
import { UserContext } from "../../../contexts/UserContext";
import "./Subscription.scss";

//import SideBarItem from '../SideBarItem/SideBarItem';
import axios from 'axios';



const SearchBar = ({setSearchKey}) => {

  return(
    <div className="subsciptionsearch">
      <Form >
        <Form.Field>        
          <Input 
            icon='search'
            placeholder='Быстрый поиск' 
            onChange={(e) => setSearchKey(e.target.value) }
          />
        </Form.Field>    
      </Form>
    </div>
  )
}

export function Subscriptions() {
  
  const { userdata } = useContext(UserContext);
  const [showAll, setShowAll] = useState(false);
  const [subscriptions, setSibscriptions] = useState([]);
  const [subscrToShow, setSubscrToShow] = useState(null);
  const [allSubscriptions, setAllSubscriptions] = useState([]);
  const [searchKey, setSearchKey ] = useState("");  

  

   useEffect(() => {
     if (userdata){
      axios.get(`https://youinroll.com/profile/${userdata.id}/subscriptions?api=v1.1`)
      .then((res) => {    
        let subscribers = res.data.response;        
        subscribers.sort( function(a, b){return b.onAir - a.onAir}  );
        setAllSubscriptions(subscribers); 
        
        if (subscribers.length <= 5){
          setSibscriptions(subscribers);        
        }else{   
          setSibscriptions(subscribers.slice(0,5));     
          setSubscrToShow(subscribers.slice(5, subscribers.length));
        }      
      })
      .catch((err) => console.log(err))
     }

  },[userdata]); 
 
    return (
      <React.Fragment>
        <SideBarHeader title='Отслеживаемые каналы'/>
        {!searchKey &&
          <>
            {subscriptions.map((subscription) => 
              <Subscription key={subscription.id} subscription={subscription}/>          
            )}
          </>
        }
         {showAll && !searchKey &&
          <> 
            {subscrToShow.map((subscription) => 
              <Subscription key={subscription.id} subscription={subscription}/> 
            )}
          </>
        }
        {subscrToShow && !searchKey &&
          <div className="showmorebutton">
            <Button 
              fluid 
              icon 
              labelPosition='left'            
              onClick={() => setShowAll(!showAll)}
            >
              <Icon name={showAll ? "angle up" : "angle down"} />
              {showAll ? "Свернуть" : "Показать еще"}
            </Button>
          </div>
        }
        {searchKey &&
          <>
            {
              allSubscriptions.filter(subscr => subscr.name.toLowerCase().includes(searchKey.toLowerCase())).map((subscription) => 
              <Subscription key={subscription.id} subscription={subscription}/> 
              )
            }
          </>
        
        }
        <SearchBar setSearchKey={setSearchKey} />
      
             
        
        
        {/* <Subscription label='MusicChannel' broadcasting/>
        <Subscription label='Coursea' amountNewVideos={10}/>
        <Subscription label='TEDx Talks' amountNewVideos={23}/>
        <Subscription label='Stanford iOS' amountNewVideos={4}/>
        <Subscription label='Udacity' amountNewVideos={114}/> */}
        
      </React.Fragment>
    );  
}