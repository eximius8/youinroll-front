import React from 'react';
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
      src: '//vjs.zencdn.net/v/oceans.mp4',
      type: 'video/mp4'
    }]
  };
  

export default function Stream(){

  return(
    <div className="videobox">
        <Grid columns={16}>            
                <Grid.Column width={11}>
                    <VideoPlayer { ...videoJsOptions } />
                    <AuthorRibbon authId={1} />
                </Grid.Column>
                <Grid.Column width={5}>
                  <SideChat />
                </Grid.Column>           
               
      </Grid>
    </div>    
  )
}

