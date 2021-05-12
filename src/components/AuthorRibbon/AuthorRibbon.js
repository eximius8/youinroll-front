import React, { useEffect, useState } from 'react';
import {Button, Image,  Icon, Container, Grid} from "semantic-ui-react";
import "./AuthorRibbon.scss";
//import SideBarItem from '../SideBarItem/SideBarItem';
import axios from 'axios';


function AvaBlock({avaurl}){

  return(
    <div className="avatarblock">
      <Image 
            src={`https://youinroll.com/${avaurl}`}
            size='tiny' 
            circular 
            inline
            className="avatarka"                      
        />
        <div className="live">
          В ЭФИРЕ
        </div>
    </div>
  )
}

function DescrBlock({name, views}){

  return(
    <div className="descriptionblock">          
      <h2>{name}</h2>
      <span className="aboutprofile">
        <strong className="bigger">{views}</strong> Просмотров {' '}
      </span>
    </div>
  )
}


function ButtonBlock({numofSubscr}){

  const [isWatched, setIsWatched] = useState(false);
  const [isBroken, setIsBroken] = useState(false);


  return(
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
    
    </div>
  )
}

export default function AuthorRibbon({authId}){

    const [userData, setUserData] = useState(null);
    const [numofSubscr, setnumofSubscr] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 760);

    const [isWatched, setIsWatched] = useState(false);
    const [isBroken, setIsBroken] = useState(false);

  
    useEffect(() => {
      setIsMobile(window.innerWidth <= 760);
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
    },[authId, setIsMobile])


    if (isMobile){
      return (
      <Container as="div" fluid className="mobilewrapper">
        {userData &&
          <Grid>
            <Grid.Column 
              tablet={8}
              verticalAlign="middle"
              textAlign="center"
            >
              <Image 
                  src={`https://youinroll.com/${userData.avatar}`}
                  size='tiny' 
                  circular 
                  spaced="left"
                  inline
                  /* className="avatarka"                       */
              />
              <div>
                {userData.name}
              </div>
              
            </Grid.Column>
            <Grid.Column 
              tablet={8}
              verticalAlign="middle"
              textAlign="right"
            >                         
              <Button
                size="small"         
                  icon={isWatched ? isBroken ? "heartbeat" : 'like' : null} 
                  color={isWatched ? isBroken ? "red" : null : "blue"}
                  onClick={() => setIsWatched(!isWatched)}     
                  onMouseEnter={() => setIsBroken(isWatched && true)}
                  onMouseLeave={() => setIsBroken(false)}
                >
                {isWatched ? null : <><Icon name='like' /><span>Отслеживать</span></>}
              </Button>              
            </Grid.Column>            
          </Grid>
        }
      </Container>
      )
    }
  
    return(
      <div className="wrapper">      
        <Container as="div" fluid >
          {userData &&
            <div className="channel-info">              
              <AvaBlock avaurl={userData.avatar} />                
              <DescrBlock name={userData.name} views={userData.views} />               
              <ButtonBlock numofSubscr={numofSubscr} />                
            </div>
        }
        </Container>
      
      </div>    
    )
  }
  