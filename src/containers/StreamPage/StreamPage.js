import React, {useState, useEffect} from 'react';
import "./video-js.scss";
import AuthorRibbon from "../../components/AuthorRibbon/AuthorRibbon"; 
import SideChat from "../SideChat/SideChat";

import VideoPlayer from './video.js';
import { Grid } from 'semantic-ui-react'


//const commentDate = new Date();



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
      <Grid.Column computer={12} mobile={16} className="videobox">
        <VideoPlayer { ...videoJsOptions } />
        <AuthorRibbon authId={1} />          
      </Grid.Column>
      <Grid.Column computer={4} mobile={16}>
        <SideChat />    
      </Grid.Column> 
    </Grid>
  )
}

