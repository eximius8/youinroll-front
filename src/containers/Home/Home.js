import React, { useState, useContext, useEffect } from 'react';
import { Image, Button, Icon, Grid } from 'semantic-ui-react';

//import {connect} from "react-redux";
//import * as videoActions from "../../store/actions/video";
import './Home.scss';
// import {SideBar} from '../SideBar/SideBar';
//import HomeContent from './HomeContent/HomeContent';
//import {bindActionCreators} from 'redux';
//import {getYoutubeLibraryLoaded} from '../../store/reducers/api';
//import {getVideoCategoryIds, videoCategoriesLoaded, videosByCategoryLoaded} from '../../store/reducers/videos';

import TabExampleSecondaryPointing from "../../components/ChannelTabs/ChannelTabs";
import { UserContext } from "../../contexts/UserContext";
import { WindowSizeContext } from "../../contexts/WindowSizeContext";
import axios from "axios";
import { useParams } from "react-router-dom";


const UserRibbon = ({userid}) =>{
  // user avatar + bg img + buttons

  const { user } = useContext(UserContext);
  const [ userdata, setUserData ] = useState(null);
  const { isMobile } = useContext(WindowSizeContext);

 

  useEffect(() => {
    let uidd = userid ? userid : user;    
    axios.get(`https://youinroll.com/profile/${uidd}?api=v1.0`)
      .then((resp) => {
          let uData = resp.data.response;
          let avaurl = "";
          if (uData.avatar.startsWith('https')){
              avaurl = uData.avatar;
          }else if (uData.avatar.startsWith('uploads')){
              avaurl = 'https://react.semantic-ui.com/images/wireframe/square-image.png';
          }
          else{
              avaurl = "https://youinroll.com/" + uData.avatar;
          };
          uData.avatar = avaurl;                
          setUserData(uData);                
      })
      .catch((err) => console.log(err))

  }, [user, userid])

  /* if (isMobile){
    return(
    <>     
      <Image 
        src='https://youinroll.com/storage/uploads/98ccb39ea4855732d019c98aa8f54a62-1.jpg' 
        fluid 
      />
      <Image                   
        src={userdata && userdata.avatar}
        size="tiny"                
        circular 
        inline
        className="mobileauthoravatar"
      />
      <span className="username">{userdata && userdata.name}</span><br/>
              {userdata && !isMobile && `${userdata.views} просмотров`} 
      <div className="authorgrid">
        <Grid>                  
            <Grid.Column mobile={4} computer={1} tablet={3}>
              
            </Grid.Column>
            <Grid.Column verticalAlign="middle" mobile={6} computer={3} tablet={5}>
              
            </Grid.Column>
            <Grid.Column 
              verticalAlign="middle" 
              mobile={6} 
              computer={5} 
              tablet={8}
              floated="right"
              textAlign="right"
            >
              {userdata && <ButtonBlock userid={userid} usertoview={userdata} />}
            </Grid.Column> 
        </Grid>
      </div>           
    </>
    )
  } */
  
  return(
    <>     
      <Image 
        src='https://youinroll.com/storage/uploads/98ccb39ea4855732d019c98aa8f54a62-1.jpg' 
        fluid 
      />
      <div className="authorgrid">
        <Grid>                  
            <Grid.Column mobile={4} computer={1} largeScreen={1}>
              <Image                   
                src={userdata && userdata.avatar}
                size="tiny"                
                circular 
                inline
                className="authoravatar"
              />
            </Grid.Column>
            <Grid.Column verticalAlign={isMobile ? "top" : "middle"} mobile={12} computer={4} largeScreen={3}>
              <span className="username">{userdata && userdata.name}</span><br/>
              {userdata  && `${userdata.views} просмотров`} <br />
              {userdata && isMobile && <div style={{float: "right", paddingTop: '8px'}}><ButtonBlock userid={userid} usertoview={userdata}/> </div>}
            </Grid.Column>
            {!isMobile &&
              <Grid.Column 
                verticalAlign="middle"       
                computer={11}       
                largeScreen={12}  
                textAlign="right"
              >
                {userdata && <ButtonBlock userid={userid} usertoview={userdata} />}
              </Grid.Column> 
            }
        </Grid>
      </div>           
    </>

  )
}


const ButtonBlock = ({userid, usertoview}) => {

  const [isWatched, setIsWatched] = useState(false);
  const [isBroken, setIsBroken] = useState(false);
  const { isMobile } = useContext(WindowSizeContext);
  

  if (usertoview.user_id === userid || !userid){
    return(    
      <Button icon='setting' size="large" />    
    )
  }

  return(
    <>{
        !isMobile &&            
        <Button              
            icon={isWatched ? isBroken ? "heartbeat" : 'like' : null} 
            color={isWatched ? isBroken ? "red" : null : "blue"}
            onClick={() => setIsWatched(!isWatched)}     
            onMouseEnter={() => setIsBroken(isWatched && true)}
            onMouseLeave={() => setIsBroken(false)}
          >
          {isWatched ? null : <><Icon name='like' /><span>Отслеживать</span></>}
        </Button>
      }
      <Button
        color='red'
        content='Подписаться'
        label={isMobile ? null : { basic: true, color: 'red', pointing: 'left', content: '2,048' }}
        />
      {/* <Button icon='bell' /> */}
      <Button icon='ellipsis vertical' />
    </>
  )
}


export default function Home(){

  const { userdata } = useContext(UserContext);
  const [ usertoview, setUserToView ] = useState(userdata);
  let { userid } = useParams();

  useEffect(() => {
    if (!userid){
      setUserToView(userdata)
    }else{
      axios.get(`https://youinroll.com/profile/${userid}?api=v1.0`)
            .then((resp) => {
                let uData = resp.data.response;
                let avaurl = "";
                if (uData.avatar.startsWith('https')){
                    avaurl = uData.avatar;
                }else if (uData.avatar.startsWith('uploads')){
                    avaurl = 'https://react.semantic-ui.com/images/wireframe/square-image.png';
                }
                else{
                    avaurl = "https://youinroll.com/" + uData.avatar;
                };
                uData.avatar = avaurl;                
                setUserToView(uData);                
            })
            .catch((err) => console.log(err))
    }
  }, [userid, userdata])
  

  return(
    <div className="home">
      <UserRibbon userid={userid} />
      <TabExampleSecondaryPointing />
      
    </div>    
  )
}
