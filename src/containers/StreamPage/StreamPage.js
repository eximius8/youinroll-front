import React from 'react';
import "./video-js.scss";
import AuthorRibbon from "../../components/AuthorRibbon/AuthorRibbon"; 
import SideChat from "../SideChat/SideChat";

import VideoPlayer from './video.js';
import { Grid } from 'semantic-ui-react'


//const commentDate = new Date();



const videoJsOptions = {
    autoplay: false,
    controls: true,
    fluid: true,
  
    sources: [{
      src: '//vjs.zencdn.net/v/oceans.mp4',
      type: 'video/mp4'
    }]
  };
  

export default function Stream(){

  return(
    <div className='streambox'>
      <div className="videobox">
        <VideoPlayer { ...videoJsOptions } />
        <AuthorRibbon authId={1} />          
      </div>
      <div className="chatbox">
        <SideChat />    
      </div> 
    </div>
  )
}

