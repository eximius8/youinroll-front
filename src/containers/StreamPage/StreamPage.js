import React, {useState, useEffect} from 'react';
import "./video-js.scss";
import AuthorRibbon from "../../components/AuthorRibbon/AuthorRibbon"; 
import SideChat from "../SideChat/SideChat";

import VideoPlayer from './video.js';
import { Grid, Button, Icon } from 'semantic-ui-react'


//const commentDate = new Date();

const oneside = <svg width="20px" height="20px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px">
                    <g><path  d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z"></path></g> 
                  </svg>
const otherside = <svg width="20px" height="20px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px">
                    <g><path d="M4 16V4H2v12h2zM13 15l-1.5-1.5L14 11H6V9h8l-2.5-2.5L13 5l5 5-5 5z"></path></g>
                  </svg>   


const videoJsOptions = {
    autoplay: true,
    controls: true,
    fluid: true,
  
    sources: [{
      src: 'https://smartfooded.com:8443/hls/336ba1b91e78c351b16832999cb5ad67.m3u8',
     /*  type: 'video/mp4' */
    }]
  };
  

export default function Stream(){

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 760);
  const [showChat, setShowChat] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 760)    
  },[setIsMobile])

  if (isMobile){
    return (
    <Grid className='mobilestreambox'>
      <Grid.Column mobile={16} className="mobilevideobox">
        <VideoPlayer { ...videoJsOptions } />
        <AuthorRibbon authId={1} />          
      </Grid.Column>
      <Grid.Column mobile={16}>
        <SideChat />    
      </Grid.Column> 
    </Grid>
    )
  }

  

  return(
    <Grid className='streambox'>
      <Grid.Column computer={showChat ? 11 : 16}  className="videobox">
        <VideoPlayer { ...videoJsOptions } />
        <AuthorRibbon authId={1} />          
      </Grid.Column>
      {showChat &&
        <Grid.Column computer={5} mobile={16}>
          <SideChat />
        </Grid.Column>         
      }
      <div className="divicon">
        <Button 
          icon fluid
          onClick={() => setShowChat(!showChat)}
        >          
          {showChat ? otherside : oneside}          
        </Button>        
      </div>
    </Grid>
  )
}

