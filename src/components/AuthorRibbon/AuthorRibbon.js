import React, { useEffect, useState } from 'react';

import {Button, Image,  Icon, Container} from "semantic-ui-react";

import "./AuthorRibbon.scss";

//import SideBarItem from '../SideBarItem/SideBarItem';
import axios from 'axios';


export default function AuthorRibbon({authId}){

    const [isWatched, setIsWatched] = useState(false);
    const [isBroken, setIsBroken] = useState(false);
    const [userData, setUserData] = useState(null);
    const [numofSubscr, setnumofSubscr] = useState(0);

    useEffect(() => {
      axios.get(`https://youinroll.com/profile/${authId}?api=v1.0`)
      .then((res) => {
        console.log(res);
        setUserData(res.data.response)
      })
      .catch((err) => console.log(err))
      .then(() => {
        axios.get(`https://youinroll.com/profile/${authId}/subscribers?api=v1.1`)
        .then((res) => setnumofSubscr(res.data.response.length))
        .catch((err) =>  console.log(err))
      })

    },[authId])
  
    return(
      <div className="wrapper">      
        <Container as="div" fluid >
          {userData &&
            <div className="channel-info">        
              <div className="avatarblock">
                <Image 
                      src={`https://youinroll.com/${userData.avatar}`}
                      size='tiny' 
                      circular 
                      inline
                      className="avatarka"                      
                  />
                  <div className="live">
                    В КЕФИРЕ
                  </div>
              </div>
              <div className="descriptionblock">          
                <h2>{userData.name}</h2>
                <span className="aboutprofile">
                  <strong className="bigger">{userData.views}</strong> Просмотров {' '}
                </span>
               {/*  <span className="aboutprofile">
                  <strong className="bigger">672</strong> Видео
                </span> */}
              </div>
              <div className="buttonblock">
                <Button              
                    icon={isWatched ? isBroken ? "heartbeat" : 'like' : null} 
                    color={isWatched ? isBroken ? "red" : null : "blue"}
                    onClick={() => setIsWatched(!isWatched)}     
                    onMouseEnter={() => setIsBroken(isWatched && true)}
                    onMouseLeave={() => setIsBroken(false)}
                  >
                  {isWatched ? null : <><Icon name='like' /><span>Отслеживать</span></>}
                </Button>
                <Button
                  color='red'
                  content='Подписаться'
                  label={{ basic: true, color: 'red', pointing: 'left', content: numofSubscr }}
                  />  
              {/*   <Button icon='bell' />
                <Button icon='ellipsis vertical' /> */}
              </div>
            </div>           
        }
        </Container>
      
      </div>    
    )
  }
  